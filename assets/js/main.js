const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inpuAltura = event.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inpuAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;

  }

  const imc = getImc(peso, altura);
  const indiceImc = getIndiceImc(imc)

  const message = `Seu IMC é ${imc} (${indiceImc}). `;


  setResultado(message, true);


});

function getIndiceImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
    'Obesididade Grau I', 'Obesididade Grau II', 'Obesididade Grau III'];

  if (imc >= 39.9) return nivel[5]
  if (imc >= 34.9) return nivel[4]
  if (imc >= 29.9) return nivel[3]
  if (imc >= 24.9) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]

}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement('p');
  p.classList.add('paragrafo-resultado');
  return p;

}

function setResultado(message, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');

  }
  p.innerHTML = message;
  resultado.appendChild(p)

}