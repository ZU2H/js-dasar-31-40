document.querySelector("#clicked").addEventListener("click", show);

function show() {
    let url = "js/tblmenu.json"
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            let title = "<h1>Data Menu</h1><table><th>Kamar</th><th>Harga</th>";
            data.forEach(element => {
                title += `<tr>
                    <td>${element.kamar}</td>
                    <td>${element.price}</td>
                </tr>`;
            });
            title += "</table>";
            document.querySelector("#isi").innerHTML = title;
        })
}