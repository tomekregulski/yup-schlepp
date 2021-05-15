// let unitsObject = window.sessionStorage.getItem("units");
// console.log(unitsObject);
const showUnits = () => {
  let data = sessionStorage.getItem("units");
  newData = JSON.parse(data);
  console.log(newData);
  renderUnitResults(newData);
};
const renderUnitResults = (newData) => {
  //   clearSearchResults();
  let target = document.getElementById("render-test");
  if (newData.length == 0) {
    console.log("no match");
    container = document.createElement("div");
    container.setAttribute(
      "class",
      "result-container d-flex flex-row justify-content-center align-items-center"
    );
    noResults = document.createElement("p");
    noResults.setAttribute("style", "text-center");
    noResults.setAttribute("class", "mt-2");
    noResults.textContent =
      "Sorry! There are currently no entries in the database that match all of those parameters - please try something else";
    container.appendChild(noResults);
    target.appendChild(container);
  }
  for (var i = 0; i < newData.length; i++) {
    console.log("making results");
    container = document.createElement("div");
    container.setAttribute(
      "class",
      "result-container d-flex flex-row justify-content-start align-items-start"
    );
    container.setAttribute("style", "cursor: pointer");
    container.setAttribute(
      "onClick",
      `window.location='/units/${newData[i].id}'`
    );
    thumbDiv = document.createElement("div");
    infoDiv = document.createElement("div");
    infoDiv.setAttribute(
      "class",
      "d-flex flex-column justify-content-between align-items-start"
    );
    thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", `${newData[i].image[0]}`);
    thumbnail.setAttribute("height", "90px");
    thumbnail.setAttribute("class", "mr-4");
    address = document.createElement("a");
    address.setAttribute("href", `/units/${newData[i].id}`);
    address.textContent = `#${newData[i].unit_num} - ${newData[i].building.street_address}`;
    city = document.createElement("span");
    city.textContent = `${newData[i].building.city}, NY`;
    city.setAttribute("class", "mt-1");
    neighborhood = document.createElement("span");
    neighborhood.textContent = `${newData[i].building.neighborhood}`;
    neighborhood.setAttribute("class", "mt-1");
    bed = document.createElement("span");
    bed.setAttribute("class", "mt-1");
    bed.textContent = `Bedroms: ${newData[i].legal_beds}  |  Rent: $${newData[i].gross_rent}/mo`;
    thumbDiv.appendChild(thumbnail);
    infoDiv.appendChild(address);
    infoDiv.appendChild(neighborhood);
    infoDiv.appendChild(city);
    infoDiv.appendChild(bed);
    container.appendChild(thumbDiv);
    container.appendChild(infoDiv);
    target.appendChild(container);
  }
};

showUnits();
