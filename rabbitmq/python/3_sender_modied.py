#!/usr/bin/env python
import pika
import time

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='logs', exchange_type='fanout')

messages = ["Primeiro log", "Segundo log", "Terceiro log", "Quarto log", "Quinto log"];

for message in messages:
	channel.basic_publish(exchange='logs',
						  routing_key='',
						  body=message)
	print(" [x] Enviada '" + message + "'")
	time.sleep(1)

connection.close()