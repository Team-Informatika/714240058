import {getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

// Fungsi untuk merender data kartu
function renderDataKartu() {
    // Menggunakan setInner untuk menampilkan pesan "Memuat..."
    setInner('#kartu-content', 'Memuat...');

    // Mengambil data JSON dan memprosesnya
    getJSON("https://t.if.co.id/json/syalwa.json", null, null, responseFunction)
        .catch(error => {
            console.error('Error:', error);
            setInner('#kartu-content', 'Gagal memuat data.');
        });
}
function responseFunction(response) {
    console.log('HTTP Status: ', response.status);
    console.log('Response Data: ', response.data);

    if (response.status === 200) {
        const data = response.data;
            
        const kartuContent = `
            <p>Miner: ${data.miner}</p>
            <p>Hashrate: ${data.totalHash} H/s</p>`;
                
                
        //menampilkan ke dalam elemen dengan id kartu-content
        setInner("kartu-content", kartuContent);
    } else {
        setInner("kartu-content", `<p>Error: Unable to fetch data.</p>;`);
    }
}