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
    container.setAttribute(
      "class",
      "result-container d-flex flex-row justify-content-start align-items-center"
    );
    container.setAttribute("style", "cursor: pointer");
    container.setAttribute(
      "onClick",
      `window.location='/buildings/${newData[i].id}'`
    );
    thumbDiv = document.createElement("div");
    infoDiv = document.createElement("div");
    infoDiv.setAttribute(
      "class",
      "d-flex flex-column justify-content-between align-items-start"
    );
    thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", "/images/branding/building.png");
    thumbnail.setAttribute("height", "90px");
    thumbnail.setAttribute("class", "mr-3");
    address = document.createElement("span");
    address.textContent = newData[i].street_address;
    address.setAttribute("class", "mt-1");
    city = document.createElement("span");
    city.textContent = `${newData[i].city}, NY`;
    city.setAttribute("class", "mt-1");
    neighborhood = document.createElement("span");
    neighborhood.textContent = `${newData[i].neighborhood}`;
    neighborhood.setAttribute("class", "mt-1");
    units = document.createElement("span");
    units.textContent = `Available Units: ${newData[i].units.length}`;
    units.setAttribute("class", "mt-1");
    thumbDiv.appendChild(thumbnail);
    infoDiv.appendChild(address);
    infoDiv.appendChild(city);
    infoDiv.appendChild(neighborhood);
    infoDiv.appendChild(units);
    container.appendChild(thumbDiv);
    container.appendChild(infoDiv);
    target.appendChild(container);
  }
};

showBuildings();
