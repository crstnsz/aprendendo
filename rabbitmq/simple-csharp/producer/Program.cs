using RabbitMQ.Client;
using System.Text;

var factory = new ConnectionFactory
{
    Uri = new Uri("amqp://localhost")
};

using var connection = await factory.CreateConnectionAsync();
using var channel = await connection.CreateChannelAsync();

await channel.QueueDeclareAsync(queue: "my_queue", durable: true, exclusive: false,
    autoDelete: false, arguments: null);

string[] messages = [
    "message 1",
    "hello",
    "data to send"
];


foreach(var message in messages)
{
    var body = Encoding.UTF8.GetBytes(message);

    await channel.BasicPublishAsync(
            exchange: string.Empty,
            routingKey: "my_queue",
            mandatory: true,
            basicProperties: new BasicProperties() { Persistent = true }, 
            body: body);
}
