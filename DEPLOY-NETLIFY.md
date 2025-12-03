# 🚀 Deploy no Netlify - S-Elevate

Guia completo para fazer deploy do projeto S-Elevate no Netlify.

---

## 📋 Pré-requisitos

- ✅ Conta no Netlify (gratuita): https://app.netlify.com/signup
- ✅ Repositório no GitHub: https://github.com/Jeanfr1/siteelevate
- ✅ Node.js instalado (v18+)

---

## 🎯 Método 1: Deploy via Interface Web (Recomendado)

### Passo 1: Acesse o Netlify
1. Acesse: https://app.netlify.com/
2. Faça login com sua conta GitHub

### Passo 2: Importe o Projeto
1. Clique em **"Add new site"** → **"Import an existing project"**
2. Selecione **"Deploy with GitHub"**
3. Autorize o Netlify a acessar seus repositórios
4. Selecione o repositório: **`Jeanfr1/siteelevate`**

### Passo 3: Configure o Build
O Netlify vai detectar automaticamente as configurações do `netlify.toml`:

```toml
Build command: npm run build
Publish directory: dist
```

5. Clique em **"Deploy site"**

### Passo 4: Aguarde o Deploy
- ⏱️ O processo leva ~2-3 minutos
- 🎉 Você receberá uma URL temporária (ex: `https://random-name-123456.netlify.app`)

### Passo 5: Personalize o Domínio (Opcional)
1. Vá em **"Site settings"** → **"Domain management"**
2. Clique em **"Options"** → **"Edit site name"**
3. Escolha um nome personalizado: `s-elevate` ou `siteelevate`
4. Sua URL será: `https://s-elevate.netlify.app`

---

## 🎯 Método 2: Deploy via CLI (Avançado)

### Passo 1: Instale o Netlify CLI
```bash
npm install -g netlify-cli
```

### Passo 2: Faça Login
```bash
netlify login
```
Isso abrirá o navegador para autorização.

### Passo 3: Initialize o Site
```bash
cd /Users/jeanpereira/Desktop/S-Elevate
netlify init
```

Siga as instruções:
- **Create & configure a new site:** Sim
- **Team:** Selecione seu time
- **Site name:** s-elevate (ou deixe em branco)
- **Build command:** `npm run build`
- **Directory to deploy:** `dist`

### Passo 4: Deploy
```bash
# Deploy de teste (preview)
netlify deploy

# Deploy em produção
netlify deploy --prod
```

---

## ⚙️ Configurações Incluídas

### 📄 `netlify.toml`
✅ Comando de build: `npm run build`
✅ Diretório de publicação: `dist`
✅ Node.js v18
✅ Redirects para SPA
✅ Headers de segurança (X-Frame-Options, XSS-Protection, etc.)
✅ Cache otimizado para assets
✅ Minificação de CSS/JS
✅ Compressão de imagens

### 📄 `public/_redirects`
✅ Redirect para SPA (todas as rotas → index.html)

---

## 🔧 Build Local (Testar Antes)

Antes de fazer deploy, teste o build localmente:

```bash
# Build
npm run build

# Preview local
npm run preview
```

Acesse: `http://localhost:4173/`

---

## 🌐 Deploy Automático

### GitHub Integration
O Netlify está configurado para deploy automático:

✅ **Push para `main`** → Deploy automático em produção
✅ **Pull Request** → Deploy preview para testar
✅ **Branch nova** → Deploy preview

---

## 📊 Após o Deploy

### Verifique:
1. ✅ Site carregando corretamente
2. ✅ Todas as seções funcionando
3. ✅ Links da navbar funcionando
4. ✅ Scroll suave ativo
5. ✅ Footer exibindo corretamente
6. ✅ Responsivo (mobile/tablet/desktop)
7. ✅ Performance (Google PageSpeed Insights)

### URLs Importantes:
- 🌐 **Site:** `https://[seu-site].netlify.app`
- 📊 **Dashboard:** `https://app.netlify.com/sites/[seu-site]`
- 📈 **Analytics:** Ative no dashboard para métricas

---

## 🎨 Custom Domain (Opcional)

Se você tem um domínio próprio:

1. Vá em **Site settings** → **Domain management**
2. Clique em **"Add custom domain"**
3. Digite seu domínio: `www.s-elevate.com`
4. Siga as instruções para configurar DNS

---

## 🔒 HTTPS

✅ O Netlify fornece **SSL/HTTPS gratuito** automaticamente!
✅ Certificado Let's Encrypt renovado automaticamente

---

## 📈 Performance

O site já está otimizado com:
- ✅ Build otimizado do Vite
- ✅ Minificação de assets
- ✅ Tree-shaking
- ✅ Code splitting
- ✅ Cache headers
- ✅ Gzip/Brotli compression

---

## 🐛 Troubleshooting

### Erro: "Build failed"
```bash
# Verifique se o build funciona localmente
npm run build

# Veja os logs no Netlify Dashboard
```

### Erro: "Page not found" em rotas
- ✅ Já configurado no `netlify.toml` e `_redirects`

### Erro: "Module not found"
```bash
# Reinstale dependências
rm -rf node_modules package-lock.json
npm install
```

---

## 🎉 Deploy Completo!

Após seguir estes passos, seu site estará:
- ✅ Online e acessível globalmente
- ✅ Com HTTPS ativo
- ✅ Deploy automático a cada push
- ✅ Performance otimizada
- ✅ CDN global (Netlify Edge)

---

## 📞 Suporte

- 📚 **Documentação Netlify:** https://docs.netlify.com/
- 💬 **Community:** https://answers.netlify.com/
- 🐛 **Status:** https://www.netlifystatus.com/

---

**Pronto para fazer deploy! 🚀**

