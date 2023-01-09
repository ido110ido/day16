let menuButton = document.getElementById('menu')
let menuContecMenu = document.getElementById('dMenu')
menuButton.addEventListener('click',(event)=>{
    // event.defaultPrevented()
    if(menuContecMenu.style.display === 'none'){
        menuContecMenu.style.display = 'block'
    }
    else{
        menuContecMenu.style.display = 'none'
    }
})