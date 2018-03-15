var didScroll, hero, colors, main, heroLength, heroPos, i, footerContent, heart;
didScroll = false;
hero = document.querySelectorAll('.project');
heroPos = [];
main = document.getElementById('main');
colors = ['#2980b9', '#e74c3c', '#9b59b6', '#95a5a6', '#1e1f22'];
footerContent = document.querySelector('.footer-content');
heart = document.querySelector('.fa-heart');

console.log(hero);


window.onscroll = function () {
    "use strict";
    didScroll = true;
    for (i = 0; i < hero.length; i++) {

        if (heroPos.length < hero.length) {
            heroPos.push(hero[i].offsetTop - (window.innerHeight / 2));
        }


        if (window.scrollY > heroPos[i] - 100) {

            main.style.backgroundColor = colors[i];

            // Add animation to content
            var textContent = document.querySelector('.text-' + i);
            var imgContent = document.querySelector('.img-' + i);
            if (i % 2 === 0) {
                textContent.classList.remove('hidden');
                textContent.classList.add('fadeInLeft');
                imgContent.classList.remove('hidden');
                imgContent.classList.add('fadeInRight');

            } else {
                textContent.classList.remove('hidden');
                textContent.classList.add('fadeInRight');
                imgContent.classList.remove('hidden');
                imgContent.classList.add('fadeInLeft');
            }

        } else if (window.scrollY < heroPos[0]) {
            main.style.backgroundColor = '#2980b9';
        }



    }


    if (window.scrollY > 3451) {
        footerContent.classList.remove('hidden');
        footerContent.classList.add('fadeInUp');

        setTimeout(function () {
            heart.classList.add('tada', 'red');
        }, 500);
    }


};

// Set interval on scroll event

setInterval(function () {
    if (didScroll) {
        didScroll = false;
    }
}, 1500);


// Put a delay in the arrow animation. 

var arrow = document.getElementById('arrow');

setTimeout(function () {
    arrow.classList.remove('fadeInUp');
}, 2000);

setInterval(function () {

    arrow.classList.toggle('bounce');
}, 3000);
