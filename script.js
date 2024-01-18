let body = document.querySelector('#body');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    if (button.innerHTML == "Light Mode") {
        button.innerHTML = "Dark Mode";
        body.style.background = 'black'; 
        button.style = 'color: white; background: rgb(43, 43, 43); box-shadow: 0px 8px 80px rgb(212, 109, 204);'
    } else if (button.innerHTML == "Dark Mode") {
        button.innerHTML = "Light Mode";
        body.style.background = 'white'; 
        button.style = ' box-shadow: none;'
    }
});