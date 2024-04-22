import fs from 'node:fs';
fs.readFile(import.meta.dirname + '/db/products.json', 'utf8', (err, data) => {
    let json = JSON.parse(data);
    let [producto1] = json.products;
    let {descripton:des, full_name="No existe el nombre"} = producto1;
    console.log(full_name);
})