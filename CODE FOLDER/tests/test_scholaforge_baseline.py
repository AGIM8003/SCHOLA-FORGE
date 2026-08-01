"""ScholaForge baseline test suite — validates project structure."""
import sys, os

passed = 0
failed = 0

def check(name, condition, msg=''):
    global passed, failed
    if condition:
        passed += 1
        print(f'  PASS: {name}')
    else:
        failed += 1
        print(f'  FAIL: {name} — {msg}')

print('=== SCHOLAFORGE BASELINE TESTS ===')

src_dir = os.path.join(os.path.dirname(__file__), '..', 'src')
check('T01_src_exists', os.path.isdir(src_dir))

js_files = []
for root, dirs, files in os.walk(src_dir):
    for fn in files:
        if fn.endswith('.js') or fn.endswith('.mjs'):
            js_files.append(fn)
check('T02_has_source', len(js_files) > 0, f'{len(js_files)} JS files')

evidence = os.path.join(os.path.dirname(__file__), '..', 'evidence')
check('T03_evidence_exists', os.path.isdir(evidence))

readme = os.path.join(os.path.dirname(__file__), '..', 'README.md')
check('T04_readme_exists', os.path.isfile(readme))

print(f'\n=== SUMMARY: {passed} passed, {failed} failed ===')
if failed > 0:
    sys.exit(1)
