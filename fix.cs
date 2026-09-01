using System;
using System.IO;
using System.Text;

class Program
{
    static void Main()
    {
        string path = @"js\data.js";
        string content = File.ReadAllText(path, Encoding.UTF8);

        content = content.Replace("ï·º", "ﷺ");
        content = content.Replace("â€“", "–");
        content = content.Replace("â€™", "'");
        content = content.Replace("â€œ", "\"");
        content = content.Replace("â€ ", "\"");

        File.WriteAllText(path, content, new UTF8Encoding(false));
    }
}
