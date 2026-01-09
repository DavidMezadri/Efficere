<div align="center">
  <img src="public/logo.png" alt="Efficere Logo" width="120"/>
  
  # Efficere - Assessoria & Capacitação
  
  ### Assessoria que fala a língua dos gestores e servidores municipais
  
  [![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  
  [🌐 Website](https://efficerelicitacoes.com.br) • [📧 Contato](mailto:contato@efficerelicitacoes.com.br) • [📱 WhatsApp](https://wa.me/555499668936)
</div>

---

## 📋 Sobre o Projeto

Website institucional da **Efficere**, empresa especializada em assessoria e capacitação para gestão pública municipal. O site apresenta os serviços oferecidos, cases de sucesso, informações sobre a fundadora e canais de contato.

### ✨ Destaques

- 🎨 **Design Moderno e Premium** - Interface elegante com gradientes, glassmorphism e animações suaves
- 📱 **Totalmente Responsivo** - Otimizado para desktop, tablet e mobile
- ⚡ **Performance Otimizada** - Construído com Vite para carregamento ultra-rápido
- 🎯 **SEO Friendly** - Meta tags, títulos e estrutura semântica otimizados
- ♿ **Acessível** - Seguindo boas práticas de acessibilidade web

---

## 🖼️ Screenshots

<div align="center">
  
### Hero Section
![Hero Section](https://github.com/DavidMezadri/Efficere/blob/main/public/screenshots/carousel.png)

### Serviços
![Serviços](https://github.com/DavidMezadri/Efficere/blob/main/public/screenshots/services.png)

### Nossa Atuação
![Carrossel](https://github.com/DavidMezadri/Efficere/blob/main/public/screenshots/carousel.png)

### Contato
![Contato](https://github.com/DavidMezadri/Efficere/blob/main/public/screenshots/contact.png)

</div>

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### Core
- **[React 19.2.0](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[Vite 7.2.4](https://vitejs.dev/)** - Build tool de nova geração
- **[TailwindCSS 3.4.17](https://tailwindcss.com/)** - Framework CSS utility-first

### Bibliotecas
- **[React Icons](https://react-icons.github.io/react-icons/)** - Ícones para React
- **[PostCSS](https://postcss.org/)** - Processador de CSS
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Plugin PostCSS para adicionar vendor prefixes

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/React
- **[Vite Plugin React](https://github.com/vitejs/vite-plugin-react)** - Plugin oficial do React para Vite

---

## 📁 Estrutura do Projeto

```
NovoEfficere/
├── public/
│   ├── images/           # Imagens do site
│   │   ├── Brasoes/      # Logos dos parceiros
│   │   └── perfil/       # Foto da fundadora
│   └── logo.png          # Logo da Efficere
├── src/
│   ├── components/       # Componentes React
│   │   ├── Navbar.jsx    # Menu de navegação
│   │   ├── Hero.jsx      # Seção principal
│   │   ├── About.jsx     # Sobre a empresa
│   │   ├── Profile.jsx   # Perfil da fundadora
│   │   ├── Services.jsx  # Serviços oferecidos
│   │   ├── Carousel.jsx  # Galeria de atuação
│   │   ├── Contact.jsx   # Informações de contato
│   │   └── Footer.jsx    # Rodapé
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entry point
│   └── index.css         # Estilos globais
├── tailwind.config.js    # Configuração do Tailwind
├── vite.config.js        # Configuração do Vite
└── package.json          # Dependências do projeto
```

---

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/efficere-website.git
cd efficere-website
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Abra no navegador
```
http://localhost:5173
```

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

### Preview da Build

```bash
npm run preview
```

---

## 🎨 Funcionalidades

### 🏠 Navegação
- Menu responsivo com hambúrguer menu para mobile
- Navegação suave entre seções (smooth scroll)
- Menu fixo com efeito de transparência ao rolar

### 🖼️ Carrossel Interativo
- Carrossel de imagens com navegação manual
- Botões sempre visíveis para melhor UX
- Responsivo (1 item no mobile, 2 no tablet, 3 no desktop)
- Modal de visualização detalhada ao clicar nas imagens

### 🤝 Seção de Parceiros
- Carrossel infinito de logos dos parceiros
- Animação automática com pausa ao hover
- Logos responsivos e otimizados

### 📞 Contato
- Links diretos para WhatsApp
- Link para Instagram
- Email clicável
- Cards interativos com hover effects

### 🎭 Animações e Efeitos
- Fade in ao carregar seções
- Hover effects em cards e botões
- Gradientes animados no background
- Glassmorphism em elementos overlay
- Transições suaves em todas as interações

---

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary: #aea898        /* Bege/Dourado */
--primary-light: #c4bfaf  /* Bege Claro */
--primary-dark: #7c5433   /* Marrom */

/* Backgrounds */
--bg-dark: #0f0f0f        /* Preto Suave */
--bg-darker: #0a0a0a      /* Preto Profundo */
--bg-card: #1a1a1a        /* Cinza Escuro */
```

---

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 **Mobile** (< 768px) - 1 coluna, menu hambúrguer
- 📱 **Tablet** (768px - 1024px) - 2 colunas
- 💻 **Desktop** (> 1024px) - 3 colunas, layout completo

### Breakpoints Tailwind
```js
sm: '640px'   // Small devices
md: '768px'   // Medium devices  
lg: '1024px'  // Large devices
xl: '1280px'  // Extra large devices
```

---

## 🔧 Configuração do Tailwind

O projeto usa uma configuração customizada do Tailwind com:

- Cores personalizadas da marca
- Gradientes customizados
- Animações personalizadas (fade-in, float, scroll-infinite)
- Fontes do Google Fonts (Inter)

Ver [tailwind.config.js](tailwind.config.js) para detalhes.

---

## 📄 Licença

Este projeto é propriedade da **Efficere - Assessoria & Capacitação**.

---

## 👥 Contato

**Efficere - Assessoria & Capacitação**

- 🌐 Website: [efficerelicitacoes.com.br](https://efficerelicitacoes.com.br)
- 📧 Email: contato@efficerelicitacoes.com.br
- 📱 WhatsApp: [(54) 9 9966-8936](https://wa.me/555499668936)
- 📷 Instagram: [@efficere_assessoria](https://www.instagram.com/efficere_assessoria/)

---

## 🙏 Agradecimentos

Desenvolvido com ❤️ para transformar a gestão pública municipal.

> **"Eficiência não é discurso: é prática aplicada."**

---

<div align="center">
  
  ### ⭐ Se este projeto foi útil, considere dar uma estrela!
  
  Made with ❤️ by Efficere Team
  
</div>
