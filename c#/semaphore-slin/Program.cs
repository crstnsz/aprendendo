using System;
using System.Threading;
using System.Threading.Tasks;

public class Example
{
    private static readonly SemaphoreSlim semaphore = new SemaphoreSlim(1, 1);

    public static void Main()
    {
        // Create the semaphore.
        Console.WriteLine("{0} tasks can enter the semaphore.",
                          semaphore.CurrentCount);
        // Create and start five numbered tasks.
        for (int i = 0; i <= 4; i++)
        {
            Task.Run(() =>
            {
                // Each task begins by requesting the semaphore.
                Console.WriteLine("Task {0} begins and waits for the semaphore.",
                                  Task.CurrentId);
                
                int semaphoreCount;
                semaphore.Wait();
                try
                {

                    Console.WriteLine("Task {0} enters the semaphore.", Task.CurrentId);

                    Thread.Sleep(1000);
                }
                catch(Exception exp)
                {
                    Console.WriteLine(exp.Message + ": " + exp.StackTrace);
                }
                finally {
                    Console.WriteLine("Task {0} release the semaphore.", Task.CurrentId);
                    semaphoreCount = semaphore.Release();
                }
            });
        }

        Console.WriteLine("Test Completed");
        Console.ReadLine();
    }
}