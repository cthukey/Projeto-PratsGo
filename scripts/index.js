// let page = document.querySelector('.page')

let screen2 = document.querySelector('.screen2')
let screen3 = document.querySelector('.screen3')
let openBonus = document.querySelector('.modal button')
let closeModal = document.querySelector('#closeModal')

function btnUpgrade(event){
    event = event || window.event
    event.preventDefault()
    
    screen2.classList.add('open')
    // page.classList.remove('open')
    // console.log(screen2)
    
}
openBonus.addEventListener('click',function(){
    screen2.classList.toggle('open')
    screen3.classList.add('open')
})
closeModal.onclick = ()=>{
    screen3.classList.remove('open')
}
//PROXIMO PASSA
// ARRAY COM OS BONUS 
// SCREEN3 GERA BONUS ALEATORIO