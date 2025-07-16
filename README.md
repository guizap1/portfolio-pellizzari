# Portfólio Pessoal v2.0 - Guilherme Pellizzari

> Um portfólio de desenvolvedor moderno, interativo e totalmente responsivo, construído com React.js.

**[Clique aqui para ver a demonstração ao vivo](https://portfolio-pellizzari.vercel.app/)**

![Screenshot do Portfólio](https://github.com/user-attachments/assets/a83dda23-b133-4df6-a1b4-12c896bc251c)

---

## 🚀 Sobre o Projeto

Este projeto é a minha vitrine profissional como desenvolvedor, um espaço onde apresento minhas habilidades, minha trajetória e os projetos dos quais me orgulho. Ele foi desenvolvido do zero com foco em uma experiência de usuário fluida, design moderno e alta performance.

A aplicação foi estruturada para ser não apenas um currículo digital, mas uma demonstração prática das minhas competências em desenvolvimento de interfaces ricas e interativas.

---

## ✨ Features Principais

O portfólio conta com uma série de funcionalidades modernas, implementadas para criar uma experiência de usuário engajante e profissional:

* **🎨 Tema Light & Dark:** Seletor de tema que salva a preferência do usuário no navegador (`localStorage`).
* **🌌 Fundo Interativo:** Animação de partículas com `tsparticles` que se adapta às cores do tema e reage à interação do mouse.
* **💅 Design Responsivo:** Layout que se adapta perfeitamente a qualquer tamanho de tela, de desktops a celulares.
* **Smooth Navigation:** Navegação entre páginas com transições animadas usando `Framer Motion`.
* **🚀 Animações de Scroll:** Elementos das páginas surgem com um efeito de fade-in conforme o usuário rola a tela.
* **🧩 Arquitetura baseada em Componentes:** Construído com React, seguindo as melhores práticas de componentização.
* **📫 Formulário de Contato Funcional:** Integração com **EmailJS** para envio de e-mails diretamente do front-end.
* **📈 Otimizado para SEO:** Detalhes de SEO e meta tags para melhor ranqueamento e apresentação em redes sociais.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* **Core:** React.js, Vite
* **Estilização:** Tailwind CSS
* **Roteamento:** React Router DOM
* **Animações:** Framer Motion
* **Partículas:** `tsparticles` & `react-particles`
* **Formulário de Contato:** EmailJS Browser
* **Ícones:** `react-icons`
* **Gráficos (Skills):** `react-circular-progressbar`

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

### Pré-requisitos

Você vai precisar ter o [Node.js](https://nodejs.org/en/) (versão 18 ou superior) e o [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) instalados.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/guizap1/portfolio-pellizzari.git](https://github.com/guizap1/portfolio-pellizzari.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd portfolio-pellizzari
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Variáveis de Ambiente

Para que o formulário de contato funcione, você precisa fornecer suas credenciais do EmailJS.

1.  Crie um arquivo chamado `.env` na raiz do projeto.
2.  Adicione as seguintes variáveis, substituindo pelos seus valores:
    ```
    VITE_EMAILJS_SERVICE_ID=SEU_SERVICE_ID
    VITE_EMAILJS_TEMPLATE_ID=SEU_TEMPLATE_ID
    VITE_EMAILJS_PUBLIC_KEY=SUA_PUBLIC_KEY
    ```
    ⚠️ **Importante:** O arquivo `.env` não deve ser enviado para o repositório público. Ele já está incluído no `.gitignore` padrão do Vite.

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) (ou a porta que o Vite indicar) no seu navegador para ver o resultado.

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

**Guilherme Pellizzari**

* **LinkedIn:** [https://linkedin.com/in/guilhermepellizzari/](https://linkedin.com/in/guilhermepellizzari/)
* **GitHub:** [@guizap1](https://github.com/guizap1)
