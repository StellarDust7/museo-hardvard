
const renderObjetos = (data) =>{
    data.records.forEach(element => {
        let div = document.createElement("div");
        div.classList.add("column", "is-3");
        let imagen =`${IMG_PREFIX}${element.idsid}`;
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
                <img src="${imagen}" alt="Placeholder image" class="distribuir">
            </figure>
        </div>
        <div class="card-content">
            <p><b>technique:</b> ${element.technique}</p>
            <p><b>Date:</b> ${element.date}</p>
            <p><b>Copyright:</b> ${element.copyright}</p>
            
        </div>
    </div>`;
    console.log(element)
    document.querySelector("#resultados").append(div);
    });

}


fetch(`${URL}image?q=width:>2000&size=12&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderObjetos(data));