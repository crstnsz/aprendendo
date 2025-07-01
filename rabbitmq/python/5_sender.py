#!/usr/bin/env python
import pika
import time

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='topic_logs', exchange_type='topic')

messages =   ["Primeiro log", "Segundo log", "Terceiro log", "Quarto log", "Quinto log"];
severities = ["info"	    , "error"	   , "warning"	   , "error"	 , "info"	   ];
components = ["A"			, "B"		   , "A"		   , "A"	     , "B"	   	   ];

for i in range(0, 5):
	routing_key = components[i] + "." + severities[i]

	channel.basic_publish(exchange='topic_logs', routing_key=routing_key, body=messages[i])
	print(" [x] Sent %r:%r" % (routing_key, messages[i]))
	time.sleep(1)

connection.close()