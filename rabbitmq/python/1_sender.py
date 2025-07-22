#!/usr/bin/env python
import pika
import time

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.queue_declare(queue='hello')

messages = ["Primeira mensagem", "Segunda mensagem", "Terceira mensagem", "Quarta mensagem", "Quinta mensagem"];

for message in messages:
	channel.basic_publish(exchange='',
						  routing_key='hello',
						  body=message)
	print(" [x] Enviada '" + message + "'")
	time.sleep(1)

connection.close()