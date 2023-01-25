function relogio() {

/* Nossa querida function que da depressão */

function hsegundo(segundo) {
    const data = new Date(segundo * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}

/* Puxando as class */

const relogio = document.querySelector(".countdown");
let seconds = 0
let timer;

/* Ota function */

function hiniciar() {
    timer = setInterval(function() {
        seconds++;
        relogio.innerHTML = hsegundo(seconds);
    }, 1000)
}

/* Fazendo uma function para cada button */

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        hiniciar()
    }

    if (el.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.classList.add('pausado')
    }

    if (el.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado')
        seconds = 0
    }
})
}
relogio()