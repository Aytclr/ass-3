
let date = document.getElementById("tarih");
let miktar = document.getElementById("miktar");
let harcamaalani = document.getElementById("harcamaalani");
let harcamaBody = document.querySelector(".table")
let ekle = document.querySelector('.ekle')
let gelir = document.querySelector('#gelir')
let total = 0;
let gelir1 = gelir.value;
let temizle = document.querySelector('.temizle')

let harcamaListesi2=[]




document.getElementById("kaydet").addEventListener("click",(e)=>{

    e.preventDefault()
    const yeniHarcama ={
        tarih:tarih.value,
        miktar:miktar.value,
        aciklama:harcamaalani.value,
        id: new Date().getTime()

    };

    harcamaListesi2.push(yeniHarcama);

    harcamayiShowScreen(yeniHarcama)


});

 const harcamayiShowScreen=({id,miktar,tarih,aciklama})=>{
    harcamaBody.innerHTML+=`
    <tr>
    <td>${tarih}</td>
    <td>${miktar}</td>
    <td>${aciklama}</td>
    <td><button class="trash" ><i class="fa-solid fa-trash "></i</button></td>
    </tr>
    `;

    document.querySelectorAll(".trash").forEach((sil)=>{
        sil.onclick=()=>{
            sil.parentElement.parentElement.remove()
        }
    })

 };

 ekle.addEventListener("click",(e)=>{

e.preventDefault()
let gelir = gelir + Number(gelir.value);


 })