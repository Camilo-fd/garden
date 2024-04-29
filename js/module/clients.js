import{ getEmployeesSaleAgent, getEmployeesCodeOffice } from './employees.js'
import{ getAllPayments } from './payments.js'
import{ getAllOffices } from './offices.js'

// 6. Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllClientsSpain = async() => {
    let res = await fetch("http://localhost:5501/clients?country=Spain");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.contact_name
        })
    })
    return dataUpdate
}

// 16. Devuelve un listado con todos los clientes que sean de la ciudad de `Madrid` y cuyo representante de ventas tenga el código de empleado `11` o `30`.

export const getAllClientsMadridAndRepresentative = async() => {
    let res = await fetch("http://localhost:5501/clients?city=Madrid");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.code_employee_sales_manager === 11 || val.code_employee_sales_manager === 30){
            dataUpdate.push({
                nombre: val.contact_name
            })
            // dataUpdate.push(val.contact_name)
        }
    })

    return dataUpdate
}

// CONSULTAs PARTE 2.

// 1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

export const getClientAndSaleAgentFullName = async() => {
    let resClients = await fetch("http://localhost:5501/clients")
    let dataClients = await resClients.json()
    let dataUpdated = []

    for ( let i = 0; i < dataClients.length ; i++){
        let [employees] = await getEmployeesSaleAgent(dataClients[i].code_employee_sales_manager);
        dataUpdated.push({
            nombre: dataClients[i].client_name,
            nombre_manager: `${employees.name} ${employees.lastname1} ${employees.lastname2}`
        })
    }
    return dataUpdated
}

// 2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.

export const getClientPayWithSalasManager = async() => {
    let restClients = await fetch("http://localhost:5501/clients");
    let dataClients = await restClients.json();
    let dataEmployees = await getEmployeesSaleAgent();
    let dataPayment = await getAllPayments();
    let dataUpdated =  new Set();
    
    for (let cliente of dataClients) {
        for (let employee of dataEmployees) {
            for (let payment of dataPayment){
                if(cliente.code_employee_sales_manager == employee.employee_code && cliente.client_code == payment.code_client){
                    dataUpdated.add(JSON.stringify({
                        codigo_cliente: cliente.client_code,
                        nombre_cliente: cliente.client_name,
                        codigo_empleado: cliente.code_employee_sales_manager,
                        nombre_empleado: employee.name,
                    }))
                }
            }
        }
    }

    dataUpdated = Array.from(dataUpdated).map( val => JSON.parse(val))
    return dataUpdated
}

// 3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.*

export const getClientNotPayWithSalasManager = async() => {

    let restClients = await fetch("http://localhost:5501/clients");
    let dataClients = await restClients.json();
    let dataEmployees = await getEmployeesSaleAgent();
    let dataPayment = await getAllPayments();
    let dataUpdated = [];
    
    for (let cliente of dataClients) {
        let bandera = false;
        for (let payment of dataPayment) {
            if (cliente.client_code === payment.code_client){
                bandera = true;
            }
        }
        if (!bandera) {
            for (let employee of dataEmployees) {
                if (cliente.code_employee_sales_manager === employee.employee_code) {
                    dataUpdated.push({
                        nombre_cliente: cliente.client_name,
                        codigo_empleado: cliente.code_employee_sales_manager,
                        nombre_empleado: employee.name,
                    })
                }
            }
        }
    }
    return dataUpdated
}

// 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientPayWithSalasManagerAndCity = async () => {
    let dataClients = await getClientAndSaleAgentFullName();
    let dataEmployees = await getEmployeesCodeOffice();
    let dataOffices = await getAllOffices();
    let dataUpdated = [];

    for (let cliente of dataClients) {
        for (let employee of dataEmployees) {
            for (let office of dataOffices) {
                if (employee.code_office === office.code_office && employee.code_employee === cliente.code_employee_sales_manager) {
                    dataUpdated.push({
                        nombre_cliente: cliente.nombre,
                        nombre_manager: cliente.nombre_manager,
                        ciudad: office.city
                    });
                }
            }
        }
    }
    return dataUpdated;
};