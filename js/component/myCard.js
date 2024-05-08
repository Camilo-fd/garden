import { 
    getAllOfficeCodeAndCity
} from '../module/offices.js'

export class Mycard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"});
        this.shadowRoot.innerHTML = /*html*/ `
        <link rel="stylesheet" href="../css/myCard.css">
        `
    }
    
    async getAllOfficeCodeAndCityDesing() {
        let data = await getAllOfficeCodeAndCity()   
        data.forEach(val => {
            this.shadowRoot.innerHTML = /*html*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>CLIENTES</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>apellidos: </b>${val.country}</p>
                        <p><b>nombre: </b>${val.city}</p>
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
        if(name=="getAllOfficeCodeAndCity" && now=="offices_1") this.getAllOfficeCodeAndCityDesing()
    }
}