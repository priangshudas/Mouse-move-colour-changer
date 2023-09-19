var rec = document.querySelector("#center_div");

rec.addEventListener("mousemove",function( details ){
    var rec_location = rec.getBoundingClientRect(); 

    // console.log("mouse in center div",rec_location)
    // console.log(details)

    var rec_in_pos = details.clientX-rec_location.left;

    // console("mouse pos",rec_in_pos)

    if(rec_in_pos < rec_location.width/2){
        var red_color = gsap.utils.mapRange(0, rec_location.width/2, 255, 0, rec_in_pos);
        gsap.to(rec,{
            backgroundColor: `rgb(${red_color},0,0)`,
            ease: Power4,
        });
        console.log("left")
    }
    else{
        var blue_color = gsap.utils.mapRange(rec_location.width/2, rec_location.width, 0, 255, rec_in_pos);
        gsap.to(rec,{
            backgroundColor: `rgb(0,0,${blue_color},)`,
            ease: Power4,
        });
        console.log("right")
    }
})
rec.addEventListener("mouseleave",function(){
    gsap.to(rec,{
        backgroundColor: "transparent",
        ease: Power4,
    });
})