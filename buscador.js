
let frmBuscar = document.querySelector("#search");
const content = document.querySelector("#resultados");
let objetos_array= [];


const renderResults = (record) =>{
    content.innerHTML="";
    let block = document.createElement("div");
    block.classList.add("container", "mt-4","columns", "is-multiline");
    block.setAttribute("id","resultados");
    content.appendChild(block);
    record.forEach(element => {
          //  element.images.forEach((image) =>{
                
        block.insertAdjacentHTML("beforeend",`
        <div class= "column is-3">
        <div class="card">
        <div class="card-image">
            <figure class="image is-3by4">
                <img src="${element.primaryimageurl}" alt="${element.title}" class="distribuir relleno">
            </figure>
        </div>
        <div class="card-content">
            <p><b>Century:</b> ${element.century}</p>
            <p><b>Culture:</b> ${element.culture}</p>
            <p><b>Period:</b> ${element.period}</p>
            <p><b>Title:</b> ${element.title}</p>
            
        </div>
    </div>
    </div>`);
           // })
        });
};



frmBuscar.addEventListener('submit',(event)=>{
event.preventDefault();
const {objectName} = event.target;


//console.log(objectName.value);
//let result = peticion.filter(name => name.toLowerCase().includes(objectName.value.toLowerCase()))
fetch(`${URL}object?title=${objectName.value}&size=20&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => {
        objetos_array = data.records;
        sortByName();
        renderResults(data.records);
});
});

const sortByName = () => {
    objetos_array.sort(function (object, object2) {
        return object.title > object2.title ? 1 : -1;
        });
    };
