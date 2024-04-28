// 8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

export const getAllPay2008 = async() => {
    let res = await fetch("http://localhost:5505/payments?data_payment");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if(val.date_payment.split('-')[0]==="2008"){
            dataUpdate.push(
                val.code_client
            )
        }
    })
    dataUpdate = [... new Set(dataUpdate)]

    return dataUpdate;
}

// 13. Devuelve un listado con todos los pagos que se realizaron en el año `2008` mediante `Paypal`. Ordene el resultado de mayor a menor.

export const getAllPayOptions = async() => {
    let res = await fetch("http://localhost:5505/payments?payment=PayPal");
    let data = await res.json();
    let dataUpdate = data.filter(val => (val.date_payment.split('-')[0]) === "2008").map(
        val => {
            return {
                codigo_cliente: val.code_client,
                fecha_pago: val.date_payment,
                valor: val.total
            }
        }
    )

    return dataUpdate.sort();
}

// 14. Devuelve un listado con todas las formas de pago que aparecen en la tabla `pago`. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPayOptionsPay = async() => {
    let res = await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push(
            val.payment
        )
    })
    dataUpdate = [... new Set(dataUpdate)]

    return dataUpdate;
}

// CONSULTAS PARTE 2.

export const getAllPayments = async() => {
    let res = await fetch(`http://localhost:5505/payments`);
    let data = await res.json();
    return data
}