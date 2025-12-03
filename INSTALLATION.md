# 🚀 Guia de Instalação - S-Elevate

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 16.x ou superior
- **npm** 8.x ou superior (vem com Node.js)

### Verificar Instalação

```bash
node --version   # Deve retornar v16.x ou superior
npm --version    # Deve retornar 8.x ou superior
```

### Instalar Node.js (se necessário)

**macOS**:
```bash
# Usando Homebrew
brew install node

# Ou baixe diretamente de https://nodejs.org
```

**Windows**:
- Baixe o instalador em https://nodejs.org
- Execute o instalador e siga as instruções

**Linux**:
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Fedora
sudo dnf install nodejs

# Arch
sudo pacman -S nodejs npm
```

---

## 📦 Instalação do Projeto

### 1. Navegue até o diretório do projeto

```bash
cd /Users/jeanpereira/Desktop/S-Elevate
```

### 2. Instale as dependências

```bash
npm install
```

Este comando irá instalar todos os pacotes necessários:
- React 18.2
- React DOM 18.2
- Vite 5.0
- Tailwind CSS 3.3
- Framer Motion 10.16
- Lucide React 0.292
- Autoprefixer & PostCSS

**Tempo estimado**: 2-3 minutos (dependendo da conexão)

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000`

Você verá uma mensagem como:
```
VITE v5.0.0  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help
```

### 4. Abra no navegador

O navegador deve abrir automaticamente. Caso contrário, acesse manualmente:
```
http://localhost:3000
```

---

## 🛠️ Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev
```
- Inicia servidor de desenvolvimento
- Hot Module Replacement (HMR) ativo
- Abre automaticamente no navegador

### Build de Produção
```bash
npm run build
```
- Cria build otimizado na pasta `dist/`
- Minifica JavaScript e CSS
- Tree-shaking e code splitting
- Sourcemaps incluídos

### Preview do Build
```bash
npm run preview
```
- Serve o build de produção localmente
- Útil para testar antes do deploy

### Linter
```bash
npm run lint
```
- Verifica código com ESLint
- Identifica problemas de qualidade

---

## 📁 Estrutura de Arquivos

Após a instalação, você terá:

```
S-Elevate/
├── node_modules/          # Dependências instaladas
├── public/                # Assets estáticos
│   └── vite.svg
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── SocialProof.jsx
│   │   ├── Demo.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entry point
│   └── index.css         # Estilos globais
├── index.html            # HTML base
├── package.json          # Dependências e scripts
├── package-lock.json     # Lock file (gerado após npm install)
├── vite.config.js        # Configuração Vite
├── tailwind.config.js    # Configuração Tailwind
├── postcss.config.js     # Configuração PostCSS
├── .eslintrc.cjs         # Configuração ESLint
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Documentação principal
├── COPY-CONTENT.md       # Conteúdo do site
├── WIREFRAMES.md         # Wireframes e design
├── QA-REPORT.md          # Relatório de qualidade
└── INSTALLATION.md       # Este arquivo
```

---

## 🔧 Solução de Problemas

### Erro: "command not found: npm"

**Solução**: Node.js não está instalado. Siga as instruções de instalação acima.

### Erro: "Cannot find module..."

**Solução**: Execute novamente `npm install`

### Erro: Port 3000 já está em uso

**Solução**:
```bash
# Encerre o processo na porta 3000
lsof -ti:3000 | xargs kill -9

# Ou use outra porta
npm run dev -- --port 3001
```

### Erro: "EACCES: permission denied"

**Solução** (macOS/Linux):
```bash
# Corrija permissões do npm
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

### Build falha com erro de memória

**Solução**:
```bash
# Aumente o limite de memória do Node
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Hot reload não funciona

**Solução**:
1. Certifique-se de que está editando arquivos dentro de `src/`
2. Verifique se há erros no console
3. Reinicie o servidor de desenvolvimento

---

## 🌐 Variáveis de Ambiente (Futuro)

Quando integrar com APIs, crie um arquivo `.env`:

```bash
# .env
VITE_API_URL=https://api.s-elevate.com
VITE_STRIPE_PUBLIC_KEY=pk_test_xxxxx
VITE_ANALYTICS_ID=UA-xxxxx
```

**Importante**: Nunca commite o arquivo `.env` no Git!

---

## 📦 Deploy

### Vercel (Recomendado)

1. Instale Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Siga as instruções no terminal

### Netlify

1. Instale Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

### Build Manual

1. Crie o build:
```bash
npm run build
```

2. A pasta `dist/` contém todos os arquivos
3. Faça upload da pasta `dist/` para seu servidor

---

## 🔄 Atualizações

### Atualizar Dependências

```bash
# Verificar dependências desatualizadas
npm outdated

# Atualizar para versões minor/patch
npm update

# Atualizar para versões major (cuidado!)
npx npm-check-updates -u
npm install
```

### Manter Segurança

```bash
# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades automaticamente
npm audit fix
```

---

## 📞 Suporte

Se encontrar problemas durante a instalação:

1. Verifique a documentação em `README.md`
2. Consulte os logs de erro completos
3. Procure por issues similares no GitHub
4. Entre em contato: contato@s-elevate.com

---

## ✅ Checklist de Instalação

- [ ] Node.js instalado (v16+)
- [ ] npm instalado (v8+)
- [ ] Dependências instaladas (`npm install`)
- [ ] Servidor de desenvolvimento iniciado (`npm run dev`)
- [ ] Site abre no navegador (http://localhost:3000)
- [ ] Hot reload funcionando
- [ ] Sem erros no console

---

**Instalação Completa! 🎉**

Agora você está pronto para desenvolver e personalizar o site S-Elevate.

Próximos passos:
1. Explore os componentes em `src/components/`
2. Personalize cores em `tailwind.config.js`
3. Atualize conteúdo conforme necessário
4. Adicione suas próprias imagens e vídeos
5. Integre com backend quando pronto

Bom desenvolvimento! 🚀






