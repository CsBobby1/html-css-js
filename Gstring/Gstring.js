var initialpath=`M 100 200 Q 750 200 1400 200`
var finalpath  =`M 100 200 Q 750 200 1400 200`

var string=document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path=`M 100 200 Q ${dets.x} ${dets.y} 1400 200`
    
    gsap.to("svg path", {
        attr:{d:path},
        duration:0.5,
        ease:"power3.out"
    });
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path", {
        attr:{d:finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    });
});