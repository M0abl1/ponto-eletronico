# 📌 Sistema de Controle de Ponto Eletrônico 

Um sistema web moderno, seguro e responsivo para controle de assiduidade e gerenciamento de ponto eletrônico, desenvolvido para atender às demandas administrativas de colaboradores e gestores.

---

## 🚀 Funcionalidades Principais

### 🔒 Área Administrativa (Dashboard)
* **Gestão de Colaboradores:** Cadastro unificado de funcionários por meio de uma janela fluida (*Popup/Modal*) integrada diretamente com o banco de dados.
* **Listagem em Tempo Real:** Visualização completa dos colaboradores em ordem alfabética com indicador visual (*Badge*) exibindo a quantidade acumulada de faltas/atestados no mês corrente.
* **Lançamento de Justificativas:** Inserção otimizada de dispensas médicas e licenças por múltiplos dias em lote (*Firestore Batch*).
* **Auditoria:** Histórico recente de ocorrências e relatórios mensais consolidados com suporte para exportação de dados.
* **Layout Híbrido:** Menu lateral adaptável (retrátil no computador e estilo gaveta flutuante com sombra no smartphone).

### 📱 Área do Colaborador (Registro de Ponto)
* **Sincronização de Perfil:** Identificação dinâmica do funcionário pelo CPF no momento do login, exibindo saudações personalizadas na interface.
* **Relógio em Tempo Real:** Marcador digital contínuo de horas, minutos, segundos e data local.
* **Trava de Segurança por GPS:** O botão de registro só é liberado se o colaborador estiver dentro do raio de **500 metros** das coordenadas geográficas configuradas para a instituição.
* **Limite Diário Restrito:** Bloqueio inteligente que impede cliques duplos ou mais de um registro por dia para o mesmo CPF.
* **Histórico Individual:** Listagem das batidas realizadas pelo próprio usuário no dia atual para controle e transparência do colaborador.

---

## 🛠️ Tecnologias Utilizadas

* **Frontend:** HTML5, JavaScript (ES6+), CSS3.
* **Estilização & Responsividade:** [Tailwind CSS](https://tailwindcss.com/) (Interface limpa, moderna e totalmente adaptável para dispositivos móveis).
* **Backend & Banco de Dados:** [Firebase](https://firebase.google.com/) (Ecossistema serverless).
  * **Firebase Authentication:** Fluxo híbrido de login (E-mail para administradores e CPF para funcionários com senha inicial definida em `src/config/firebase-config.js`).
  * **Cloud Firestore:** Armazenamento de dados não-relacional, reativo e em tempo real para coleções de usuários, registros e justificativas.
  * **Firebase Hosting:** Distribuição global rápida e segura da aplicação.
* **Versionamento:** Git & GitHub.

---

## 📐 Arquitetura do Código

O projeto segue uma arquitetura inspirada no padrão **MVC (Model-View-Controller)** para manter os arquivos organizados, legíveis e fáceis de dar manutenção:

```text
📂 exemplo/
├── 📂 public/
│   ├── 📄 index.html          # Tela de Login unificada
│   ├── 📄 dashboard.html      # Painel do Administrador
│   ├── 📄 ponto.html          # Tela de batida de ponto do funcionário
│   └── 📂 src/
│       ├── 📂 config/
│       │   └── 📄 firebase-config.js  # Credenciais e inicialização do Firebase
│       ├── 📂 models/
│       │   └── 📄 PontoModel.js       # Comunicação direta, buscas e regras do Firestore
│       ├── 📂 controllers/
│       │   ├── 📄 AuthController.js   # Fluxo de login, logout e identificação de rotas
│       │   └── 📄 AdminController.js  # Lógica de validações e regras de negócio do Admin
│       └── 📂 views/
│           ├── 📄 loginView.js        # Comportamento visual da tela de login
│           ├── 📄 dashboardView.js    # Manipulação do DOM do painel e abas
│           └── 📄 pontoView.js        # Relógio, monitor de GPS e histórico do colaborador
├── 📄 firebase.json           # Configurações de Deploy do Firebase
└── 📄 README.md               # Documentação do projeto