$( document ).ready(function() {

    $('img').each(function(){
        $(this).attr("src", randomLucho());
    });
    
});
function randomLucho(){
    var luchos = [];
    luchos.push("http://i.imgur.com/eRC8onz.jpg");
    luchos.push("http://i.imgur.com/eISN50J.jpg");
    luchos.push("http://i.imgur.com/nfL1ay3.jpg");
    luchos.push("http://i.imgur.com/eYBo65E.jpg");
    luchos.push("http://i.imgur.com/WMTJa8v.jpg");
    luchos.push("http://i.imgur.com/llTC4uD.jpg");
    luchos.push("http://i.imgur.com/yBBoQzj.jpg");
    luchos.push("http://i.imgur.com/WAJbX1o.jpg");
    luchos.push("http://i.imgur.com/KBM537X.jpg");
    luchos.push("http://i.imgur.com/fxtpaM2.jpg");
    luchos.push("http://i.imgur.com/91KCiE4.jpg");
    luchos.push("http://i.imgur.com/iWys51v.jpg");
    luchos.push("http://i.imgur.com/rT6ybOE.jpg");
    luchos.push("http://i.imgur.com/4iST79y.jpg");
    luchos.push("http://i.imgur.com/0Ce3339.jpg");
    luchos.push("http://i.imgur.com/F3uq7wg.jpg");
    luchos.push("http://i.imgur.com/obsJjoW.jpg");
    luchos.push("http://i.imgur.com/Svs3fP9.jpg");
    luchos.push("http://i.imgur.com/Fv75FGB.png");
    luchos.push("http://i.imgur.com/0LmhWV2.jpg");
    luchos.push("http://i.imgur.com/75inuSW.jpg");
    luchos.push("http://i.imgur.com/hnDV1Cy.jpg");
    luchos.push("http://i.imgur.com/xm56egI.jpg");
    luchos.push("http://i.imgur.com/wcNMFHq.jpg");
    luchos.push("http://i.imgur.com/M8Vsx8b.jpg");
    luchos.push("http://i.imgur.com/mSWmxSz.jpg");
    luchos.push("http://i.imgur.com/Aei4AAF.jpg");
    luchos.push("http://i.imgur.com/jkB4Zn5.jpg");
    return luchos[Math.floor(Math.random()*luchos.length)];
}
