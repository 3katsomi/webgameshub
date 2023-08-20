let menuElement = document.querySelector('.toggled-menu-container');
winsCount = JSON.parse(localStorage.getItem("winsCount")) || 0;
winsCountGame2 = JSON.parse(localStorage.getItem("winsCountGame2")) || 0;
winsCountGame3 = JSON.parse(localStorage.getItem('winsCountGame3')) || 0;
winsCountGame4 = JSON.parse(localStorage.getItem('winningTimes')) || 0;


document.querySelector('.menu').onclick = function () {
    menuElement.classList.toggle("toggleDown");
}

document.querySelector('.winningCount').innerHTML = winsCount;
document.querySelector('.winningCountGame2').innerHTML = winsCountGame2;
document.querySelector('.winningCountGame3').innerHTML = winsCountGame3;
document.querySelector('.winningCountGame4').innerHTML = winsCountGame4;

const suggestion = document.querySelector('.suggestionsField');
document.querySelector('.submit-suggestion').onclick = function () {
    const suggestionSending = suggestion.value;

}