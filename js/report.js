// import "./components/clock.js";
// import { getClientAndSaleAgentFullName } from "./module/clients.js"
import {getAllOfficeCodeAndCity} from "./module/offices.js"; // EJERCICIO 1
import {getAllOfficesFromSpainCityAndMovil} from "./module/offices.js"; // EJERCICIO 2
import {getAllEmployeesWithBossAndCodeSever} from "./module/employees.js"; // EJERCICIO 3
import {getBossFullNameAndEmail} from "./module/employees.js"; // EJERCICIO 4
import {getBossFullNameAndEmployees} from "./module/employees.js"; // EJERCICIO 5
import {getAllClientsSpain} from "./module/clients.js"; // EJERCICIO 6
import {getAllStatusOrder} from "./module/requests.js"; // EJERCICIO 7
import {getAllPay2008} from "./module/payments.js"; // EJERCICIO 8


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
                        <p><b>nombre: </b>${val.nombre}</p>
                        <p><b>apellidos: </b>${val.apellidos}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
const queryAboutTable4 = document.querySelector("#queryAboutTable4")
queryAboutTable4.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable4.children
    if(!report__container.innerHTML){
        let data = await getBossFullNameAndEmail();
        let plantilla = "";
        console.log(data);
      
            plantilla += `
                <div class="report__card">
                <div class="card__title">
                    <div>CLIENTES</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>nombre: </b>${data.nombre}</p>
                        <p><b>apellidos: </b>${data.apellidos}</p>
                        <p><b>email: </b>${data.email}</p>
                    </div>
                </div>
            </div>
            `;
        
        report__container.innerHTML = plantilla;
    }
})

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
const queryAboutTable5 = document.querySelector("#queryAboutTable5")
queryAboutTable5.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable5.children
    if(!report__container.innerHTML){
        let data = await getBossFullNameAndEmployees();
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
                        <p><b>nombre: </b>${val.nombre}</p>
                        <p><b>apellidos: </b>${val.apellidos}</p>
                        <p><b>position: </b>${val.position}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 6. Devuelve un listado con el nombre de los todos los clientes españoles.
const queryAboutTable6 = document.querySelector("#queryAboutTable6")
queryAboutTable6.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable6.children
    if(!report__container.innerHTML){
        let data = await getAllClientsSpain();
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
                        <p><b>nombre: </b>${val.nombre}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.
const queryAboutTable7 = document.querySelector("#queryAboutTable7")
queryAboutTable7.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable7.children
    if(!report__container.innerHTML){
        let data = await getAllStatusOrder();
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
                        <p><b>estado: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos 
const queryAboutTable8 = document.querySelector("#queryAboutTable8")
queryAboutTable8.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable8.children
    if(!report__container.innerHTML){
        let data = await getAllPay2008();
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
                        <p><b>Codigo cliente: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})