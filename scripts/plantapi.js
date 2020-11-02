// accessing the div on the selected plants page
const plantsList = document.querySelector(".plants-list");

// Fetching data from an API about plants -> trefle.io
const key = "e7uunFEDmiERGjDUgJPrn-Dg18cSfwV5Y8YX_h4tiZA"
const proxy = "https://cors-anywhere.herokuapp.com/"
const apiUrl = "https://trefle.io/api/v1/"

async function getFirstData() {
  try {
    const response = await fetch(
      `${proxy + apiUrl}plants/search?token=${key}&q=coconut`
    );
    console.log("response", response);
    const dataAPI = await response.json();
    /*  dataAPI.forEach(element => {
            const newImg = document.createElement('img')
        }); */
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
getFirstData();