# 📋 Formulário de Cadastro com Integração ao Google Sheets

Este é um projeto de formulário de cadastro responsivo e acessível, construído com **HTML5 semântico**, **CSS3 moderno (Variáveis e Flexbox)** e **JavaScript assíncrono (Fetch API)**.

Os dados enviados pelo formulário são processados sem recarregar a página e armazenados diretamente em uma planilha do Google Sheets por meio de uma integração com o **Google Apps Script**.

---

## 🚀 Funcionalidades

- **Layout Responsivo & Moderno:** Design adaptável para dispositivos móveis e desktops.
- **Acessibilidade (A11y):** Uso de HTML semântico, rótulos (`<label>`), estados de foco visíveis (`:focus-visible`) e avisos dinâmicos (`aria-live`).
- **Envio Assíncrono:** Requisições via `fetch` (método `POST`) para processamento em segundo plano sem recarregar a página.
- **Feedback ao Usuário:** Mensagens dinâmicas em tempo real informando o status do envio (*Enviando...*, *Enviado com sucesso!* ou *Erro ao enviar*).
- **Limpeza Automática:** O formulário é resetado automaticamente após a confirmação do envio.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica, suporte a autocompletar e validação nativa.
- **CSS3:** Estilização com Custom Properties (Design Tokens), Flexbox e boas práticas de UX.
- **JavaScript (ES6+):** Manipulação do DOM e requisições assíncronas com a Fetch API.
- **Google Apps Script:** Backend serverless para receber requisições HTTP e registrar dados no Google Sheets.

---

## 📁 Estrutura do Projeto

```text
.
├── index.html   # Estrutura principal da página e formulário
├── style.css    # Estilização do formulário, reset e variáveis CSS
└── script.js   # Lógica de envio assíncrono e feedback dinâmico
