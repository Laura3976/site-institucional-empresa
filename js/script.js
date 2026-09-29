// 1) Validação do formulário de contato
const form = document.getElementById('form-contato');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('mensagem').value.trim();
    let ok = true;
    const mostrar = (id, texto) => { document.getElementById('erro-' + id).textContent = texto; if (texto) ok = false; };
    mostrar('nome', nome ? '' : 'Digite seu nome.');
    mostrar('mensagem', msg ? '' : 'Escreva sua mensagem.');
    if (!email) mostrar('email', 'Digite seu e-mail.');
    else if (!email.includes('@') || !email.includes('.')) mostrar('email', 'Digite um e-mail válido, como nome@site.com.');
    else mostrar('email', '');
    const retorno = document.getElementById('retorno');
    retorno.textContent = ok ? 'Mensagem enviada! Responderemos em breve.' : '';
    if (ok) form.reset();
  });
}

// 2) Botão "Voltar ao topo"
const topo = document.getElementById('topo');
if (topo) {
  window.addEventListener('scroll', () => topo.classList.toggle('visivel', window.scrollY > 300));
  topo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// 3) Banner rotativo
const slides = document.querySelectorAll('.slide');
if (slides.length) {
  let atual = 0;
  setInterval(() => {
    slides[atual].classList.remove('ativo');
    atual = (atual + 1) % slides.length;
    slides[atual].classList.add('ativo');
  }, 5000);
}