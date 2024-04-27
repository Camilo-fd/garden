// import "./components/clock.js";
// import { getClientAndSaleAgentFullName } from "./module/clients.js"
import {getAllOfficeCodeAndCity} from "./module/offices.js";


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