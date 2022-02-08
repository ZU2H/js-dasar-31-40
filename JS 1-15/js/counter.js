
let counter = 0;

naik.onclick = function () {
    counter += 1;
    document.querySelector("h1").innerHTML = counter;
}

turun.onclick = function () {
    counter -= 1;
    document.querySelector("h1").innerHTML = counter;

}