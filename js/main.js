'use strict'

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', scroller);

scroller();

function scroller(){
    const heigtWindow= window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
            if(boxTop < heigtWindow){
                box.classList.add('show');
            }else{
                box.classList.remove('show');
            }
    })
}

