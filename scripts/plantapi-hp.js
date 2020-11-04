// maybe it's better to initiate a class 
const tagOne = document.querySelector("#tag-1")
const tagTwo = document.querySelector("#tag-2");
const tagThree = document.querySelector("#tag-3");
const tagFour = document.querySelector("#tag-4"); 

// addEventListener - for the tags
tagOne.addEventListener("click", getStrawberriesEdible); 
tagTwo.addEventListener("click", getPlantsVegetable);
tagThree.addEventListener("click", getPlantsTerm1);
tagFour.addEventListener("click", getPlantsTerm2)

const key = "e7uunFEDmiERGjDUgJPrn-Dg18cSfwV5Y8YX_h4tiZA";
//const proxy = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://trefle.io/api/v1/";
// TAG 1 //
async function getStrawberriesEdible() {
  tagOne.classList.toggle("tags-clicked");
  const plantsList = document.querySelector(".plants-list");
  try {
    plantsList.innerHTML = "";
    const response = await fetch(
      `${apiUrl}plants/search?token=${key}&q=strawberries`
    );
    console.log("response", response);

    const dataAPI = await response.json();
    const plantsData = dataAPI.data;

    plantsData.forEach((plant) => {
      const createDiv = document.createElement("div");
      if (plant.image_url === null) {
        createDiv.innerHTML = "";
      } else {
        createDiv.innerHTML = `<img height="200" src="${plant.image_url}"/><h4>${plant.common_name}<h4/><p>${plant.family_common_name}<p/>`;
        plantsList.appendChild(createDiv);
      }
    });

    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
getStrawberriesEdible();
// TAG 2 //
async function getPlantsVegetable() {
  tagTwo.classList.toggle("tags-clicked");

  const plantsList = document.querySelector(".plants-list");

  try {
    // storing the respons fetching the data
    plantsList.innerHTML = "";
    const response = await fetch(
      `${apiUrl}plants/search?token=${key}&q=vegetable`
    );
    console.log("response", response);
    // storing data in form of a json file

    const dataAPI = await response.json();
    const plantsData = dataAPI.data;

    plantsData.forEach((plant) => {
      // create a variable create div and create an element
      const createDiv = document.createElement("div");
      createDiv.className = "plant-container";
      if (plant.common_name === null) {
        createDiv.innerHTML = "";
      } else {
        createDiv.innerHTML = `<img class="plant-image" src="${plant.image_url}"/><h4>${plant.common_name}<h4/><p>${plant.family_common_name}<p/>`;
        plantsList.appendChild(createDiv);
      }
    });
    /*  dataAPI.forEach(element => {
              const newImg = document.createElement('img')
          }); */
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
getPlantsVegetable();
// TAG 3 //
async function getPlantsTerm1() {
  tagThree.classList.toggle("tags-clicked");

  const plantsList = document.querySelector(".plants-list");

  try {
    // storing the respons fetching the data
    plantsList.innerHTML = "";

    const response = await fetch(
      `${apiUrl}plants/search?token=${key}&q=coconut`
    );
    console.log("response", response);
    // storing data in form of a json file

    const dataAPI = await response.json();
    const plantsData = dataAPI.data;
    plantsData.forEach((plant) => {
      const createDiv = document.createElement("div");
      createDiv.className = "plant-container";
      if (plant.image_url === null) {
        return (createDiv.innerHTML = "");
      } else {
        createDiv.innerHTML = `<img class="plant-image" src="${plant.image_url}"/><h4>${plant.common_name}<h4/><p>${plant.family_common_name}<p/>`;
        plantsList.appendChild(createDiv);
      }
    });
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
getPlantsTerm1();
// TAG 4 //
async function getPlantsTerm2() {
  tagFour.classList.toggle("tags-clicked");

  const plantsList = document.querySelector(".plants-list");

  try {
    // storing the respons fetching the data
    plantsList.innerHTML = "";

    const response = await fetch(
      `${apiUrl}plants/search?token=${key}&filter[common_name]=beach%20strawberry`
    );
    console.log("response", response);
    // storing data in form of a json file

    const dataAPI = await response.json();
    const plantsData = dataAPI.data;

    plantsData.forEach((plant) => {
      // create a variable create div and create an element
      const createDiv = document.createElement("div");
      createDiv.className = "plant-container";

      createDiv.innerHTML = `<img class="plant-image" src="${plant.image_url}"/><h4>${plant.common_name}<h4/><p>${plant.family_common_name}<p/>`;
      plantsList.appendChild(createDiv);
    });

    plantsData.forEach((plant) => {
      const createDiv = document.createElement("div");
      createDiv.innerHTML = `<img height="200" src="${plant.image_url}"/><h4>${plant.common_name}<h4/><p>${plant.family_common_name}<p/>`;
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
getPlantsTerm2();
