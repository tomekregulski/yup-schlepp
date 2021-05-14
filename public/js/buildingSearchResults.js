const showBuildings = () => {
  let data = sessionStorage.getItem("buildings");
  newData = JSON.parse(data);
  console.log(newData);
  renderBuildingResults(newData);
};

const renderBuildingResults = (newData) => {
  console.log("rendering buildings...");
  console.log(newData);
  let target = document.getElementById("render-test");
  if (newData.length == 0) {
    console.log("no match");
    container = document.createElement("div");
    // container.setAttribute("class", "result-container");
    noResults = document.createElement("p");
    noResults.setAttribute("class", "text-center");
    noResults.textContent =
      "Sorry! There are currently no entries in the database that match all of those parameters - please try something else";
    container.appendChild(noResults);
    target.appendChild(container);
  }
  for (var i = 0; i < newData.length; i++) {
    container = document.createElement("div");
    // container.setAttribute("class", "result-container");
    address = document.createElement("a");
    address.setAttribute("href", `/buildings/${newData[i].id}`);
    address.textContent = newData[i].street_address;
    city = document.createElement("p");
    city.textContent = `${newData[i].city}, NY - ${newData[i].neighborhood}`;
    units = document.createElement("p");
    units.textContent = `Available Units: ${newData[i].units.length}`;
    container.appendChild(address);
    container.appendChild(city);
    container.appendChild(units);
    target.appendChild(container);
  }
};

showBuildings();
