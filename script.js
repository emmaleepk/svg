var t1 = new TimelineMax();
var t2 = new TimelineMax();



$('.play').click(function(){
    TweenLite.set("#happySkull1", {css:{display:"block"}});
    TweenLite.set("#happySkull2", {css:{display:"block"}});
    TweenLite.set("#happySkull3", {css:{display:"block"}});
    TweenLite.set("#happySkull4", {css:{display:"block"}});
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


t2.set("#circle",{css:{display:"block"}
}).from("#skull1", 1,{scale:0, transformOrigin: "center", delay:5, ease:Power3.easeOut
}).to("#circle", 0.9, {x:"700", transformOrigin:"center", ease:Power0.easeNone
}).to("#circle", 0.4, {x:"900", ease:Power0.easeNone
}).to("#circle", 0.5, {x:"1140",y:"50",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"1165",y:"80",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"1175",y:"95",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"1200",y:"115",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"1230",y:"400",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"1250",y:"450",ease:Power0.easeNone
}).to("#circle", 0.9, {x:"1580",y:"833",ease:Power0.easeNone  //Bakers St//
}).from("#skull2", 1,{scale:0, transformOrigin: "center", ease:Power3.easeOut
}).to("#circle", 0.5, {x:"1870",y:"810",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"2135",y:"690",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"2265",y:"600",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"2450",y:"570",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"2555",y:"610",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"2740",y:"845",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"2955",y:"870",ease:Power0.easeNone //Aldergate//
}).from("#skull3", 1,{scale:0, transformOrigin: "center", ease:Power3.easeOut
}).to("#circle", 0.5, {x:"3100",y:"875",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"3340",y:"925",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"3573",y:"987",ease:Power0.easeNone //Aldgate East//
}).from("#skull4", 1,{scale:0, transformOrigin: "center", ease:Power3.easeOut
}).to("#circle", 0.5, {x:"3770",y:"875",ease:Power0.easeNone
}).to("#circle", 0.5, {x:"3875",y:"830",ease:Power0.easeNone // Whitechapel//
}).from("#imageContainer", 1,{scale:0, transformOrigin: "center", ease:Power3.easeOut
})

$(document).ready(function () {
    let numDivs = $('.num');
    numDivs.text('0');
});

$("#defuseBody").keypress(function (event) {
    var aDiv = $('#a');
    var sDiv = $('#s');
    var dDiv = $('#d');
    var fDiv = $('#f');
    var allNum = $('.num');
    var digitStr = '';
    console.log(event.key);
    switch (event.key) {
        case 'a':
            console.log("Hi");
            incA(aDiv);
            break;
        case 's':
            incA(sDiv);
            break;
        case 'd':
            incA(dDiv);
            break;
        case 'f':
            incA(fDiv);
            break;
        case '.':
            // reset to zeros
            allNum.text('0');
            break;
        case ' ':
            digitStr = aDiv.text() + sDiv.text() + dDiv.text() + fDiv.text();
            alert(digitStr);
            //console.log(digitStr);
            break;
        default:
            break;

    }
});

function incA(someDiv) {
    let a = parseInt(someDiv.text())
    a++;
    if (a >= 10) {
        a = 0;
    }
    someDiv.text(a)
}
