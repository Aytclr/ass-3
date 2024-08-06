

let date = document.getElementById("tarih");
let miktar = document.getElementById("miktar");
let harcamaalani = document.getElementById("harcamaalani");
let table = document.querySelector(".table")
let ekle = document.querySelector('.ekle')
let gelir = document.querySelector('#gelir')
let total = 0;
let gelir1 = gelir.value;
let temizle = document.querySelector('.temizle')


document.getElementById("kaydet").addEventListener("click",()=>{
    let tarih1 = date.value ;
    let miktar1 = miktar.value;
    let harcama1 =harcamaalani.value;

    // console.log(tarih1,miktar1, harcama1);

    const tr= document.createElement('tr');
    const newElement = `<td>${tarih1}</td>
                   <td>${miktar1}</td>
                   <td>${harcama1}</td>
                   <td><button class="trash" ><i class="fa-solid fa-trash "></i</button></td>`

     tr.innerHTML=newElement ; 
     table.appendChild(tr);

    total += Number(miktar1);
    
    document.querySelector('.gelirbox2').textContent= total


   kalan = gelir1 - total;
   document.querySelector('.gelirbox3').textContent= kalan;
    

     
                
});

document.querySelector('.ekle').onclick = ()=>{
    let gelir1 = gelir.value;

    document.querySelector('.gelirbox').textContent=gelir1;

    kalan = gelir1 - total;

    document.querySelector('.gelirbox3').textContent= kalan;

}


document.querySelector('.temizle').onclick=()=>{
    document.querySelector('.gelirbox2').textContent= "";
    document.querySelector('.gelirbox3').textContent= "";
    document.querySelector('.gelirbox').textContent="";
}



    tr.querySelector('.trash').onclick=()=>{
        table.removeChild(tr); // Satırı tablodan kaldırın
        total -= miktar1; // Toplam miktarı güncelleyin
        document.querySelector('.gelirbox2').textContent = total; // Güncellenmiş toplam miktarı ekleyin
        let kalan = gelir - total; // Kalan geliri tekrar hesaplayın
        document.querySelector('.gelirbox3').textContent = kalan; // Kalan geliri ekleyin
    };



