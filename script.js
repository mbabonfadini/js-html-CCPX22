const day = document.getElementById('dias')
const hora = document.getElementById('horas')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')
const ingressos = []
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

function borda(elemento){
    let card = document.querySelector(elemento)
    card.classList.toggle('cardHighLight')
}

// function checkKeyboardCode(){
//     document.addEventListener("keydown", (e) => {
//         var name = e.key
//         var code = e.code
//         alert(`Key pressed: ${name}, \r\n Key code: ${code}`)
// },false) }

function addKeyboardEventListeners(){
    document.addEventListener("keydown", (e) => {
        var ingresso1 = document.getElementById("quinta")
        var ingresso2 = document.getElementById("sexta")
        var ingresso3 = document.getElementById("sabado")
        var ingresso4 = document.getElementById("domingo")

        var code = e.code
        if (code == 'Digit1' || code == 'Numpad1'){
            ingresso1.classList.toggle('cardHighLight')
            ingresso2.classList.remove('cardHighLight')
            ingresso3.classList.remove('cardHighLight')
            ingresso4.classList.remove('cardHighLight')
        }
        else if (code == 'Digit2' || code == 'Numpad2'){
            ingresso1.classList.remove('cardHighLight')
            ingresso2.classList.toggle('cardHighLight')
            ingresso3.classList.remove('cardHighLight')
            ingresso4.classList.remove('cardHighLight')
        }
        else if (code == 'Digit3' || code == 'Numpad3'){
            ingresso1.classList.remove('cardHighLight')
            ingresso2.classList.remove('cardHighLight')
            ingresso3.classList.toggle('cardHighLight')
            ingresso4.classList.remove('cardHighLight')
        }
        else if (code == 'Digit4' || code == 'Numpad4'){
            ingresso1.classList.remove('cardHighLight')
            ingresso2.classList.remove('cardHighLight')
            ingresso3.classList.remove('cardHighLight')
            ingresso4.classList.toggle('cardHighLight')
        }
        else {
            ingresso1.classList.remove('cardHighLight')
            ingresso2.classList.remove('cardHighLight')
            ingresso3.classList.remove('cardHighLight')
            ingresso4.classList.remove('cardHighLight')
            
        }}, false);
}

function selectedCard(elemento){
    let selecao = document.querySelector(elemento)
    selecao.classList.toggle('cardSelected')
    if(ingressos.includes(elemento)) { 
        
        let index = ingressos.indexOf(elemento)
        ingressos.splice(index,1)}
        
    else {ingressos.push(elemento)}
}

function showIngressos(){
    if(ingressos.length > 0)
        alert(`Ingressos selecionados ${ingressos}`)
    else alert('Nenhum ingresso selecionado')

}
addKeyboardEventListeners()
// checkKeyboardCode()
countDown()
setInterval(countDown, 1000)