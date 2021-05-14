const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () =>{
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

// bottom
const bottom = document.querySelector('.bottom')
const nav = document.querySelector('.navigation')

bottom.addEventListener('click', ()=>{
    bottom.classList.toggle('yes')
    nav.classList.toggle('yes')
})