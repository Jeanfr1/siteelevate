# 📦 Como Instalar Node.js no macOS

## Método 1: Instalador Oficial (MAIS FÁCIL) ⭐

### Passo 1: Baixar Node.js
1. Abra seu navegador
2. Vá para: https://nodejs.org
3. Clique no botão **"Download Node.js (LTS)"**
   - Escolha a versão LTS (Long Term Support)
   - Versão recomendada: 18.x ou 20.x

### Passo 2: Instalar
1. Abra o arquivo `.pkg` baixado
2. Siga o instalador (clique em "Continuar" → "Instalar")
3. Digite sua senha do Mac quando solicitado
4. Aguarde a instalação (2-3 minutos)
5. Clique em "Fechar"

### Passo 3: Verificar Instalação
Abra um **novo Terminal** e digite:

```bash
node --version
npm --version
```

**Resultado esperado:**
```
v18.x.x  (ou v20.x.x)
9.x.x
```

✅ Se aparecer as versões, está instalado!

---

## Método 2: Homebrew (Se quiser instalar Homebrew)

### Instalar Homebrew primeiro:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Depois instalar Node.js:
```bash
brew install node
```

---

## Método 3: NVM (Node Version Manager) - Para Desenvolvedores

### Instalar NVM:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

### Reiniciar terminal e instalar Node:
```bash
nvm install --lts
nvm use --lts
```

---

## ✅ Após Instalar

**Feche e abra um novo Terminal**, depois:

```bash
cd /Users/jeanpereira/Desktop/S-Elevate
npm install
npm run dev
```

🎉 Seu projeto vai rodar em http://localhost:3000

---

## 🆘 Problemas Comuns

### "command not found: node" após instalar
**Solução**: Feche e abra um NOVO Terminal

### "permission denied"
**Solução**: Execute com sudo:
```bash
sudo npm install -g npm
```

### Terminal não reconhece node
**Solução**: Adicione ao PATH:
```bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

---

**Tempo total: ~5 minutos**






