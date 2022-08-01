
const renderObjetos = (data) =>{
    data.records.forEach((element) => {

        let div = document.createElement("div");
        div.classList.add("column", "is-3");
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
        <div class="card-image">
            <figure class="image is-3by1">
                <img src="img/logoh.png" alt="Placeholder image" class="distribuir mt-2">
            </figure>
        </div>
        <div class="card-content">
            <p><b>Descripcion:</b> ${element.description}</p>
            <p><b>Duracion:</b> ${element.duration}</p>
            <a href="${element.primaryurl}"><button class="button is-rounded mt-2">Escuchar Audio</button></a>
        </div>
    </div>`;
    console.log(element)
    document.querySelector("#resultados").append(div);
        console.log(element)
    });
}


fetch(`${URL}audio?size=12&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderObjetos(data));