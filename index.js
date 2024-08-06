

let date = document.getElementById("tarih");
let miktar = document.getElementById("miktar");
let harcamaalani = document.getElementById("harcamaalani");
let table = document.querySelector(".table")

document.getElementById("kaydet").addEventListener("click",()=>{
    let tarih1 = date.value ;
    let miktar1 = miktar.value;
    let harcama1 =harcamaalani.value;

    console.log(tarih1,miktar1, harcama1);

    const tr= document.createElement('tr');
    const newElement = `<td>${tarih1}</td>
                   <td>${miktar1}</td>
                   <td>${harcama1}</td>
                   <td>${miktar1}</td>`

     tr.innerHTML=newElement ; 
     table.appendChild(tr);
                
})







