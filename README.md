# 💬 Uatizap - Interface Web de Mensagens

Uma interface web simples e interativa desenvolvida para consumir a API RESTful do **Uatizap**. O projeto foi criado como parte das práticas de integração do SENAI-SP, focando no aprendizado de manipulação do DOM e requisições HTTP assíncronas utilizando **JavaScript puro (Vanilla JS)**.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**: Estruturação dos formulários e elementos visuais.
* **CSS3**: Estilização moderna e responsiva da interface.
* **JavaScript (Vanilla JS)**: Manipulação dinâmica da tela com `document.getElementById` e integração de API com `fetch` + `async/await`.

---

## 🚀 Funcionalidades

- [x] **Cadastro de Usuários (`POST /registrar`)**: Criação de conta com apelido, senha e telefone via envio em formato `FormData`.
- [x] **Autenticação (`POST /auth`)**: Validação de credenciais de acesso via *Query Parameters*.
- [x] **Envio de Mensagens (`POST /chat`)**: Disparo de mensagens para destinatários cadastrados enviando payload em formato `JSON`.

---

## 🔧 Como Executar o Projeto

### Pré-requisitos
Certifique-se de que a API backend do projeto esteja em execução na sua máquina local em `http://localhost:3000`.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Em4nuel44/api-whatsapp.git](https://github.com/Em4nuel44/api-whatsapp.git)
