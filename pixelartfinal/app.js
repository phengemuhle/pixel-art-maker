document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i < 2117; i++) {
        var box1 = document.createElement('main');
        var container = document.querySelector('div1');
        container.appendChild(box1);
        box1.setAttribute('class', "box");

    }
    var color1 = document.querySelector('.color1')
    var color2 = document.querySelector('.color2')
    var color3 = document.querySelector('.color3')
    var color4 = document.querySelector('.color4')
    var color5 = document.querySelector('.color5')
    var color6 = document.querySelector('.color6')
    var color7 = document.querySelector('.color7')
    var color8 = document.querySelector('.color8')
    var brush = document.querySelector('.colorChoice')
    var colorsplash = document.querySelector('.fillBox')
    var boxes = document.querySelectorAll('main')
    var clear = document.querySelector('.clear')


    color1.addEventListener("click", function (event) {
        brush.style.backgroundColor = "red"
    })
    color2.addEventListener("click", function (event) {
        brush.style.backgroundColor = "blue"
    })
    color3.addEventListener("click", function (event) {
        brush.style.backgroundColor = "yellow"
    })
    color4.addEventListener("click", function (event) {
        brush.style.backgroundColor = "orange"
    })
    color5.addEventListener("click", function (event) {
        brush.style.backgroundColor = "purple"
    })
    color6.addEventListener("click", function (event) {
        brush.style.backgroundColor = "green"
    })
    color7.addEventListener("click", function (event) {
        brush.style.backgroundColor = "pink"
    })
    color8.addEventListener("click", function (event) {
        brush.style.backgroundColor = "black"
    })

    colorsplash.addEventListener("click", function (event) {
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.backgroundColor = brush.style.backgroundColor
        }
    })
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function (event) {
            if (event.target.style.backgroundColor === brush.style.backgroundColor) {
                event.target.style.backgroundColor = 'white'
            } else {
                event.target.style.backgroundColor = brush.style.backgroundColor
            }
        })
    }
    clear.addEventListener("click", function (event) {
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.backgroundColor = 'white'
        }
    })

    // container.addEventListener("mousedown", paint)
    // container.addEventListener("mouseup", function () {
    //     for (let i = 0; i < boxes.length; i++) {
    //         boxes[i].removeEventListener('mouseover', paint())
    //     }
    // })
    // function paint() {
    //     for (let i = 0; i < boxes.length; i++) {
    //         boxes[i].addEventListener('mouseover', function (event) {
    //             event.target.style.backgroundColor = brush.style.backgroundColor
    //         })
    //     }
    // }
});