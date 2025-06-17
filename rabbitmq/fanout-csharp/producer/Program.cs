using RabbitMQ.Client;
using System.Text;

var factory = new ConnectionFactory { HostName = "localhost" };
using var connection = await factory.CreateConnectionAsync();
using var channel = await connection.CreateChannelAsync();

await channel.ExchangeDeclareAsync(
        exchange: "my-logs", 
        type: ExchangeType.Fanout);

string[] messages = 
[
    "log 1",
    "log 2",
    "log 3"
];

foreach(var log in messages)
{
    var body = Encoding.UTF8.GetBytes(log);

    await channel.BasicPublishAsync(
            exchange: "my-logs",
            routingKey: string.Empty,
            body: body);
}
