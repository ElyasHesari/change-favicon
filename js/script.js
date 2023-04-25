const favicon = document.querySelector('#favicon')

const green = document.querySelector('.green')
const red = document.querySelector('.red')

green.addEventListener('click', ()=>{
    favicon.setAttribute('href', '../img/favicon-green.png')
})

red.addEventListener('click', ()=>{
    favicon.setAttribute('href', '../img/favicon-red.png')
})