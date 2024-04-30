// CONSULTAs PARTE 2.

export const getAllRequestDetails = async() => {
    let res = await fetch("http://localhost:5507/request_details");
    let data = await res.json();
    return data;
}