// import "./components/clock.js";
// import { getClientAndSaleAgentFullName } from "./module/clients.js"
import {getAllOfficeCodeAndCity} from "./module/offices.js";
import {getAllOfficesFromSpainCityAndMovil} from "./module/offices.js";
import {getAllEmployeesWithBossAndCodeSever} from "./module/employees.js";


// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
const queryAboutTable1 = document.querySelector("#queryAboutTable1")
queryAboutTable1.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable1.children
    if(!report__container.innerHTML){
        let data = await getAllOfficeCodeAndCity();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>CLIENTES</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Codigo: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})


// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
const queryAboutTable2 = document.querySelector("#queryAboutTable2")
queryAboutTable2.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable2.children
    if(!report__container.innerHTML){
        let data = await getAllOfficesFromSpainCityAndMovil();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>CLIENTES</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                        <p><b>telefono: </b>${val.telefono}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
const queryAboutTable3 = document.querySelector("#queryAboutTable3")
queryAboutTable3.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable3.children
    if(!report__container.innerHTML){
        let data = await getAllEmployeesWithBossAndCodeSever();
        let plantilla = "";
        console.log(data);
        data.forEach(val => {
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>CLIENTES</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>nombre: </b>${val.apellidos}</p>
                        <p><b>apellidos: </b>${val.lastname1} ${val.lastname2}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})