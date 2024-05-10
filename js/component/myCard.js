import { 
    getAllOfficeCodeAndCity,
    getAllOfficesFromSpainCityAndMovil,
} from '../module/offices.js'

import {
    getAllEmployeesWithBossAndCodeSever,
    getBossFullNameAndEmail,
    getBossFullNameAndEmployees
} from '../module/employees.js'

export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.shadowRoot.innerHTML = /*html*/ `
            <link rel="stylesheet" href="../css/myCard.css">
        `
    }
    
    // CONSULTA #1
    async getAllOfficeCodeAndCityDesing() {
        let data = await getAllOfficeCodeAndCity()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
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
            `
        })
    }

    // CONSULTA #2
    async getAllOfficesFromSpainCityAndMovilDesing() {
        let data = await getAllOfficesFromSpainCityAndMovil()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>telefono: </b>${val.telefono}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #3
    async getAllEmployeesWithBossAndCodeSeverDesing() {
        let data = await getAllEmployeesWithBossAndCodeSever()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>nombre: </b>${val.nombre}</p>
                        <p><b>apellidos: </b>${val.apellidos}</p>
                        <p><b>email: </b>${val.email}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #4
    async getBossFullNameAndEmailDesing() {
        let data = await getBossFullNameAndEmail()
        this.shadowRoot.innerHTML += /*html*/ `
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
        `
    }

        // CONSULTA #5
        async getBossFullNameAndEmployeesDesing() {
            let data = await getBossFullNameAndEmployees()
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/ `
                    <div class="report__card">
                        <div class="card__title">
                            <div>CLIENTES</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>nombre: </b>${val.nombre}</p>
                            <p><b>apellidos: </b>${val.apellidos}</p>
                            <p><b>puesto: </b>${val.position}</p>
                            </div>
                        </div>
                    </div>
                `
            })
        }

    static get observedAttributes() {
        return ["logic"];
    }

    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="office_1") this.getAllOfficeCodeAndCityDesing()
        if(name=="logic" && now=="office_2") this.getAllOfficesFromSpainCityAndMovilDesing()
        if(name=="logic" && now=="employee_3") this.getAllEmployeesWithBossAndCodeSeverDesing()
        if(name=="logic" && now=="employee_4") this.getBossFullNameAndEmailDesing()
        if(name=="logic" && now=="employee_5") this.getBossFullNameAndEmployeesDesing()
    }
}