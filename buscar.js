
    let frmBusca = document.querySelector("#search");

    frmBusca.addEventListener('submit',(event)=>{
        event.preventDefault();
        const {objectName} = event.target;
        
        
        //console.log(objectName.value);
        //let result = peticion.filter(name => name.toLowerCase().includes(objectName.value.toLowerCase()))
        fetch(`${URL}object?culture=${objectName.value}&size=10&apikey=${APIKEY}`)
            .then((response) => response.json())
            .then((data) => {
                objetos_array = data.records;
                sortByName();
                renderResults(data.records);
        });
        });
    
        let frmBusc = document.querySelector("#search");
        frmBusc.addEventListener('submit',(event)=>{
            event.preventDefault();
            const {objectName} = event.target;
            //console.log(objectName.value);
            //let result = peticion.filter(name => name.toLowerCase().includes(objectName.value.toLowerCase()))
            fetch(`${URL}object?period=${objectName.value}&size=10&apikey=${APIKEY}`)
                .then((response) => response.json())
                .then((data) => {
                    objetos_array = data.records;
                    sortByName();
                    renderResults(data.records);
            });
            });




















/*const renderObjetos = (data)=> {
    
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
    //console.log(data.records)
    document.querySelector("#resultados").append(div);
    });
};
fetch(`${URL}object?culture=Greek&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => {
        objeto_array=data.records;
        renderObjetos(data)
    
    });*/