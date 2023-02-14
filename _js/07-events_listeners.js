const buttonMessage = document.querySelector(".displayAlert")

buttonMessage.addEventListener('click', function() {
    alert("Pop up message");
});

const inputText = document.querySelector('.input-to-copy');
const copyText = document.querySelector('.put-text-here');

inputText.addEventListener('keyup', function() {
    copyText.innerText = inputText.value;
});