import re
with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'(id:\s*\"abu_bakr\".*?skill_ikon:\s*\")[^\"]*(\")', r'\g<1>🤝 🛡️\g<2>', text, flags=re.DOTALL)
text = re.sub(r'(id:\s*\"umar_khattab\".*?skill_ikon:\s*\")[^\"]*(\")', r'\g<1>⚖️ ⚔️\g<2>', text, flags=re.DOTALL)
text = re.sub(r'(id:\s*\"utsman_affan\".*?skill_ikon:\s*\")[^\"]*(\")', r'\g<1>💰 🕊️\g<2>', text, flags=re.DOTALL)
text = re.sub(r'(id:\s*\"ali_thalib\".*?skill_ikon:\s*\")[^\"]*(\")', r'\g<1>🗡️ 📖\g<2>', text, flags=re.DOTALL)
text = re.sub(r'(id:\s*\"bilal_rabah\".*?skill_ikon:\s*\")[^\"]*(\")', r'\g<1>🗣️ ⛓️\g<2>', text, flags=re.DOTALL)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)
print('Fixed skill_ikons')
