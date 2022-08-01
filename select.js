
/*const renderSelect = (data) => {
    let select = document.querySelector('#culturas');
    let {records} = data
    records.forEach((record) => {
        let option = document.createElement('option')
        option.setAttribute('value', record.id)
        option.innerText = record.name;
        select.appendChild(option)
        
    });
};

*/

/*fetch(`${URL}culture?&size=30&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderSelect(data));
    
document.querySelector("#culturas").addEventListener("change",function(evt){
    let valor_cultura = evt.target.value;

   let records2 = objetos_array.sort(function(record){
        return record.id.includes(valor_cultura);
    });
    console.log(records2)
    //let objeto;


    sortByName();
    /*if(valor_cultura==""){
            objeto=objetos_array;
        }else{
            objeto = objetos_array.filter(function(obje){
            return obje.name?.includes(parseInt(culturevalor));
            });
            
        }*/
        
        //renderResults(objetos_array);
    
   /* 
    fetch(`${URL}culture?id=${valor_cultura}&size=30&apikey=${APIKEY}`)
    .then((response) => response.json())
    .then((data) => renderSelect(data));
});
*/
    


