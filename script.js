var t1 = new TimelineMax();
var t2 = new TimelineMax();

//TweenLite.set("#skull1", {css:{backgroundColor:"#FF0000"}});

$('.play').click(function(){
    t2.reverse();
//     var t1 = new TimelineMax();
//     console.log("click");
    

// t1.from('#stand', 0.5, {
//     scaleY:0, transformOrigin:"bottom", ease: Power2.easeOut})
//     .from('#standBack', 0.5, {scaleY:0, transformOrigin:"bottom", ease: Bounce.easeOut})
//     .from('#monitorBottom', 0.7, {scaleX:0, transformOrigin: "center", ease:Bounce.easeOut})
//     .from('#screen',0.6, {scaleY: 0, transformOrigin:"bottom", ease:Circ.easeOut, delay:0.4})
//     .from("yellowBox", 0.5, {scale:0})
})



t2.set("#circle",{zIndex:2})


t2.to("#circle", 0.5, {x:"400", transformOrigin:"center", delay:2, ease:Power0.easeNone
}).to("#circle", 0.5, {x:"530", ease:Power0.easeNone
}).to("#circle", 0.5, {x:"550",y:"10",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"590",y:"25",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"630",y:"45",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"633",y:"50",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"640",y:"90",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"640",y:"190",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"645",y:"200",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"645",y:"200",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"645",y:"200",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"655",y:"220",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"675",y:"260",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"695",y:"280",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"715",y:"300",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"840",y:"440",ease:Power0.easeNone
}).from("#skull1", 1,{scale:0, transformOrigin: "center", ease:Power3.easeOut})
