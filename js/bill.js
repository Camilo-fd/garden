import {getAllProductBill} from "./component/shopBillCamper.js"
let mybill = document.querySelector("#myBill");
let data = await getAllProductBill();
let row = ""
data.forEach((val,id) => {
    val.products.forEach(produc=>{
        row += `
            <tr>
                <td>${produc.descript}</td>
                <td>${produc.queantity}</td>
                <td>${produc.price}</td>
                <td>${produc.total}</td>
            </tr>
            `
    })
})
mybill.innerHTML = row