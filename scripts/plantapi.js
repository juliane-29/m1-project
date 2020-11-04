// JS for the selected plant page
// Fetching data from an API about plants -> trefle.io
const key = "e7uunFEDmiERGjDUgJPrn-Dg18cSfwV5Y8YX_h4tiZA";
//const proxy = "https://cors-anywhere.herokuapp.com/";
// api url
const apiUrl = "https://trefle.io/api/v1/";
// definining async function
async function getFirstData() {
  const plantsList = document.querySelector(".plants-list");

  try {
    // storing the respons fetching the data
    const response = await fetch(
      `${apiUrl}plants/search?token=${key}&q=coconut`
    );
    console.log("response", response);
    // storing data in form of a json file

    const dataAPI = await response.json();
    const plantsData = dataAPI.data;

    plantsData.forEach((plant) => {
      // create a variable create div and create an element
      const createDiv = document.createElement("div");
      createDiv.className = "plant-container";
      if (plant.image_url === null) {
        return createDiv.innerHTML='';
    }else {

      createDiv.innerHTML = `<img class="plant-image" src="${plant.image_url}"/><h3>${plant.common_name}<h3/><p>Family name: ${plant.family_common_name}<p/><p>Discovery year: ${plant.year}<p/>`;
      plantsList.appendChild(createDiv);
    }
    });

    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
// calling that asynch function
getFirstData();
