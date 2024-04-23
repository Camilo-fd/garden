// 1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

export const getAllOfficeCodeAndCity = async () => {
    let res = await fetch("http://localhost:5504/offices");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(va1 => {
        dataUpdate.push({
            codigo: va1.code_office,
            ciudad: va1.city
        })
    })
    return dataUpdate;
}

// 2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.

export const getAllOfficesFromSpainCityAndMovil = async() => {
    let res = await fetch("http://localhost:5504/offices?country=España");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            ciudad: val.ciudad,
            telefono: val.telefono
        })
    })
    return dataUpdate;
}