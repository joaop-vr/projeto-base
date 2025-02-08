
# Projeto Base - Front-End

## Começando

Após clonar o repositório, execute o seguinte comando para instalar as dependências do projeto:

```bash
cd front-end && npm install
```

## 🔧 Comandos úteis

### 1) `npm run dev`

Esse comando inicia o servidor de desenvolvimento do Vite, que é otimizado para um ciclo de desenvolvimento rápido.

**O que acontece?**
- O Vite cria um servidor local para rodar a aplicação.
- Arquivos não são compilados de verdade; o Vite usa ES Modules e HMR (Hot Module Replacement) para atualizar apenas partes do código sem recarregar toda a página.
- É rápido e leve, bom para o desenvolvimento.

**Limitações:**
- Não aplica otimizações de produção (minificação, tree-shaking, código dividido em chunks).
- Não comprime arquivos.

---

### 2) `npm run build && npm run preview`

Aqui temos dois comandos:

#### `npm run build`

Esse comando gera a versão de produção da aplicação:

- Compila os arquivos `.vue` e `.ts` para JavaScript puro.
- Minifica o código (reduz tamanho, remove espaços).
- Separa arquivos em chunks para melhor carregamento.
- Gera os arquivos estáticos dentro da pasta `dist/`.

Ou seja, agora a aplicação está pronta para ser servida em um servidor real.

*Obs.:* O Progressive Web App (PWA) só funcionará corretamente em ambiente de produção, após a execução de `npm run build`.

#### `npm run preview`

Esse comando simula um servidor de produção localmente:

- Serve os arquivos já compilados dentro de `dist/`.
- Simula o comportamento real em produção.
- Não usa HMR, então você precisa rodar `npm run build` novamente se fizer mudanças.

---

### 3) `serve -s dist`

Esse comando usa a ferramenta `serve` para rodar a aplicação como um servidor estático real.

**O que acontece?**
- Serve os arquivos de `dist/` como se fosse um servidor real.
- Simula um ambiente de produção real, diferente de `npm run preview`, que ainda usa algumas otimizações do Vite.
- Ideal para testar Gzip/Brotli, performance e comportamento real da aplicação.

**Passo adicional:** Antes de rodar o comando, instale o `serve` globalmente:

```bash
npm install -g serve
```

Depois, execute:

```bash
serve -s dist
```

**Resumo:** `serve -s dist` é mais próximo do que aconteceria em um servidor real, útil para testes de produção.

