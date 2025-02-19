using System;

class Program
{
    static void Main()
    {
        int a = 0, b = 1, c, i;
        Console.Write(a + " " + b + " ");
        for (i = 2; i < 10; ++i)
        {
            c = a + b;
            Console.Write(c + " ");
            a = b;
            b = c;
        }
    }
}