window.addEventListener('click', function(event) {
    let popUp = document.querySelector('.pop-up');
    if (event.target.closest('.pop-up-active')) {
        popUp.classList.toggle('pop-up-open');
    } else if (!event.target.closest('.pop-up-content') && popUp.closest('.pop-up-open')) {
        popUp.classList.remove('pop-up-open');
    }

    if (event.target.closest('.pop-up-close-text')) {
        let popInput = document.querySelector('.pop-up-input-text');
        popInput.value = '';
    }
    let ev = document.querySelector('.pop-up-input-active');
    if (event.target.closest('.pop-up-input-active')) {
        ev.classList.toggle('pop-up-input-open');
    }
    let popInputSelect = document.querySelector('.pop-up-input-select');
    if (event.target.closest('.pop-up-item')) {
        let popClick = event.target.textContent;
        popInputSelect.value = popClick;
    } else if (!event.target.closest('.pop-up-content') && ev.closest('.pop-up-input-open')) {
        ev.classList.remove('pop-up-input-open');
    }

    if (event.target.closest('.table-mini-top-text')) {
        let tableBlock = event.target.closest('.table-mini-block');
        tableBlock.classList.toggle('table-mini-block-active')
    }

    if (event.target.closest('.tc-select')) {
        let tcSelect = event.target.closest('.tc-select');
        tcSelect.classList.toggle('tc-select-open');
    }
    let tcInput = document.querySelector('.tc-select-top-input')
    if (event.target.closest('.tc-select-top-item')) {
        let tcSelect = event.target.closest('.tc-select');
        let tcInput = tcSelect.querySelector('.tc-select-top-input')
        let popClick = event.target.textContent;
        tcInput.value = popClick;
    }
    let tcThanks = document.querySelector('.pop-up-thanks');
    if (event.target.closest('.pop-up-thanks-open')) {
        tcThanks.classList.toggle('pop-up-thanks-active');
    } else if (!event.target.closest('.pop-up-content') && tcThanks.closest('.pop-up-thanks-active')) {
        tcThanks.classList.remove('pop-up-thanks-active');
    } else if (event.target.closest('.pop-up-thanks-btn')) {
        tcThanks.classList.remove('pop-up-thanks-active');
        popUp.classList.remove('pop-up-open');
    }
})

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})