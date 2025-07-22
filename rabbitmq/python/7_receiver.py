#!/usr/bin/env python
import pika
import sys

def callback(ch, method, properties, body):
    print(" [x] %r:%r" % (properties.headers, body))

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='header_logs', exchange_type='headers')

result = channel.queue_declare('', exclusive=True)
queue_name = result.method.queue

binding_keys = sys.argv[1:]
if not binding_keys:
    sys.stderr.write("Usage: %s [component] [severity]...\n" % sys.argv[0])
    sys.exit(1)

headers = {}
headers["component"] = sys.argv[1]
headers["severity"] = sys.argv[2]

channel.queue_bind(
    exchange='header_logs', queue=queue_name, routing_key='', arguments=headers)

print(' [*] Waiting for logs. To exit press CTRL+C')

channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()