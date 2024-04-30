// 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.

// OPCION 1.

export const getProductGamaAnd100Units = async() =>{
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales");
    let data = await res.json();
    let dataUpdate = data.filter( val => (val.stock > 100))
    .map(
        val => {
            return {
                price_sale: val.price_sale,
                name: val.name
                // valor: val.price_sale,
                // name: val.name
            }
        })
        dataUpdate.sort((a,b) => b.price_sale - a.price_sale)
    return dataUpdate
}

//OPCION 2.

export const getProductGamaAnd100Units2 = async() =>{
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales");
    let data = await res.json();
    let dataUpdate=[];
    data.forEach(val=>{
        if (val.stock>100 ){
            dataUpdate.push({
               ...val
            })
        }
    })
        dataUpdate.sort((a,b) => b.price_sale - a.price_sale)
    return dataUpdate
}

// CONSULTAs PARTE 2.

export const getAllProducts = async() => {
    let res = await fetch("http://localhost:5506/products");
    let data = await res.json();
    return data;
}
