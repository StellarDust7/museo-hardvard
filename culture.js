
const renderObjetos = (data)=> {
    data.records.forEach((element) => {
        let div = document.createElement("div");
        div.classList.add("column", "is-3");
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
                <img src="${element.primaryimageurl}" alt="Placeholder image" class="distribuir">
            </figure>
        </div>
        <div class="card-content">
            <p><b>Century:</b> ${element.century}</p>
            <p><b>Culture:</b> ${element.culture}</p>
            <p><b>Period:</b> ${element.period}</p>
            <p><b>Title:</b> ${element.title}</p>
            
        </div>
    </div>`;
    console.log(element)
    document.querySelector("#resultados").append(div);
    });
};
const renderObjetos1 = (data)=> {
    data.records.forEach((element) => {
        let div = document.createElement("div");
        div.classList.add("column", "is-3");
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
                <img src="${element.primaryimageurl}" alt="Placeholder image" class="distribuir">
            </figure>
        </div>
        <div class="card-content">
            <p><b>Century:</b> ${element.century}</p>
            <p><b>Culture:</b> ${element.culture}</p>
            <p><b>Period:</b> ${element.period}</p>
            <p><b>Title:</b> ${element.title}</p>
            
        </div>
    </div>`;
    console.log(element)
    document.querySelector("#resultados").append(div);
    });
};
const renderObjetos2 = (data)=> {
    data.records.forEach((element) => {
        let div = document.createElement("div");
        div.classList.add("column", "is-3");
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
                <img src="${element.primaryimageurl}" alt="Placeholder image" class="distribuir">
            </figure>
        </div>
        <div class="card-content">
            <p><b>Century:</b> ${element.century}</p>
            <p><b>Culture:</b> ${element.culture}</p>
            <p><b>Period:</b> ${element.period}</p>
            <p><b>Title:</b> ${element.title}</p>
            
        </div>
    </div>`;
    console.log(element)
    document.querySelector("#resultados").append(div);
    });
};
const renderObjetos3 = (data)=> {
    data.records.forEach((element) => {
        let div = document.createElement("div");
        div.classList.add("column", "is-3");
        document.querySelector("#resultados").append(div);
        div.innerHTML += `<div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
                <img src="${element.primaryimageurl}" alt="Placeholder image" class="distribuir">
            </figure>
        </div>
        <div class="card-content">
            <p><b>Century:</b> ${element.century}</p>
            <p><b>Culture:</b> ${element.culture}</p>
            <p><b>Period:</b> ${element.period}</p>
            <p><b>Title:</b> ${element.title}</p>
            
        </div>
    </div>`;
    console.log(element)
    document.querySelector("#resultados").append(div);
    });
};

fetch(`${URL}object?culture=Greek&size=8&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderObjetos(data));
    fetch(`${URL}object?culture=Arab&size=8&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderObjetos1(data));
    fetch(`${URL}object?culture=English&size=8&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderObjetos2(data));
    fetch(`${URL}object?culture=West African&size=8&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderObjetos3(data));



