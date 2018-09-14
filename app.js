document.addEventListener('DOMContentLoaded', function(){
    for(let i =1; i<2100; i++){
       var box1 = document.createElement('main');
        var container = document.querySelector('div');
        container.appendChild(box1);
        box1.setAttribute('class', "box");

    }
});


window.onpageshow = function () {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("gradientid");
    ctx.drawImage(img, 0, 0, 300, 150);
}
var img = document.querySelector('canvas')
img.addEventListener('click', function (event) {
    var context = img.getContext('2d');

    console.log(context)
    console.dir(event.target)

});

