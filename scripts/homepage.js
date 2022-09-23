let stars = document.getElementById("stars")
let fore = document.getElementById("fore")
let back = document.getElementById("back")
let middle = document.getElementById("middle")
let front = document.getElementById("front")
let text = document.getElementById("text")
let static = document.getElementById("static")
let value = this.window.scrollY
window.addEventListener('scroll', function(){
    let value = this.window.scrollY
    stars.style.left = value * 0.25 + 'px'
    static.style.top = value * 1 + 'px'
    fore.style.top = value * .75 + 'px'
    back.style.top = value * .5 + 'px'
    middle.style.top = value * .25 + 'px'
    front.style.top = value * .125 + 'px'
    
    if(value < 300){
        text.style.marginLeft = value * 10 + 'px'
        text.style.zIndex = '9'
    }else if(value>=300 && value <490){
        text.style.fontSize = (7.5 - (value - 300)/100) + 'vw'
        text.style.marginTop = (value-300)* 2.2 +'px'
        text.style.zIndex = '10'
    }else if(value >=490 && value < 703.5){
        text.style.marginTop = (value-300)* 2.2 +'px'
        text.style.zIndex = '12'
    }else if(value >= 703.5 && value < 750){
        text.style.marginRight = ((value-703.5)*7) + 'px'
        text.style.zIndex = '12'
        h2.classList.add("auto-commplete", "about")
        h2.classList.remove("before")
    }else if(value >=750){
        text.classList.add('no-glow')
        text.style.textShadow = 'none'
    }
})
var typed = new Typed(".auto-complete", {
    strings: ["    ", "About", "What is"],
    
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
