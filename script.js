const day = document.getElementById('dias')
const hora = document.getElementById('horas')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')

const evento = "03 Dec 2023"

function countDown() {
    const novaData = new Date(evento)
    console.log(novaData)
    const now = new Date()
    console.log(now)
    const total = (novaData-now)/1000

    const dias = Math.floor((total/3600)/24)
    const horas = Math.floor((total/3600)%24)
    const minutos = Math.floor((total/60)%60)
    const segundos = Math.floor((total%60))

    day.innerHTML = `${corrige(dias)}D`
    hora.innerHTML = `${corrige(horas)}H`
    minuto.innerHTML = `${corrige(minutos)}M`
    segundo.innerHTML = `${corrige(segundos)}S`

}

function corrige(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, 1000)