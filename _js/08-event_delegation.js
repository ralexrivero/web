const buttons = document.querySelector('.buttons-group')

buttons.addEventListener('click', function(event) {
    if (event.target.tagName='button') {
        const clicked = event.target.innerText;
        alert(`Button clicked: ${clicked}`);
    }
    event.stopPropagation();
});
