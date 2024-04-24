// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

// export const getAll = async() => {
//     let res = await fetch("http://localhost:5508/requests");
//     let data = await res.json();
//     let estadosUnicos = new Set();
//     data.forEach(val => {
//         estadosUnicos.add(val.status);
//     });
//     let combi = [...estadosUnicos].map(estado => ({ estado }))

//     return combi;
// }

//     let dataUpdate = [];
//     data.forEach(val => {
//         dataUpdate.push({
//             estado: val.status
//         })
//     })
//     return dataUpdate;
// }

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

export const getAll = async() => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if (val.date_delivery == null) {
            dataUpdate.push(
                val.code_request,
                val.code_client,
                val.date_wait,
                val.date_delivery
            )
            } else {
                let delivery = val.date_delivery.split('-')[2];
                let wait = val.date_wait.split('-')[2];
                if ( Number( wait) - Number(delivery) >= 2){
                    dataUpdate.push({
                        pedido: val.code_request,
                        codigo_cliente: val.code_client,
                        tiempo_espera: val.date_wait,
                        tiempo_llegada: val.date_delivery

                    }
                    )
                }
            }
    })
    return dataUpdate
}

// OPCION 2.

// export const getAll = async() => {
//     let res = await fetch("http://localhost:5508/requests");
//     let data = await res.json();
//     let dataUpdate = data.filter(val => (val.date_wait > val.date_delivery))
//     .map(val => {
//          return {
//              pedido: val.code_request,
//              codigo_cliente: val.code_client,
//              tiempo_espera: val.date_wait,
//              tiempo_llegada: val.date_delivery
//          }

//     });

//     return dataUpdate
// }