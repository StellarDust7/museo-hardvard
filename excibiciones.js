
        /*let div = document.createElement("div");
        div.classList.add("column", "is-3");
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
                <img src="${element.primaryimageurl}" alt="Placeholder image" class="distribuir">
            </figure>
        </div>
        <div class="card-content">
            <p><b>City:</b> ${element.city}</p>
            <p><b>Culture:</b> ${element.culture}</p>
            <p><b>Period:</b> ${element.period}</p>
            <p><b>Title:</b> ${element.title}</p>
            
        </div>
    </div>`;*/
    
    //document.querySelector("#resultados").append(div);

            /*let div = document.createElement("div");
            div.classList.add("column", "is-3");
            document.querySelector("#resultados").append(div);
            let imagen =`${IMG_PREFIX}${result.idsid}`;
            div.innerHTML += `<div class="card">
            <div class="card-image">
                <figure class="image is-3by4">
                    <img src="${imagen}" alt="Placeholder image" class="distribuir">
                </figure>
            </div>
            <div class="card-content">
                <p><b>Culture:</b> ${image.culture}</p>
                <p><b>Period:</b> ${image.division}</p>
                <p><b>Title:</b> ${image.title}</p>
                
            </div>
        </div>`;
        document.querySelector("#resultados").append(div);
        
        })
    });
    
    });
*/
const renderExcibiciones= (data) =>{
    let {records} = data
    records.forEach((record)=>{
        record.venues.forEach((ven) =>{
            let div = document.createElement("div");
        div.classList.add("column", "is-6");
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
        <div class="card-content">
            <p><b>Title:</b> ${record.title}</p>
            <p><b>City: </b>${ven.city}</p>
            <p><b>Name: </b>${ven.fullname}</p>
            <a href="${record.url}"><button class="button is-link is-rounded mt-2">Visitar Excibicion</button></a>
            
        </div>
    </div>`
            console.log(ven)
        })
        })
}

fetch(`${URL}exhibition?venue=HAM&apikey=${APIKEY}`)
.then((response) => response.json())
.then((data) => renderExcibiciones(data));


