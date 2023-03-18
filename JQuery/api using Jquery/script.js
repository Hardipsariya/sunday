fetch("https://fakestoreapi.com/products").then((apidata)=>{
    return apidata.json();
}).then((objectdata)=>{
    console.log(objectdata[0].title);
    let tabledata="";
    objectdata.map((newvalue)=>{
        tabledata+=` <tr>
        <td>${newvalue.title} </td>
        <td>${newvalue.description} </td>
        <td>${newvalue.price}</td>
        <td><img src="${newvalue.image}"/></td>
        <td>${newvalue.category}</td>
        </tr>`;
    })
    document.getElementById("tbody").innerHTML=tabledata;
}).catch((Error)=>{
    alert("somting is wrong plx try leter");
});