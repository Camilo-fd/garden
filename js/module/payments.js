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

