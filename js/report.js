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
                <my-details logic="office_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>            
            `;
        }

        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
            <my-details logic="employee_3" text="3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>
            <my-details logic="employee_4" text="4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
            <my-details logic="employee_5" text="5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas."></my-details>
            `;
        }

        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
            <my-details logic="cliente_6" text="6. Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>
            `;
        }

        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
            <my-details logic="request_7" text="7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
            "></my-details>
            `;
        }
    });
});

let [clients] = report__menu
clients.click();
customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)