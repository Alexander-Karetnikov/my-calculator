window.addEventListener('load', function OnWindowLoaded() {

    let inp = document.getElementById('calc-input'),
        btns = document.querySelectorAll('.btn');


btns.forEach(function (button) {
    button.addEventListener('click', buttonClick);
});

function buttonClick (e) {
    if (e.target.innerHTML === 'C') {
        inp.innerHTML = '0';
    } else if (e.target.innerHTML === '=') {
        inp.innerHTML = eval(inp.innerHTML);
    } else if (inp.innerHTML === "0") {
        inp.innerHTML = e.target.innerHTML;
    } else {
        inp.innerHTML += e.target.innerHTML;
    }
}
});

