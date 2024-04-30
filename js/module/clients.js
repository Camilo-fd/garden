import{ getEmployeesSaleAgent, getEmployeesCodeOffice } from './employees.js'
import{ getAllPayments } from './payments.js'
import{ getAllOffices } from './offices.js'
import { getAllRequests } from './requests.js'
import { getAllProducts } from './product.js'
import { getAllRequestDetails } from './request_details.js'

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

// 5. Devuelve el nombre de los clientes que **no** hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getClientNotPayWithSalasManagerAndCity = async () => {
    let dataClients = await getClientNotPayWithSalasManager();
    let dataEmployees = await getEmployeesCodeOffice();
    let dataOffices = await getAllOffices();
    let dataUpdated = new Set();

    for (let cliente of dataClients) {
        for (let employee of dataEmployees) {
            for (let office of dataOffices) {
                if (employee.code_office === office.code_office && employee.code_employee === cliente.code_employee_sales_manager) {
                    dataUpdated.add(JSON.stringify({
                        nombre_cliente: cliente.nombre_cliente,
                        nombre_manager: cliente.nombre_empleado,
                        ciudad: office.city
                    }));
                }
            }
        }
    }
    dataUpdated = Array.from(dataUpdated).map( val => JSON.parse(val))
    return dataUpdated;
};

// 6. Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.

export const getOfficesClientsInFuenlabrada = async() => {
    let resClients = await fetch("http://localhost:5501/clients?city=Fuenlabrada");
    let dataClients = await resClients.json();
    let dataEmployees = await getEmployeesCodeOffice();
    let dataOffices = await getAllOffices();
    let dataUpdate = []

    for (let clientes of dataClients) {
        for (let employees of dataEmployees) {
            if (clientes.code_employee_sales_manager === employees.employee_code){
                for (let offices of dataOffices) {
                    if(employees.code_office === offices.code_office) {
                        dataUpdate.push({
                            codigo: clientes.code_employee_sales_manager,
                            direccion: offices.address1 
                        })
                    }
                }
            }
        }
    }

    return dataUpdate
}


// 7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.

export const getListClientsAndEmployeesWithOffice = async() => {
    let resClients = await fetch("http://localhost:5501/clients");
    let dataClients = await resClients.json();
    let dataEmployees = await getEmployeesCodeOffice();
    let dataOffices = await getAllOffices();
    let dataUpdate = [];

    for (let clientes of dataClients) {
        for (let employee of dataEmployees) {
            if (clientes.client_code === employee.employee_code) {
                for (let offices of dataOffices) {
                    if (employee.code_office === offices.code_office) {
                        dataUpdate.push({
                            nombre_cliente: clientes.client_name,
                            nombre_manager: employee.name,
                            ciudad: offices.city
                        })
                    }
                }
            }
        }
    }

    return dataUpdate
}

// 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.

export const getNameClientsNotDeliveredOrder = async() => {
    let resClients = await fetch("http://localhost:5501/clients")
    let dataClients = await resClients.json();
    let dataRequests = await getAllRequests();
    let dataUpdate = new Set();

    for (let cliente of dataClients) {
        for (let request of dataRequests) {
            if (cliente.client_code === request.code_client) {
                if (request.date_delivery === null || request.date_delivery < request.date_wait) {
                    dataUpdate.add(JSON.stringify({
                        nombre_cliente: cliente.client_name
                    }));
                };
            };
        };
    };
    dataUpdate = Array.from(dataUpdate).map( val => JSON.parse(val))
    return dataUpdate
}

// 11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.

export const getGamasProductos = async() => {
    let resClients = await fetch("http://localhost:5501/clients")
    let dataClients = await resClients.json();
    let dataRequests = await getAllRequests();
    let dataRequestDatils = await getAllRequestDetails();
    let dataProducts = await getAllProducts();
    let dataUpdate = new Set();

    for (let cliente of dataClients) {
        for (let request of dataRequests) {
            if (cliente.client_code === request.code_client) {
                for (let request_details of dataRequestDatils) {
                    if (request.code_request === request_details.code_request) {
                        for (let product of dataProducts) {
                            if (request_details.product_code === product.code_product) {
                                dataUpdate.add(JSON.stringify({
                                    nombre_cliente: cliente.client_name,
                                    gama_producto: product.gama
                                }))
                            }
                        }
                    }
                }
            }
        }
    }
    dataUpdate = Array.from(dataUpdate).map( val => JSON.parse(val))
    return dataUpdate
}