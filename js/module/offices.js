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

/************************** */

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