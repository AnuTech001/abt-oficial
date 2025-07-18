import os

# Extensões que deseja contar
extensoes = ('.html', '.css', '.js', '.py')
total_linhas = 0

# Percorre todos os arquivos e conta
for root, _, files in os.walk('../../'):
    for file in files:
        if file.endswith(extensoes):
            caminho = os.path.join(root, file)
            try:
                with open(caminho, encoding='utf-8') as f:
                    linhas_arquivo = sum(1 for _ in f)
                    total_linhas += linhas_arquivo
            except Exception as e:
                print(f"Erro ao ler {caminho}: {e}")

# Garante que a pasta de saída exista
os.makedirs('assets/data', exist_ok=True)

# Salva o JSON
saida_json = 'assets/data/linhas.json'
with open(saida_json, 'w', encoding='utf-8') as json_file:
    json_file.write(f'{{"total": {total_linhas}}}')

print(f"✅ Total de linhas: {total_linhas} (salvo em {saida_json})")
