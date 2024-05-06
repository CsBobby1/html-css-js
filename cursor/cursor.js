var main=document.querySelector("#main")
var box=document.querySelector("#box");
var cursor=document.querySelector("#cursor")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        duration:1,
    });
})
box.addEventListener("mouseenter",function(){                        //when entering the box
    cursor.innerHTML="view more",
    gsap.to(cursor, {
        scale:3,
        backgroundColor:"#ffffff6d",
    });
});
box.addEventListener("mouseleave",function(){                          //when leaving the box
    cursor.innerHTML="",
    gsap.to(cursor, {
        scale:1,
        backgroundColor:"white",
    });
});
main.addEventListener("mouseleave",function(){                       //when entering page
    gsap.to(cursor, {
        opacity:0,
        duration:0.1
    });
});
main.addEventListener("mouseenter",function(){                        //when leaving the page
    gsap.to(cursor, {
        opacity:1,
    });
});


