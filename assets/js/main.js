const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;

function cronometro(segundos) {
  let data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}
let timer = null;
// função para iniciar o cronometro com o botao de iniciar
iniciar.addEventListener("click", function () {
  clearInterval(timer) // evita varios intervalos
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = cronometro(segundos); // modifica o relogio no html
  }, 1000);
   relogio.classList.remove('pausado')
});

pausar.addEventListener("click", function stop() {
  clearInterval(timer);
  relogio.classList.add('pausado')
});

zerar.addEventListener("click", function zero() {
  clearInterval(timer)
  segundos = 0
  relogio.innerHTML = '00:00:00'
})