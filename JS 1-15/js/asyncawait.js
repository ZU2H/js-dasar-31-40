document.querySelector("#clicked").addEventListener("click", show);

async function show() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const RESPONSE = await fetch(URL);
    const DATA = await RESPONSE.json();

    let title = "<h1>Data Menu</h1><ul>";
    DATA.forEach(element => {
        title += `<li>${element.name}</li>`;
    });
    title += "</ul>";
    document.querySelector("#isi").innerHTML = title;
}