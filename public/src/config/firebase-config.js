// src/config/firebase-config.js

// Cole aqui dentro as credenciais exatas fornecidas pelo painel do seu Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.firebasestorage.app",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000",
  measurementId: "G-XXXXXXXXXX"
};

// Senha inicial atribuída a novos funcionários (eles devem trocá-la no primeiro acesso).
// Defina um valor forte e exclusivo para a sua instalação; não use o valor de exemplo.
const SENHA_INICIAL_FUNCIONARIO = "DEFINA_UMA_SENHA_INICIAL_FORTE";

// Inicializa o Firebase globalmente para que os Models e Controllers consigam usar
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Configura explicitamente a persistência da sessão no navegador/celular.
// O modo 'LOCAL' garante que o funcionário permaneça logado mesmo se fechar a aba do navegador.
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .catch((erro) => {
    console.error("Erro ao configurar persistência de login:", erro);
  });