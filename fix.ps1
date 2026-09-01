$c = Get-Content 'js\data.js' -Raw -Encoding UTF8
$c = [System.Text.RegularExpressions.Regex]::Replace($c, '\u00EF\u00B7\u00BA', [string][char]0xFDFA)
$c = [System.Text.RegularExpressions.Regex]::Replace($c, '\u00E2\u20AC\u201C', '-')
Set-Content -Path 'js\data.js' -Value $c -Encoding UTF8
