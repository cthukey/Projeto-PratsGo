let screen2 = document.querySelector('.screen2')
let page = document.querySelector('.page')

function btnUpgrade(event){
    event = event || window.event
    event.preventDefault()
    
    screen2.classList.add('open')
    page.classList.remove('open')
    console.log(screen2)
    console.log('tudo OK')
    
}

