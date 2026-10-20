// const cards = document.querySelectorAll(".card");
// const nextBtn = document.querySelector("#nextBtn");
// const prevBtn = document.querySelector("#prevBtn");

// let count = 0;
// nextBtn.addEventListener("click", function() {
//     count++
//     if (count > cards.length - 1) {
//         count = 0;
//     }
//     cards.forEach(function(card, index) {
//         card.style.transform = `translateX(-${count*100}%)`
//     })
// })

// prevBtn.addEventListener("click", function() {
//     if (count == 0) return
//     count--
//     cards.forEach(function(card, index) {
//         card.style.transform = `translateX(-${count*100}%)`
//     })
// })

// nextBtn.addEventListener("click", function() {
//     nextBtn.style.background = "blue";
// })

// nextBtn.addEventListener("mouseout", function() {
//     nextBtn.style.background = "white";
// })

// prevBtn.addEventListener("click", function() {
//     prevBtn.style.background = "blue";
// })

// prevBtn.addEventListener("mouseout", function() {
//     prevBtn.style.background = "white";
// });

// const dots = document.querySelectorAll(".dot");

// let num = 0;

// nextBtn.addEventListener("click", function() {
//     num++;

//     if (num > dots.length - 1) {
//         num = 0;
//     }
//     dots.forEach(function(dot) {
//         dot.style.background = "white";
//     });

//     dots[num].style.background = "black";
// });

// prevBtn.addEventListener("click", function() {
//     if (num == 0) return
//     num--;
//     dots.forEach(function(dot) {
//         dot.style.background = "white";
//     });

//     dots[num].style.background = "black";
// });

let cards = document.querySelectorAll(".card");
let prevBtn = document.querySelector("#prevBtn");
let nextBtn = document.querySelector("#nextBtn");

let count = 0;
nextBtn.addEventListener("click", function() {
    count++
    if (count > cards.length - 1) {
        count = 0
    }
    cards.forEach(function(card, index) {
        card.style.transform = `translate(-${count*100}%)`
    })
})

prevBtn.addEventListener("click", function() {
    if (count == 0) return
    count--
    cards.forEach(function(card, index) {
        card.style.transform = `translate(-${count*100}%)`
    })
})

nextBtn.addEventListener("click", function() {
    nextBtn.style.background = "blue";
})

nextBtn.addEventListener("mouseout", function() {
    nextBtn.style.background = "white";
})

prevBtn.addEventListener("click", function() {
    prevBtn.style.background = "blue";
})

prevBtn.addEventListener("mouseout", function() {
    prevBtn.style.background = "white";
});

const dots = document.querySelectorAll(".dot");

let num = 0;
nextBtn.addEventListener("click", function() {
    num++
    if (num > dots.length - 1) {
        num = 0;
    }
    dots.forEach(function(dot, index) {
        dot.style.background = "white";
    })
    dots[num].style.background = "red";
})

prevBtn.addEventListener("click", function() {
    if (num == 0) return
    num--
    dots.forEach(function(dot, index) {
        dot.style.background = "white";
    })
    dots[num].style.background = "red";
})