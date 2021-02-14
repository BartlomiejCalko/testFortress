import * as dataTitle from 'data.json';
let title = dataTitle.title[0];
console.log(title);



const app = document.getElementById("app");
const p = document.createElement("p");
const p2 = document.createElement("p");
p.textContent = "Lekker, unik og moderne toppleilighet med balkong!"; 
p2.textContent = "Høy standard, 3-soverom, 2-bad.";
app?.appendChild(p)
app?.appendChild(p2);



