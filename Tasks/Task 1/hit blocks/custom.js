let character = document.getElementById("character")
let block = document.getElementById("block")

let game = document.getElementById("game")

function jump() {
    if ( character.classList != "animate" ) {
        character.classList.add("animate")
    }

    setTimeout(function(){
        character.classList.remove("animate")
    }, 500)
}

document.addEventListener( "click" , jump )

document.addEventListener( "keydown" , function(){
    if ( event.key === 'ArrowUp' ) {
        jump()
    }
} )

let checkDead = setInterval(function(){
    let characterTop = parseInt( window.getComputedStyle(character).getPropertyValue("top") )
    let blockLeft = parseInt( window.getComputedStyle(block).getPropertyValue("left") )

    if(blockLeft<25 && blockLeft>0 && characterTop>=130) {
        block.style.animation = "none"
        block.style.display = "none"
        alert("u lose")
    }
}, 10)