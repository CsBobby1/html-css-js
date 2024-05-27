function breaktext() {
    var h1 = document.querySelector("h1");
    var h1text = h1.textContent;
    var splittedtext = h1text.split("")
    var nom= Math.floor(splittedtext.length/2);

    var cot=""


    console.log(nom);

    splittedtext.forEach( function(Elm,inx) {
       if(inx<nom){
        cot+=`<span class="a">${Elm}</span>`}
        else{
            cot+=`<span class="b">${Elm}</span>`
        }
    })
    h1.innerHTML=cot
}
breaktext()

gsap.from(" .a", {
    y:90,
    opacity:0,
    duration :0.9,
    delay:0.5,
    stagger: 0.17, 
});

gsap.from(" .b", {
    y:100,
    opacity:0,
    duration :0.9,
    delay:0.5,
    stagger: -0.17, 
});