import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js";

// Fungsi untuk merespons perubahan hash di URL
onHashChange(output);

// Memanggil fungsi renderHTML untuk memuat halaman awal
renderHTML('kartu-content', 'page2.html');

// Fungsi untuk mengolah perubahan hash dan menampilkan konten yang sesuai
function output() {
    console.log(getHash());
    const hashpath = getHash();
    if (hashpath === 'content') {
        console.log("keluar ga?");
        renderHTML('kartu-content', "page2.html", renderDataKartu);
    }
}

// Fungsi untuk merender data kartu dari API
function renderDataKartu() {
    getJSON("https://t.if.co.id/json/syalwa.json", null, null, responseFunction)
        .catch(error => {
            console.error('Error:', error);
            setInner('kartu-content', 'Gagal memuat data.');
        });
}

// Fungsi untuk mengolah respons dari API dan menampilkan data
function responseFunction(response) {
    console.log('HTTP Status:', response.status);
    console.log('Response Data:', response.data);

    if (response.status === 200) {
        const data = response.data;
        setInner('nama', data.nama);
        setInner('status', data.status);
        setInner('contact', data.contact);
    } else {
        setInner('kartu-content', '<p>Error: Unable to fetch data.</p>');
    }
}
