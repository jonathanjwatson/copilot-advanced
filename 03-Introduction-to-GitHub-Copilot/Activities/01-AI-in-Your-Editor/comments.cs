// TODO: Add Javadocs to this function

public class Invoice
{
    public decimal BaseCost { get; set; }
    public decimal Tax { get; set; }
    public decimal Total { get; set; }
}

public class InvoiceGenerator
{
    private const decimal TaxRate = 0.1m;

    public Invoice GenerateInvoice(decimal baseCost)
    {
        decimal tax = baseCost * TaxRate;
        decimal total = baseCost + tax;

        return new Invoice
        {
            BaseCost = baseCost,
            Tax = tax,
            Total = total
        };
    }
}

// C# is not my primary language. I'm trusting Copilot and this source
// https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/recommended-tags