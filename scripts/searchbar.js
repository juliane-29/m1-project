const searchBarPlant = document.querySelector("#searchBarForPlants");

searchBarPlant.addEventListener("keyup", (element) => {
  console.log(element);
  const query = element.target.value; // for example PALM
  return query; //return PALM as a query to use to fetch data accordingly
});


async function getFirstData() {
  const plantsList = document.querySelector(".plants-list");

  try {
    const response = await fetch(`${apiUrl}plants/search?token=${key}&q=palm`);
    console.log("response", response);

    const dataAPI = await response.json();
    const plantsData = dataAPI.data;

    plantsData.forEach((plant) => {
      const name = plant.common_name;
      console.log(name);
      const familyName = plant.family_common_name;
      console.log(familyName);
    });
    console.log("data", dataAPI);
  } catch (err) {
    console.log(err);
  }
}
// calling that asynch function
getFirstData();
