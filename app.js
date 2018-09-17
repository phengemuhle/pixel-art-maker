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
// var img = document.querySelector('canvas')
// img.addEventListener('click', function (event) {
//     var context = img.getContext('2d');

var canvas = document.getElementById("gradientid");
canvas.addEventListener("click", function (event) {
    // Get the coordinates of the click
    var eventLocation = getEventLocation(this, event);
    // Get the data of the pixel according to the location generate by the getEventLocation function
    var context = this.getContext('2d');
    var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data;
console.log(pixelData)
    // If transparency on the pixel , array = [0,0,0,0]
    if ((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)) {
        // Do something if the pixel is transparent
    }
    
    // Convert it to HEX if you want using the rgbToHex method.
    // var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
}, false);


