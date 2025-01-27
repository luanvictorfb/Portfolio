let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('nav-mobile')
let fundo = document.getElementById('fundo')
let div = document.querySelectorAll('div')
let nav = document.querySelectorAll('header a')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

fundo.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})



window.onscroll=()=>{
    div.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let heigth=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>offset && top<offset + heigth ){
            nav.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header menu a[href*='+id+']').classList.add('active')
            })
        }


    })
}