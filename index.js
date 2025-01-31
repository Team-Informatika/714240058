import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";


// menjalankan fungsi getJSON
function renderDatadariJson() {

    getJSON("https://t.if.co.id/json/syalwa.json", "syalwa", "aliya", dataSaya);
    
}
renderHTML("content", "page2.html");


            
    //menampilkan ke dalam elemen dengan id worker
    // setInner("paragraf", "page2.html", renderDatadariJson);

    function dataSaya(data) {
        //{ status, data: parsedResult }
        console.log(data);
        // let apaja;
        // apaja = data.data;
        // const container = document.getElementById("paragraf");
        // // Melakukan perulangan untuk setiap item dalam data
        // apaja.forEach((item) => {
        //   // Membuat elemen div untuk setiap item
        //   const layananItem = document.createElement("div");
        //   layananItem.classList.add("paragraf");
        //   // Membuat elemen judul
        //   const judul = document.createElement("h2");
        //   judul.textContent = item.judul;
      
        //   // Membuat elemen deskripsi
        //   const deskripsi = document.createElement("p");
        //   deskripsi.textContent = item.deskripsi;
      
        //   // Menambahkan icon, judul, dan deskripsi ke dalam layananItem
        //   layananItem.appendChild(judul);
        //   layananItem.appendChild(deskripsi);
      
        //   // Menambahkan layananItem ke container
        //   container.appendChild(layananItem);
        // });
      }


// fungsi untuk menampilkan data dari json



// menjalankan fungsi renderHTML
