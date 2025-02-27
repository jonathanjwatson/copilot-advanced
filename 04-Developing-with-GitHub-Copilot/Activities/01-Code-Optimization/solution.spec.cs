using System;
using System.IO;
using Xunit;

public class ProgramTests
{
    [Fact]
    public void TestFibonacciSequence()
    {
        // Arrange
        var expectedOutput = "0 1 1 2 3 5 8 13 21 34 ";
        var writer = new StringWriter();
        Console.SetOut(writer);

        // Act
        Program.Main();

        // Assert
        var output = writer.GetStringBuilder().ToString().Trim();
        Assert.Equal(expectedOutput, output);
    }
}