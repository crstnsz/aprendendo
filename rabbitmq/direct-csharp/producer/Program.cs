using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System.Text;

var factory = new ConnectionFactory { HostName = "localhost" };
 using var connection = await factory.CreateConnectionAsync();
 using var channel = await connection.CreateChannelAsync();

 await channel.ExchangeDeclareAsync(
         exchange: "my-direct",
         type: ExchangeType.Direct);



Message[] messages =
[
    new Message("A", "Message 1 to A"),
    new Message("A", "Message 2 to A"),
    new Message("B", "Message 1 to B"),
    new Message("B", "Message 2 to B"),
];

foreach(var message in messages)
{
    await channel.BasicPublishAsync(
            exchange: "my-direct",
            routingKey: message.Direction,
            body: Encoding.UTF8.GetBytes(message.Body));
}

record Message(string Direction, string Body);
