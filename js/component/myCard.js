import { 
    getAllOfficeCodeAndCity,
    getAllOfficesFromSpainCityAndMovil,
} from '../module/offices.js'

import {
    getAllEmployeesWithBossAndCodeSever,
    getBossFullNameAndEmail,
    getBossFullNameAndEmployees
} from '../module/employees.js'

import {
    getAllClientsSpain,
    getAllClientsMadridAndRepresentative,
    getClientAndSaleAgentFullName,
    getClientPayWithSalasManager,
    getClientNotPayWithSalasManager,
    getClientPayWithSalasManagerAndCity,
    getClientNotPayWithSalasManagerAndCity,
    getOfficesClientsInFuenlabrada,
    getListClientsAndEmployeesWithOffice
} from '../module/clients.js'

import {
    getAllStatusOrder,
    getOrdersClientsExpectedDateAndDelivery,
    getOrdersClientsExpectedDateAndDeliveryBeforeDate,
    getrejectedRequestsIn2009,
    getDeliveryRequest
} from '../module/requests.js'

import {
    getAllPay2008,
    getAllPayOptions,
    getAllPayOptionsPay
} from '../module/payments.js'

import {
    getProductGamaAnd100Units
} from '../module/product.js'

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

    // CONSULTA #6
    async getAllClientsSpainDesing() {
        let data = await getAllClientsSpain()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
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
            `
        })
    }

    // CONSULTA #7
    async getAllStatusOrderDesing() {
        let data = await getAllStatusOrder()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Estados_pedido: </b>${val}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #8
    async getAllPay2008Desing() {
        let data = await getAllPay2008()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo_cliente: </b>${val}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #9
    async getOrdersClientsExpectedDateAndDeliveryDesing() {
        let data = await getOrdersClientsExpectedDateAndDelivery()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>cliente: </b>${val.cliente}</p>
                        <p><b>pedido: </b>${val.pedido}</p>
                        <p><b>pedido_espera: </b>${val.pedido_espera}</p>
                        <p><b>pedido_retraso: </b>${val.pedido_retraso}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #10
    async getOrdersClientsExpectedDateAndDeliveryBeforeDateDesing() {
        let data = await getOrdersClientsExpectedDateAndDeliveryBeforeDate()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>codigo_cliente: </b>${val.codigo_cliente}</p>
                        <p><b>pedido: </b>${val.pedido}</p>
                        <p><b>tiempo_espera: </b>${val.tiempo_espera}</p>
                        <p><b>tiempo_llegada: </b>${val.tiempo_llegada}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #11
    async getrejectedRequestsIn2009Desing() {
        let data = await getrejectedRequestsIn2009()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>codigo_cliente: </b>${val.codigo_cliente}</p>
                        <p><b>codigo_pedido: </b>${val.codigo_pedido}</p>
                        <p><b>tiempo_espera: </b>${val.tiempo_espera}</p>
                        <p><b>fecha_llegada: </b>${val.fecha_llegada}</p>
                        <p><b>estado: </b>${val.estado}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #12
    async getDeliveryRequestDesing() {
        let data = await getDeliveryRequest()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>codigo_cliente: </b>${val.codigo_cliente}</p>
                        <p><b>codigo_pedido: </b>${val.codigo_pedido}</p>
                        <p><b>tiempo_espera: </b>${val.tiempo_espera}</p>
                        <p><b>fecha_llegada: </b>${val.fecha_llegada}</p>
                        <p><b>estado: </b>${val.estado}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #13
    async getAllPayOptionsDesing() {
        let data = await getAllPayOptions()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>codigo_cliente: </b>${val.codigo_cliente}</p>
                        <p><b>fecha_pago: </b>${val.fecha_pago}</p>
                        <p><b>valor: </b>${val.valor}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #14
    async getAllPayOptionsPayDesing() {
        let data = await getAllPayOptionsPay()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>fecha_pago: </b>${val}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #15
    async getProductGamaAnd100UnitsDesing() {
        let data = await getProductGamaAnd100Units()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>name: </b>${val.name}</p>
                        <p><b>price_sale: </b>${val.price_sale}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTA #16
    async getAllClientsMadridAndRepresentativeDesing() {
        let data = await getAllClientsMadridAndRepresentative()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
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
            `
        })
    }

    // CONSULTAMULTITABLA #1
    async getClientAndSaleAgentFullNameDesing() {
        let data = await getClientAndSaleAgentFullName()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>nombre: </b>${val.nombre}</p>
                        <p><b>nombre_manager: </b>${val.nombre_manager}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTAMULTITABLA #2
    async getClientPayWithSalasManagerDesing() {
        let data = await getClientPayWithSalasManager()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>codigo_cliente: </b>${val.codigo_cliente}</p>
                        <p><b>nombre_cliente: </b>${val.nombre_cliente}</p>
                        <p><b>codigo_empleado: </b>${val.codigo_empleado}</p>
                        <p><b>nombre_empleado: </b>${val.nombre_empleado}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTAMULTITABLA #3
    async getClientNotPayWithSalasManagerDesing() {
        let data = await getClientNotPayWithSalasManager()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>nombre_cliente: </b>${val.nombre_cliente}</p>
                        <p><b>codigo_empleado: </b>${val.codigo_empleado}</p>
                        <p><b>nombre_empleado: </b>${val.nombre_empleado}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTAMULTITABLA #4
    async getClientPayWithSalasManagerAndCityDesing() {
        let data = await getClientPayWithSalasManagerAndCity()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>nombre_cliente: </b>${val.nombre_cliente}</p>
                        <p><b>nombre_manager: </b>${val.nombre_manager}</p>
                        <p><b>ciudad: </b>${val.ciudad}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTAMULTITABLA #5
    async getClientNotPayWithSalasManagerAndCityDesing() {
        let data = await getClientNotPayWithSalasManagerAndCity()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>nombre_cliente: </b>${val.nombre_cliente}</p>
                        <p><b>nombre_manager: </b>${val.nombre_manager}</p>
                        <p><b>ciudad: </b>${val.ciudad}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    // CONSULTAMULTITABLA #6
    async getOfficesClientsInFuenlabradaDesing() {
        let data = await getOfficesClientsInFuenlabrada()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>codigo: </b>${val.codigo}</p>
                        <p><b>direccion: </b>${val.direccion}</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

        // CONSULTAMULTITABLA #7
        async getListClientsAndEmployeesWithOfficeDesing() {
            let data = await getListClientsAndEmployeesWithOffice()
            data.forEach(val => {
                this.shadowRoot.innerHTML += /*html*/ `
                    <div class="report__card">
                        <div class="card__title">
                            <div>CLIENTES</div>
                        </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>nombre_cliente: </b>${val.nombre_cliente}</p>
                            <p><b>nombre_manager: </b>${val.nombre_manager}</p>
                            <p><b>ciudad: </b>${val.ciudad}</p>
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
        if(name=="logic" && now=="cliente_6") this.getAllClientsSpainDesing()
        if(name=="logic" && now=="request_7") this.getAllStatusOrderDesing()
        if(name=="logic" && now=="payment_8") this.getAllPay2008Desing()
        if(name=="logic" && now=="request_9") this.getOrdersClientsExpectedDateAndDeliveryDesing()
        if(name=="logic" && now=="request_10") this.getOrdersClientsExpectedDateAndDeliveryBeforeDateDesing()
        if(name=="logic" && now=="request_11") this.getrejectedRequestsIn2009Desing()
        if(name=="logic" && now=="request_12") this.getDeliveryRequestDesing()
        if(name=="logic" && now=="payment_13") this.getAllPayOptionsDesing()
        if(name=="logic" && now=="payment_14") this.getAllPayOptionsPayDesing()
        if(name=="logic" && now=="product_15") this.getProductGamaAnd100UnitsDesing()
        if(name=="logic" && now=="cliente_16") this.getAllClientsMadridAndRepresentativeDesing()
        if(name=="logic" && now=="cliente_2.1") this.getClientAndSaleAgentFullNameDesing()
        if(name=="logic" && now=="cliente_2.2") this.getClientPayWithSalasManagerDesing()
        if(name=="logic" && now=="cliente_2.3") this.getClientNotPayWithSalasManagerDesing()
        if(name=="logic" && now=="cliente_2.4") this.getClientPayWithSalasManagerAndCityDesing()
        if(name=="logic" && now=="cliente_2.5") this.getClientNotPayWithSalasManagerAndCityDesing()
        if(name=="logic" && now=="cliente_2.6") this.getOfficesClientsInFuenlabradaDesing()
        if(name=="logic" && now=="cliente_2.7") this.getListClientsAndEmployeesWithOfficeDesing()
    }
}