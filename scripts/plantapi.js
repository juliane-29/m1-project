// Fetching the data from the plant API 
// https://trefle.io/ --> for free

fetch('https://trefle.io/api/v1/plants?token=e7uunFEDmiERGjDUgJPrn-Dg18cSfwV5Y8YX_h4tiZA')
.then((response) => {
    console.log("response", response)
    const pr = response.json();
    return pr; 
    })
.then((data) => {
    console.log("data",data)
    })
.catch((error) => {
    console.log("ERROR", error);
})