async function realizarLogin() {
  // Captura usando o ID 'tel' do seu HTML
  const ddi = document.querySelector('input[name="ddi"]:checked').value; // +55 ou +1
  const numero = document.getElementById('tel').value;
  const senha = document.getElementById('senha').value;

  // Trata o número para juntar DDI + número sem espaços
  const telefoneCompleto = (ddi + numero).replace(/\D/g, ''); 

  if (!numero || !senha) {
    alert('Preencha todos os campos!');
    return;
  }

  try {
    const url = `http://localhost:3000/auth?telefone=${telefoneCompleto}&senha=${encodeURIComponent(senha)}`;
    const resposta = await fetch(url, { method: 'POST' });
    const dados = await resposta.json();

    if (resposta.ok) {
      alert('Login realizado com sucesso!');
      if (dados.senha_hash) {
        localStorage.setItem('senha_hash', dados.senha_hash);
        localStorage.setItem('telefone', telefoneCompleto);
      }
    } else {
      alert('Erro: ' + dados.mensagem);
    }
  } catch (erro) {
    console.error(erro);
    alert('Falha ao conectar com o servidor.');
  }
}