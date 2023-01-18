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
})