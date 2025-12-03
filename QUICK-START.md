# ⚡ Quick Start Guide - S-Elevate

## 🚀 Início Rápido (5 minutos)

### Passo 1: Instalar Dependências
```bash
cd /Users/jeanpereira/Desktop/S-Elevate
npm install
```

### Passo 2: Iniciar Servidor
```bash
npm run dev
```

### Passo 3: Abrir no Navegador
```
http://localhost:3000
```

**Pronto! 🎉 O site está rodando localmente.**

---

## 📋 Comandos Essenciais

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Servidor inicia em http://localhost:3000
# Hot reload ativo (mudanças aparecem automaticamente)
```

### Build de Produção
```bash
# Criar build otimizado
npm run build

# Arquivos gerados em: dist/
# Pronto para deploy
```

### Preview do Build
```bash
# Testar build localmente
npm run preview

# Abre em http://localhost:4173
```

### Linting
```bash
# Verificar qualidade do código
npm run lint

# Corrigir problemas automaticamente
npm run lint -- --fix
```

---

## 🗂️ Estrutura de Arquivos

```
S-Elevate/
│
├── src/                    # Código fonte
│   ├── components/        # Componentes React
│   │   ├── Navbar.jsx    # ← Edite aqui
│   │   ├── Hero.jsx      # ← Edite aqui
│   │   └── ...
│   ├── App.jsx           # Componente principal
│   └── index.css         # Estilos globais
│
├── public/                # Assets estáticos
│   └── vite.svg
│
├── package.json          # Dependências
├── tailwind.config.js    # Config Tailwind
└── vite.config.js        # Config Vite
```

---

## ✏️ Como Editar o Conteúdo

### 1. Mudar Textos

**Abra o componente desejado:**
```bash
src/components/Hero.jsx     # Seção Hero
src/components/HowItWorks.jsx  # Como Funciona
src/components/FAQ.jsx      # Perguntas
```

**Edite os textos diretamente:**
```jsx
// Antes
<h1>Internacionalize sua marca com IA</h1>

// Depois
<h1>Seu Novo Título Aqui</h1>
```

### 2. Mudar Cores

**Abra:** `tailwind.config.js`

```javascript
colors: {
  teal: {
    400: '#2dd4bf',  // ← Mude aqui
    500: '#14b8a6',
  },
  purple: {
    600: '#9333ea',  // ← Mude aqui
  },
}
```

### 3. Adicionar Imagens

**1. Coloque a imagem em:** `public/images/`
```bash
public/images/seu-logo.png
```

**2. Use no componente:**
```jsx
<img src="/images/seu-logo.png" alt="Logo" />
```

---

## 🎨 Customizações Rápidas

### Mudar Logo
**Arquivo:** `src/components/Navbar.jsx`

```jsx
// Linha ~13
<Globe className="w-8 h-8 text-teal-400" />
<span className="text-2xl font-bold text-gradient">S-Elevate</span>

// Substitua por:
<img src="/images/seu-logo.svg" alt="Logo" className="w-8 h-8" />
<span className="text-2xl font-bold">Sua Marca</span>
```

### Mudar CTAs
**Arquivo:** `src/components/Hero.jsx`

```jsx
// Linha ~85
<button>Testar o Workflow</button>

// Mude para:
<button onClick={() => window.location.href='/signup'}>
  Começar Grátis
</button>
```

### Adicionar Link Externo
```jsx
<a
  href="https://seu-site.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visitar Site
</a>
```

---

## 🚀 Deploy Rápido

### Opção 1: Vercel (Recomendado)

**1. Instalar CLI:**
```bash
npm install -g vercel
```

**2. Deploy:**
```bash
vercel
```

**3. Seguir prompts**
- Login com GitHub/Email
- Confirmar configurações
- Deploy automático!

**Resultado:** `https://seu-projeto.vercel.app`

---

### Opção 2: Netlify

**1. Instalar CLI:**
```bash
npm install -g netlify-cli
```

**2. Deploy:**
```bash
netlify deploy --prod
```

**3. Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`

**Resultado:** `https://seu-projeto.netlify.app`

---

### Opção 3: Manual (Qualquer Servidor)

**1. Build:**
```bash
npm run build
```

**2. Upload:**
- Pasta `dist/` contém tudo
- Faça upload via FTP/SFTP
- Configure servidor para SPA

**3. Configurar servidor:**
```nginx
# nginx.conf
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## 🔧 Troubleshooting Rápido

### Port 3000 em uso
```bash
# Usar outra porta
npm run dev -- --port 3001
```

### Módulos não encontrados
```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Cache do Vite
```bash
# Limpar cache
rm -rf node_modules/.vite
npm run dev
```

### Erro de build
```bash
# Aumentar memória
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## 📱 Testar em Dispositivos

### Desktop
- Chrome DevTools: `F12` → Toggle device toolbar
- Firefox: `Ctrl+Shift+M`
- Safari: Develop → Enter Responsive Design Mode

### Mobile Real
```bash
# 1. Descobrir seu IP local
ifconfig | grep inet  # Mac/Linux
ipconfig              # Windows

# 2. Usar IP no celular
http://192.168.1.XXX:3000

# Certifique-se de estar na mesma rede!
```

---

## 🎯 Checklist Pré-Deploy

### Antes de colocar no ar:

- [ ] Textos revisados
- [ ] Imagens otimizadas (< 200KB cada)
- [ ] Links testados
- [ ] CTAs funcionando
- [ ] Formulários conectados
- [ ] Analytics configurado
- [ ] SEO verificado (título, descrição, keywords)
- [ ] Favicon adicionado
- [ ] Build sem erros
- [ ] Testado em mobile
- [ ] Testado em múltiplos navegadores

---

## 🔗 Links Úteis

### Documentação
- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com
- **Vite**: https://vitejs.dev
- **Framer Motion**: https://www.framer.com/motion

### Deploy
- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com

### Assets
- **Unsplash** (imagens): https://unsplash.com
- **Lucide** (ícones): https://lucide.dev
- **Google Fonts**: https://fonts.google.com

---

## 💡 Dicas Rápidas

### Performance
```bash
# Analisar tamanho do bundle
npm run build
# Verificar dist/ folder
```

### SEO
```html
<!-- Atualizar meta tags em index.html -->
<title>Seu Título | S-Elevate</title>
<meta name="description" content="Sua descrição aqui">
```

### Analytics
```html
<!-- Adicionar Google Analytics em index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

---

## ⌨️ Atalhos de Desenvolvimento

```bash
# Terminal
Ctrl + C          # Parar servidor
Ctrl + L          # Limpar terminal
↑ (arrow up)      # Comando anterior

# VSCode
Cmd/Ctrl + P      # Buscar arquivo
Cmd/Ctrl + Shift + P  # Command palette
Cmd/Ctrl + B      # Toggle sidebar
Cmd/Ctrl + `      # Toggle terminal
```

---

## 📊 Monitoramento Pós-Deploy

### Ferramentas Recomendadas

**Performance:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

**Uptime:**
- UptimeRobot (gratuito)
- Pingdom

**Analytics:**
- Google Analytics
- Plausible (privacy-focused)

**Erros:**
- Sentry
- LogRocket

---

## 🆘 Precisa de Ajuda?

### Recursos
1. Leia `README.md` completo
2. Consulte `INSTALLATION.md` para detalhes
3. Veja `VISUAL-GUIDE.md` para design
4. Cheque `QA-REPORT.md` para testes

### Comunidade
- React: https://react.dev/community
- Tailwind: https://github.com/tailwindlabs/tailwindcss/discussions
- Stack Overflow: https://stackoverflow.com

---

## 🎉 Você está pronto!

```
┌─────────────────────────────────┐
│  S-Elevate está pronto para     │
│  ser personalizado e colocado   │
│  no ar!                         │
│                                 │
│  Próximo passo:                 │
│  npm install && npm run dev     │
│                                 │
│  Boa sorte! 🚀                  │
└─────────────────────────────────┘
```

---

**Quick Reference Card**

```
┌──────────────────────────────────────┐
│ COMANDOS ESSENCIAIS                  │
├──────────────────────────────────────┤
│ npm install      # Instalar deps     │
│ npm run dev      # Desenvolvimento   │
│ npm run build    # Build produção    │
│ npm run preview  # Testar build      │
│ npm run lint     # Verificar código  │
├──────────────────────────────────────┤
│ ARQUIVOS IMPORTANTES                 │
├──────────────────────────────────────┤
│ src/App.jsx           # App principal│
│ src/components/       # Componentes  │
│ tailwind.config.js    # Cores/styles │
│ index.html            # HTML base    │
├──────────────────────────────────────┤
│ PORTAS                               │
├──────────────────────────────────────┤
│ :3000  # Desenvolvimento (dev)       │
│ :4173  # Preview build (preview)     │
└──────────────────────────────────────┘
```

**Salve este card para referência rápida!** 📌






