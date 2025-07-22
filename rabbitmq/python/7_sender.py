#!/usr/bin/env python
import pika
import time

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='header_logs', exchange_type='headers')

messages =   ["Primeiro log", "Segundo log", "Terceiro log", "Quarto log", "Quinto log"];
severities = ["info"	    , "error"	   , "warning"	   , "error"	 , "info"	   ];
components = ["A"			, "B"		   , "A"		   , "A"	     , "B"	   	   ];

for i in range(0, 5):
    props = pika.BasicProperties(headers={'component': components[i], 'severity': severities[i]})
    channel.basic_publish(exchange='header_logs', routing_key='', body=messages[i], properties=props)
    print(" [x] Sent %r:%r" % (props.headers, messages[i]))
    time.sleep(1)

connection.close()