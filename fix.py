import sys

def fix_file(filepath):
    # Read as utf-8. We assume the file is valid UTF-8 but contains literally the text "ï·º"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements for common utf-8 mojibake
    # "ï·º" is what "ﷺ" (U+FDFA) looks like when its UTF-8 bytes (EF B7 BA) are decoded as Windows-1252.
    content = content.replace('ï·º', 'ﷺ')
    
    # "â€“" is what "–" (en-dash, U+2013) looks like when its UTF-8 bytes (E2 80 93) are decoded as Windows-1252.
    content = content.replace('â€“', '–')
    
    # "â€™" is right single quote
    content = content.replace('â€™', "'")
    
    # "â€œ" and "â€ " are smart quotes
    content = content.replace('â€œ', '"')
    content = content.replace('â€ ', '"')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    fix_file('js/data.js')
    print("Fixed js/data.js")
