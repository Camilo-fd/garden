import "./component/clock.js";
import { Mycard } from "./component/myCard.js";
import { Mydetails } from "./component/myDetails.js";

let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")

        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
                <my-details logic="office_1" text="1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>
            
            `;
        }
    });
});

let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)