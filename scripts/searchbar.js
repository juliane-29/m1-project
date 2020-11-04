//accessing searchBar
const searchBarPlant = document.querySelector("#searchBarForPlants");
// add Event to Search Bar 
searchBarPlant.addEventListener("keyup", (element) => {
  console.log(element);
  console.log(element.target.value);
  const query = element.target.value; // for example PALM --> user's query
  ; //return PALM as a query to use to fetch data accordingly
  getDataQuery(query);
}
);


async function getDataQuery (query) {
const displayResults = document.querySelector("#searchResults");

  try {
    displayResults.innerHTML="";

    const response = await fetch(`${apiUrl}plants/search?token=${key}&q=${query}`);
    console.log("response", response);

    const dataAPI = await response.json();
    const plantsData = dataAPI.data;

    plantsData.forEach((plant) => {
      // create a variable create div and create an element
      const createDiv = document.createElement("div");
      createDiv.className = "plant-container";
      if (plant.image_url === null) {
        return createDiv.innerHTML='';
    }else {

      createDiv.innerHTML = `<img height="200px" class="plant-image" src="${plant.image_url}"/><h3>${plant.common_name}<h3/><p>Family name: ${plant.family_common_name}<p/>`;
      displayResults.appendChild(createDiv);
    }
    });
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
getDataQuery();
