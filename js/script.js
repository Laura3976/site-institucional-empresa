/* ==============================
   1) VALIDAÇÃO DO FORMULÁRIO (contato.html)
   ============================== */
const form = document.getElementById('form-contato');

if (form) {
  form.addEventListener('submit', function (evento) {
    // impede o envio para a página não recarregar
    evento.preventDefault();

    // pega o que a pessoa digitou (trim remove espaços nas pontas)
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    let tudoCerto = true;

    // mostra (ou limpa) a mensagem de erro de um campo
    function mostrarErro(campo, texto) {
      document.getElementById('erro-' + campo).textContent = texto;
      if (texto) {
        tudoCerto = false;
      }
    }

    // campos obrigatórios
    if (nome) {
      mostrarErro('nome', '');
    } else {
      mostrarErro('nome', 'Digite seu nome.');
    }

    if (mensagem) {
      mostrarErro('mensagem', '');
    } else {
      mostrarErro('mensagem', 'Escreva sua mensagem.');
    }

    // e-mail: precisa estar preenchido e ter @ e .
    if (!email) {
      mostrarErro('email', 'Digite seu e-mail.');
    } else if (!email.includes('@') || !email.includes('.')) {
      mostrarErro('email', 'Digite um e-mail válido, como nome@site.com.');
    } else {
      mostrarErro('email', '');
    }

    // resultado final
    const retorno = document.getElementById('retorno');

    if (tudoCerto) {
      retorno.textContent = 'Mensagem enviada! Responderemos em breve.';
      form.reset();
    } else {
      retorno.textContent = '';
    }
  });
}

/* ==============================
   2) BOTÃO "VOLTAR AO TOPO" (index.html)
   ============================== */
const botaoTopo = document.getElementById('topo');

if (botaoTopo) {
  // aparece depois de rolar 300 pixels
  window.addEventListener('scroll', function () {
    botaoTopo.classList.toggle('visivel', window.scrollY > 300);
  });

  // ao clicar, sobe suavemente
  botaoTopo.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==============================
   3) BANNER ROTATIVO (index.html)
   ============================== */
const slides = document.querySelectorAll('.slide');

if (slides.length) {
  let atual = 0;

  // troca de frase a cada 5 segundos (5000 milissegundos)
  setInterval(function () {
    slides[atual].classList.remove('ativo');
    atual = (atual + 1) % slides.length;
    slides[atual].classList.add('ativo');
  }, 5000);
}

/* ==============================
   4) MODO CLARO / ESCURO
   ============================== */
const botaoTema = document.getElementById('tema');

// aplica o tema escolhido e troca o ícone do botão
function aplicarTema(tema) {
  document.documentElement.setAttribute('data-tema', tema);

  if (botaoTema) {
    botaoTema.textContent = (tema === 'escuro') ? '☀️' : '🌙';
  }
}

// lê o tema guardado no navegador (se não houver, usa o claro)
let temaSalvo = 'claro';

try {
  temaSalvo = localStorage.getItem('tema') || 'claro';
} catch (erro) {
  // se o navegador bloquear o armazenamento, segue com o claro
}

aplicarTema(temaSalvo);

// ao clicar no botão, troca o tema e guarda a escolha
if (botaoTema) {
  botaoTema.addEventListener('click', function () {
    const temaAtual = document.documentElement.getAttribute('data-tema');
    const novoTema = (temaAtual === 'escuro') ? 'claro' : 'escuro';

    aplicarTema(novoTema);

    try {
      localStorage.setItem('tema', novoTema);
    } catch (erro) {
      // sem armazenamento, o tema só vale até recarregar a página
    }
  });
}