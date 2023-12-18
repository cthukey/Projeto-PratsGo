// let page = document.querySelector('.page')

let screen2 = document.querySelector('.screen2')
let screen3 = document.querySelector('.screen3')
let openBonus = document.querySelector('.modal button')
let closeModal = document.querySelector('#closeModal')
let bonusImg = document.querySelector('#imgGerado')

let lista = ['./bonus/csgo-12-laranja.png','./bonus/csgo-ak-azul-bebe.png','./bonus/csgo-ak-azul.png','./bonus/csgo-aug.png','./bonus/csgo-faca-Azul-bebe.png','./bonus/csgo-faca-verde.png','./bonus/m4a4-neo.png','./bonus/neon-veil-new-weapons-in-csgo.png','./bonus/plenty-of-ways-and-awp-csgo-.png']

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
    abrirBonus()
})
closeModal.onclick = ()=>{
    screen3.classList.remove('open')
}

//AbrirBonus
let abrirBonus =()=>{
    let bonus = lista [ Math.floor(Math.random()* lista.length) ]
    bonusImg.src = bonus
    console.log(bonus)
}


