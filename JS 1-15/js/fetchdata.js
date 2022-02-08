document.querySelector("#clicked").addEventListener("click", show);

function show() {
    let url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then(response => response.json())
    .then(function (data) {
        let title = "<h1>Data Menu</h1><ul>";
        data.forEach(element => {
            title += `<li>${element.title}</li>`;
        });
        title += "</ul>";
        document.querySelector("#isi").innerHTML = title;
    })
}