// accessing the div on the selected plants page

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
    /*plantsData.forEach((plant) => {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = `<img src="${plant.image_url}"/>`;
      plantsList.appendChild(createDiv);
    });*/

    /*plantsData.forEach((plant) => {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = `<h2>${plant.common_name} <h2/>`;
      plantsList.appendChild(createDiv);
    });*/

    /*plantsData.forEach((plant) => {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = `<h2>${plant.family_common_name}<h2/>`;
      plantsList.appendChild(createDiv);
    });*/

    plantsData.forEach((plant) => {
      // create a variable create div and create an element 
      const createDiv = document.createElement("div");
      createDiv.className = "plant-container";
    
      createDiv.innerHTML = `<img class="plant-image" src="${plant.image_url}"/><h3>${plant.common_name}<h3/><p>${plant.family_common_name}<p/>`;
      plantsList.appendChild(createDiv);
    });

    plantsData.forEach((plant) => {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = `<img height="200" src="${plant.image_url}"/><h3>${plant.common_name}<h3/><p>${plant.family_common_name}<p/>`;
      plantsList.appendChild(createDiv);
    });





    /*  dataAPI.forEach(element => {
            const newImg = document.createElement('img')
        }); */
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
// calling that asynch function
getFirstData();
