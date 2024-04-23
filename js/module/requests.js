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

export const getAll = async () => {
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
