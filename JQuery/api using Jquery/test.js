fetch("https://fakestoreapi.com/products").then((apidata)=>{
    return apidata.json();
}).then((objectdata)=>{
    let tabledata="";
    objectdata.map((apivalue)=>{
        tabledata +=`<tr>
        <td>${apivalue.id}</td>
        <td>${apivalue.title}</td>
        <td>${apivalue.description}</td>
        <td>${apivalue.price}</td>
        <td><img src="${apivalue.image}"/></td>
        
        </tr>`

        document.getElementById("tbody").innerHTML=tabledata;
    })
}).catch((Error)=>{
    alert("something is wromng plz try later");
});