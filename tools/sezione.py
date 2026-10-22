#!/usr/bin/env python3
"""Legge o sostituisce una sezione '## <titolo>' di un articolo di viaggio.
Uso: sezione.py get <file> <prefisso-titolo>      → stampa il corpo
     sezione.py set <file> <prefisso-titolo> <nuovo-corpo.md>
     sezione.py append-note <file> <testo>        → aggiunge una nota in 'Materiale grezzo'"""
import re, sys
from pathlib import Path

def bounds(s, pref):
    m = re.search(r'^## ' + re.escape(pref) + r'.*$', s, re.M)
    if not m: raise SystemExit(f'sezione non trovata: {pref}')
    start = m.end() + 1
    n = re.search(r'^## ', s[start:], re.M)
    end = start + n.start() if n else len(s)
    return start, end

cmd, f = sys.argv[1], Path(sys.argv[2])
s = f.read_text(encoding='utf-8')
if cmd == 'get':
    a, b = bounds(s, sys.argv[3]); print(s[a:b].rstrip())
elif cmd == 'set':
    a, b = bounds(s, sys.argv[3])
    new = Path(sys.argv[4]).read_text(encoding='utf-8').strip() + '\n\n'
    old_heads = re.findall(r'^### .*$', s[a:b], re.M)
    new_heads = re.findall(r'^### .*$', new, re.M)
    if old_heads != new_heads:
        raise SystemExit('ERRORE: i titoli ### non coincidono\n' + '\n'.join(sorted(set(old_heads) ^ set(new_heads))))
    f.write_text(s[:a] + new + s[b:], encoding='utf-8'); print('ok', f.name)
elif cmd == 'append-note':
    note = sys.argv[3]
    m = re.search(r'^## Materiale grezzo.*$', s, re.M)
    if m:
        a, b = bounds(s, 'Materiale grezzo')
        s = s[:b].rstrip() + '\n\n**Note di redazione (revisione 22/10/2026):** ' + note + '\n\n' + s[b:]
    else:
        t = re.search(r'^## Tag', s, re.M)
        block = '## Materiale grezzo (appunti, non ancora editato)\n**Note di redazione (revisione 22/10/2026):** ' + note + '\n\n'
        s = s[:t.start()] + block + s[t.start():] if t else s.rstrip() + '\n\n' + block
    f.write_text(s, encoding='utf-8'); print('nota ok', f.name)
