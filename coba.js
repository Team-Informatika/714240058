import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js"
import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js"
import { getHash, onHashChange } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/url.js"

onHashChange(muncul);

renderHTML('kartu-content', 'page2.html')

function muncul() {
  console.log(getHash());
  const hashpath = getHash();
  if (hashpath === 'content') {
    console.log("keluar ga?");
    renderHTML('kartu-content', "page2.html", renderDataKartu);
  }
}
function renderDataKartu() {
  getJSON("https://t.if.co.id/json/syalwa.json", null, null, responseFunction);
}
// renderHTML('kartu-content', 'content.html')

function responseFunction(response) {
  // renderHTML('kartu-content', 'content.html');
  console.log('HTTP Status:', response.status);
  console.log('Response Data:', response.data);
  setInner('nama :', response.data.nama);
  setInner('status :', response.data.status);
  setInner('contact :', response.data.contact);
  
  const contact = response.data.contact;
  setInner('contact',`${contact}`);
}
