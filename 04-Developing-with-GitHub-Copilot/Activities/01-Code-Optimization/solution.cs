using System;

class Program
{
    static void Main()
    {
        const int sequenceLength = 10; // Length of the Fibonacci sequence to generate
        int firstNumber = 0, secondNumber = 1; // Initial two numbers of the Fibonacci sequence

        // Print the first two numbers of the sequence
        Console.Write($"{firstNumber} {secondNumber} ");

        // Loop to generate the rest of the Fibonacci sequence
        for (int i = 2; i < sequenceLength; ++i)
        {
            int nextNumber = firstNumber + secondNumber; // Calculate the next number in the sequence
            Console.Write($"{nextNumber} "); // Print the next number
            firstNumber = secondNumber; // Update firstNumber to the previous secondNumber
            secondNumber = nextNumber; // Update secondNumber to the newly calculated nextNumber
        }
    }
}