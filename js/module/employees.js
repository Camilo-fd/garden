export const getAllEmployeesWithBossAndCodeSever = async() => {
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email
        });
    });

    return dataUpdate;
}

/****************************************/

export const getBossFullNameAndEmail = async() => {
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let dataUpdate = {};
    data.forEach(val => {
        if(val.code_boss == null){
            dataUpdate.nombre = val.name
            dataUpdate.apellidos = `${val.lastname1} ${val.lastname2}`
            dataUpdate.email = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)[0]
        }
    })
    return dataUpdate;
}

/****************************************/

export const getAll = async() => {
    let res = await fetch("http://localhost:5502/employees?position_ne=Representante%20Ventas");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            nombre: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            position: val.position
        });
    });

    return dataUpdate;
}