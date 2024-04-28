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
import {getOrdersClientsExpectedDateAndDelivery} from "./module/requests.js"; // EJERCICIO 9
import {getOrdersClientsExpectedDateAndDeliveryBeforeDate} from "./module/requests.js"; // EJERCICIO 10
import {getrejectedRequestsIn2009} from "./module/requests.js"; // EJERCICIO 11
import {getDeliveryRequest} from "./module/requests.js"; // EJERCICIO 12
import {getAllPayOptions} from "./module/payments.js"; // EJERCICIO 13
import {getAllPayOptionsPay} from "./module/payments.js"; // EJERCICIO 14
import {getProductGamaAnd100Units} from "./module/product.js"; // EJERCICIO 15


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

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
const queryAboutTable9 = document.querySelector("#queryAboutTable9")
queryAboutTable9.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable9.children
    if(!report__container.innerHTML){
        let data = await getOrdersClientsExpectedDateAndDelivery();
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
                        <p><b>pedido: </b>${val.pedido}</p>
                        <p><b>cliente: </b>${val.cliente}</p>
                        <p><b>pedido espera: </b>${val.pedido_espera}</p>
                        <p><b>pedido retraso: </b>${val.pedido_retraso}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
const queryAboutTable10 = document.querySelector("#queryAboutTable10")
queryAboutTable10.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable10.children
    if(!report__container.innerHTML){
        let data = await getOrdersClientsExpectedDateAndDeliveryBeforeDate();
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
                        <p><b>pedido: </b>${val.pedido}</p>
                        <p><b>codigo cliente: </b>${val.codigo_cliente}</p>
                        <p><b>pedido espera: </b>${val.tiempo_espera}</p>
                        <p><b>pedido retraso: </b>${val.tiempo_llegada}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.
const queryAboutTable11 = document.querySelector("#queryAboutTable11")
queryAboutTable11.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable11.children
    if(!report__container.innerHTML){
        let data = await getrejectedRequestsIn2009();
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
                        <p><b>codigo pedido: </b>${val.codigo_pedido}</p>
                        <p><b>codigo cliente: </b>${val.codigo_cliente}</p>
                        <p><b>pedido espera: </b>${val.tiempo_espera}</p>
                        <p><b>fecha llegada: </b>${val.fecha_llegada}</p>
                        <p><b>estado: </b>${val.estado}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.
const queryAboutTable12 = document.querySelector("#queryAboutTable12")
queryAboutTable12.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable12.children
    if(!report__container.innerHTML){
        let data = await getDeliveryRequest();
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
                        <p><b>codigo pedido: </b>${val.codigo_pedido}</p>
                        <p><b>codigo cliente: </b>${val.codigo_cliente}</p>
                        <p><b>pedido espera: </b>${val.tiempo_espera}</p>
                        <p><b>fecha llegada: </b>${val.fecha_llegada}</p>
                        <p><b>estado: </b>${val.estado}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.
const queryAboutTable13 = document.querySelector("#queryAboutTable13")
queryAboutTable13.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable13.children
    if(!report__container.innerHTML){
        let data = await getAllPayOptions();
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
                        <p><b>codigo cliente: </b>${val.codigo_cliente}</p>
                        <p><b>fecha pago: </b>${val.fecha_pago}</p>
                        <p><b>valor: </b>${val.valor}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.
const queryAboutTable14 = document.querySelector("#queryAboutTable14")
queryAboutTable14.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable14.children
    if(!report__container.innerHTML){
        let data = await getAllPayOptionsPay();
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
                        <p><b>formas pago: </b>${val}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})

// 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
const queryAboutTable15 = document.querySelector("#queryAboutTable15")
queryAboutTable15.addEventListener("click", async(e)=>{
    let [,report__container] = queryAboutTable15.children
    if(!report__container.innerHTML){
        let data = await getProductGamaAnd100Units();
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
                        <p><b>precio venta: </b>${val.price_sale}</p>
                        <p><b>nombre: </b>${val.name}</p>
                    </div>
                </div>
            </div>
            `;
        });
        report__container.innerHTML = plantilla;
    }
})