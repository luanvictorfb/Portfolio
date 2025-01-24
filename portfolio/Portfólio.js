let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('nav-mobile')
let fundo = document.getElementById('fundo')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

fundo.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})
