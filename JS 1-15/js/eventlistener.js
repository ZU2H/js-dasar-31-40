function show() {
    console.log("Event Listener");
}

judul.onmouseover = function () {
    console.log("Fungsi Anonymous");
}

judul.addEventListener("click", show);