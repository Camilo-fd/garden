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

// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAll = async() => {
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            estado: val.status
        })
    })
    return dataUpdate;
}