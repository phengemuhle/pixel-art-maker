document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i < 980; i++) {
        var box1 = document.createElement("main");
        var container = document.querySelector("div1");
        container.appendChild(box1);
        box1.setAttribute("class", "box");
    }
    var red = document.querySelector(".red")
    var blue = document.querySelector(".blue")
    var yellow = document.querySelector(".yellow")
    var orange = document.querySelector(".orange")
    var purple = document.querySelector(".purple")
    var green = document.querySelector(".green")
    var pink = document.querySelector(".pink")
    var black = document.querySelector(".black")
    var brush = document.querySelector(".colorChoice")
    var colorsplash = document.querySelector(".fillBox")
    var boxes = document.querySelectorAll("main")
    var clear = document.querySelector(".clear")


    red.addEventListener("click", function (event) {
        brush.style.backgroundColor = "red"
    })
    blue.addEventListener("click", function (event) {
        brush.style.backgroundColor = "blue"
    })
    yellow.addEventListener("click", function (event) {
        brush.style.backgroundColor = "yellow"
    })
    orange.addEventListener("click", function (event) {
        brush.style.backgroundColor = "orange"
    })
    purple.addEventListener("click", function (event) {
        brush.style.backgroundColor = "purple"
    })
    green.addEventListener("click", function (event) {
        brush.style.backgroundColor = "green"
    })
    pink.addEventListener("click", function (event) {
        brush.style.backgroundColor = "pink"
    })
    black.addEventListener("click", function (event) {
        brush.style.backgroundColor = "black"
    })

    colorsplash.addEventListener("click", colorFill)
    clear.addEventListener("click", removeColor)

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function (event) {
            if (event.target.style.backgroundColor === brush.style.backgroundColor) {
                event.target.style.backgroundColor = "white"
            } else {
                event.target.style.backgroundColor = brush.style.backgroundColor
            }
        })
    }
    function colorFill(event) {
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.backgroundColor = brush.style.backgroundColor
        }
    }
    function removeColor(event) {
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.backgroundColor = "white"
        }
    }
});