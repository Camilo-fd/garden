// 3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.

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

// 4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.

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

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

export const getBossFullNameAndEmployees = async() => {
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

// CONSULTAS PARTE 2.

// SEGUIMIENTO DE LA PARTE 1:

export const getEmployeesSaleAgent = async () => {
    let res = await fetch(`http://localhost:5502/employees?position=Representante%20Ventas`)
    let data = await res.json()
    return data
}

export const getEmployeesCodeOffice = async () => {
    let res = await fetch(`http://localhost:5502/employees`)
    let data = await res.json()
    return data
}

// 8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.

export const getListEmployeesWithBoss = async () => {
    let dataEmployees = await getEmployeesCodeOffice();
    let dataUpdate = [];

    // for (let employee of dataEmployees) {
    //     if (employee.employee_code === employee.code_boss){
    //         dataUpdate.push({
    //             nombre: employee.name,
    //             codigo_jefe: employee.code_boss,
    //             codigo_empleado: employee.employee_code
    //         })
    //     } else if (employee.code_boss !== null){
    //         dataUpdate.push({
    //             nombre: employee.name,
    //             codigo_jefe: employee.code_boss,
    //             codigo_empleado: employee.employee_code
    //         })
    //     }
    // }

    // for (let i = 0; i < dataEmployees.length; i++) {
    //     if (dataEmployees[i].code_boss === null) {
    //         dataUpdate.push({
    //             nombre: "null"
    //         })
    //     }else if (dataEmployees[i].code_boss === dataEmployees[i].employee_code){
    //         dataUpdate.push({
    //             nombre: dataEmployees[i].name,
    //             codigo_jefe: dataEmployees[i].code_boss,
    //             codigo_empleado: dataEmployees[i].employee_code
    //         })
    //     }
    // }
    
    return dataUpdate;
}