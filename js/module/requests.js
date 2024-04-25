// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllStatusOrder = async () => {
    const res = await fetch("http://localhost:5508/requests");
    const data = await res.json();

    let dataUpdate = [];
    for (let item of data) {
        if (!dataUpdate.includes(item.status)) {
            dataUpdate.push(item.status);
        }
    }

    let combi = dataUpdate.map(estado => ({ estado }));
    return combi;
}

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getOrdersClientsExpectedDateAndDelivery = async() => {
    let res = await fetch("http://localhost:5508/requests?date_wait_neq_date_delivery")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            pedido: val.code_request,
            cliente: val.code_client,
            espera: val.date_wait,
            retraso: val.date_delivery
        })
    })
    return dataUpdate
}

// 10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

// OPCION 1.

export const getOrdersClientsExpectedDateAndDeliveryBeforeDate = async() => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if (val.date_delivery == null) {
            dataUpdate.push({
                pedido: val.code_request,
                codigo_cliente: val.code_client,
                tiempo_espera: val.date_wait,
                tiempo_llegada: val.date_delivery
            });
            } else {
                let delivery = val.date_delivery.split('-')[2];
                let wait = val.date_wait.split('-')[2];
                let resta = delivery - wait
                if (resta != 2){
                    dataUpdate.push({
                        pedido: val.code_request,
                        codigo_cliente: val.code_client,
                        tiempo_espera: val.date_wait,
                        tiempo_llegada: val.date_delivery
                    })
                }
            }
    })
    return dataUpdate
}

// OPCION 2.

export const getAll = async() => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = data.filter(val => (val.date_wait > val.date_delivery))
    .map(val => {
         return {
             pedido: val.code_request,
             codigo_cliente: val.code_client,
             tiempo_espera: val.date_wait,
             tiempo_llegada: val.date_delivery
         }

    });

    return dataUpdate
}

// 11. Devuelve un listado de todos los pedidos que fueron **rechazados** en `2009`.

export const getrejectedRequestsIn2009 = async()=>{
    let res = await fetch("http://localhost:5508/requests?status=Rechazado")
    let data = await res.json();
    let dataUpdated = data.filter (val => (val.date_request != null && val.date_request[3] === "9"))
    .map(val => {
        return {
            codigo_pedido: val.code_request, 
            codigo_cliente:  val.code_client, 
            tiempo_espera: val.date_wait, 
            fecha_llegada: val.date_delivery,
            estado: val.status
        }
    })
    return dataUpdated;
    }

// 12. Devuelve un listado de todos los pedidos que han sido **entregados** en el mes de enero de cualquier año.

export const getDeliveryRequest = async() => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdated = data.filter (val => (val.date_delivery != null && val.date_delivery[5] === "0" && val.date_delivery[6] === "1"))
    .map(val => {
        return {
            codigo_pedido: val.code_request, 
            codigo_cliente: val.code_client, 
            tiempo_espera: val.date_wait, 
            fecha_llegada: val.date_delivery,
            estado: val.status
        }
    })
    return dataUpdated;
}