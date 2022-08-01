const renderObjetos = (data) =>{
    data.records.forEach(element => {
        let div = document.createElement("div");
        div.classList.add("column", "is-3");
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
                <div class="card-content">
                    <p><b>Description:</b> ${element.description}</p>
                    <p><b>copyright:</b> ${element.copyright}</p>
                </div>
                <a href="${element.primaryurl}" class="bot has-text-weight-semibold">Ver Video</a>
            </div>`;
    console.log(element)
    document.querySelector("#resultados").append(div);
    });

}


fetch(`${URL}video?size=12&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderObjetos(data));