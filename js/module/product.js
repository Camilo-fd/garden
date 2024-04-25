// 15. Devuelve un listado con todos los productos que pertenecen a la gama `Ornamentales` y que tienen más de `100` unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
export const getAll = async() =>{
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


export const getAll1 = async() =>{
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


