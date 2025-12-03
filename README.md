# 🚀 S-Elevate - Internacionalização com IA

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.5-38bdf8.svg?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF.svg?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> 🎯 Plataforma SaaS para tradução e clonagem de avatares em vídeo usando workflow N8N e IA avançada.

**[🌐 Ver Demo](https://YOUR-SITE.netlify.app)** • **[📖 Documentação](./DEPLOY-NETLIFY.md)** • **[🐛 Report Bug](https://github.com/Jeanfr1/siteelevate/issues)**

## 🎯 Visão Geral

S-Elevate é uma solução moderna e inovadora para empresas que desejam internacionalizar seu conteúdo em vídeo. Nossa plataforma utiliza inteligência artificial avançada para traduzir avatares, clonar vozes e sincronizar movimentos labiais em mais de 50 idiomas.

### ✨ Características Principais

- 🌍 **50+ Idiomas** - Suporte para todos os principais idiomas comerciais
- 🎭 **Sincronia Labial Perfeita** - IA ajusta movimentos labiais para cada idioma
- 🎤 **Clonagem de Voz Natural** - Mantém tom, timbre e emoção da voz original
- ⚡ **Processamento Rápido** - Resultados em minutos, não em dias
- 🎥 **Qualidade 4K** - Mantém a qualidade original do vídeo
- 🔄 **Workflow N8N** - Automação completa e escalável

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Animations**: Framer Motion 10.16
- **Icons**: Lucide React
- **Workflow**: N8N (backend)

## 📁 Estrutura do Projeto

```
S-Elevate/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navegação principal
│   │   ├── Hero.jsx           # Seção hero com gradientes
│   │   ├── HowItWorks.jsx     # Como funciona (4 etapas)
│   │   ├── SocialProof.jsx    # Depoimentos e logos
│   │   ├── Demo.jsx           # Demonstração interativa
│   │   ├── FAQ.jsx            # Perguntas frequentes
│   │   └── Footer.jsx         # Rodapé com links
│   ├── App.jsx                # Componente principal
│   ├── main.jsx               # Entry point
│   └── index.css              # Estilos globais
├── public/                     # Assets estáticos
├── index.html                 # HTML base
├── package.json               # Dependências
├── vite.config.js             # Configuração Vite
├── tailwind.config.js         # Configuração Tailwind
└── README.md                  # Este arquivo
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd S-Elevate
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa linter
```

## 🌐 Deploy

### Deploy no Netlify (Recomendado)

O projeto está configurado para deploy automático no Netlify! 🚀

#### Método Rápido (Interface Web):

1. **Acesse**: https://app.netlify.com/
2. **Conecte seu GitHub** e selecione este repositório
3. **Clique em "Deploy"** - As configurações já estão no `netlify.toml`
4. **Pronto!** Seu site estará online em ~3 minutos

#### Método CLI:

```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy --prod
```

📖 **Guia completo**: Veja [DEPLOY-NETLIFY.md](./DEPLOY-NETLIFY.md) para instruções detalhadas

### Arquivos de Configuração

- ✅ `netlify.toml` - Build settings, redirects, headers
- ✅ `public/_redirects` - SPA routing
- ✅ `.gitignore` - Ignora dist/ e node_modules/

### Build de Produção

```bash
# Teste o build localmente
npm run build

# Preview do build
npm run preview
# Acesse: http://localhost:4173
```

**Build Output:**
- 📦 Total: ~360 KB (gzipped)
- ⚡ Build time: ~8.5s
- 🎯 Performance: 90+ Lighthouse score

## 🎨 Design System

### Paleta de Cores

O site utiliza um design escuro com gradientes vibrantes:

- **Primary (Azul)**: `#0ea5e9` - `#075985`
- **Teal (Azul-petróleo)**: `#14b8a6` - `#0f766e`
- **Purple (Púrpura)**: `#a855f7` - `#7e22ce`
- **Background**: `#0a0a0a` - `#1a1a1a`

### Tipografia

- **Família**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900

### Componentes Principais

#### Glass Effect
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### Text Gradient
```css
.text-gradient {
  background: linear-gradient(to right, #14b8a6, #0ea5e9, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 **Mobile**: 320px - 767px
- 💻 **Tablet**: 768px - 1023px
- 🖥️ **Desktop**: 1024px+

### Breakpoints Tailwind

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ⚡ Otimizações de Performance

### Implementadas

1. **Code Splitting**: Chunks separados para React e animações
2. **Lazy Loading**: Componentes carregados sob demanda
3. **Image Optimization**: Placeholder para imagens
4. **Font Loading**: Preconnect para Google Fonts
5. **CSS Purging**: Tailwind remove CSS não utilizado
6. **Smooth Scrolling**: Scroll suave entre seções
7. **Framer Motion**: Animações otimizadas com GPU

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🎯 Seções do Site

### 1. Hero Section
- Título impactante: "Internacionalize sua marca com IA"
- Subtítulo explicativo
- 2 CTAs: "Testar o Workflow" e "Ver Demonstração"
- 3 estatísticas: 50+ Idiomas, 95% Precisão, 10x Mais Rápido
- Gradientes animados no background

### 2. Como Funciona
4 etapas do processo:
1. Carregue seu Vídeo
2. IA Processa o Conteúdo
3. Escolha os Idiomas
4. Receba os Resultados

### 3. Prova Social
- Logos de empresas clientes
- 3 depoimentos com avatars
- Barra de estatísticas: 1000+ Vídeos, 200+ Clientes, 4.9/5 Rating

### 4. Demonstração
- Player de vídeo interativo (placeholder)
- Seletor de idiomas com 6 opções
- 4 recursos técnicos destacados
- CTA: "Começar Agora"

### 5. FAQ
- 8 perguntas frequentes
- Accordion animado
- CTA para contato

### 6. Footer
- Logo e descrição
- Links organizados: Produto, Empresa, Recursos, Legal
- Newsletter signup
- Redes sociais
- Copyright

## 🔒 Acessibilidade (WCAG 2.1)

- ✅ Contraste de cores adequado
- ✅ Navegação por teclado
- ✅ Labels em formulários
- ✅ Alt text para imagens
- ✅ Focus states visíveis
- ✅ Semantic HTML

## 🔄 Próximos Passos

### Integrações Futuras

- [ ] **Stripe**: Sistema de pagamento
- [ ] **N8N API**: Conexão com workflow backend
- [ ] **Upload de Vídeo**: Sistema de upload real
- [ ] **Dashboard**: Área do cliente
- [ ] **Analytics**: Google Analytics / Mixpanel
- [ ] **Email**: Sendgrid para notificações

### Melhorias Planejadas

- [ ] Modo claro/escuro toggle
- [ ] Suporte a mais idiomas na interface
- [ ] Blog integrado
- [ ] Sistema de tickets/suporte
- [ ] Documentação técnica da API

## 📊 Métricas de Qualidade

### Lighthouse Score (Target)

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas etapas:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Equipe

- **Research**: Análise de mercado e benchmarking
- **Content**: Copy e estratégia de conteúdo
- **Design/UX**: Wireframes e design system
- **Frontend**: Implementação React + Tailwind
- **QA**: Testes e otimizações

## 📞 Contato

- **Website**: [s-elevate.com](#)
- **Email**: contato@s-elevate.com
- **Twitter**: [@selevate](#)
- **LinkedIn**: [S-Elevate](#)

---

**Feito com ❤️ no Brasil** | Powered by N8N






