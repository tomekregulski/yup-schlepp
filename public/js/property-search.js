console.log("hello properties");
let buildings = [];
let management = [];
let units = [];

const searchPivot = (event) => {
  event.preventDefault();
  console.log("hello");
  const category = document.getElementById("search-category").value;
  console.log(category);
  switch (category) {
    case "Management":
      console.log("mgmt");
      fetchMgmt();
      break;
    case "Building":
      console.log("Building");
      fetchBuildings();
      break;
    case "Unit":
      console.log("Unit");
      fetchUnits();
      break;
  }
};

const fetchMgmt = async () => {
  const url = "http://127.0.0.1:8080/api/managements";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        management.push(data[i]);
      }
      renderMgmtResults();
    });
};

const fetchBuildings = async () => {
  const url = "http://127.0.0.1:8080/api/buildings/";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        buildings.push(data[i]);
      }
      renderBuildingResults();
    });
};

const fetchUnits = async () => {
  const url = "http://127.0.0.1:8080/api/units";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        units.push(data[i]);
      }
      renderUnitResults();
    });
};

const renderMgmtResults = () => {
  console.log("rendering management...");
  console.log(management);
  target = document.getElementById("render-test");
  for (var i = 0; i < management.length; i++) {
    container = document.createElement("div");
    container.setAttribute("class", "result-container");
    mgmtName = document.createElement("a");
    mgmtName.setAttribute("href", `/managements/${management[i].id}`);
    mgmtName.textContent = management[i].management_name;
    mgmtBuildings = document.createElement("p");
    mgmtBuildings.textContent = `Buildings: ${management[i].buildings.length}`;
    container.appendChild(mgmtName);
    container.appendChild(mgmtBuildings);
    target.appendChild(container);
  }
};

const renderBuildingResults = () => {
  console.log("rendering buildings...");
  console.log(buildings);
  target = document.getElementById("render-test");
  for (var i = 0; i < buildings.length; i++) {
    container = document.createElement("div");
    container.setAttribute("class", "result-container");
    address = document.createElement("a");
    address.setAttribute("href", `/buildings/${buildings[i].id}`);
    address.textContent = buildings[i].street_address;
    city = document.createElement("p");
    city.textContent = `${buildings[i].city}, NY - ${buildings[i].neighborhood}`;
    units = document.createElement("p");
    units.textContent = `Available Units: ${buildings[i].units.length}`;
    container.appendChild(address);
    container.appendChild(city);
    container.appendChild(units);
    target.appendChild(container);
  }
};

const renderUnitResults = () => {
  console.log(units);
  target = document.getElementById("render-test");
  for (var i = 0; i < units.length; i++) {
    container = document.createElement("div");
    container.setAttribute("class", "result-container");
    address = document.createElement("a");
    address.setAttribute("href", `/units/${units[i].id}`);
    address.textContent = `#${units[i].unit_num} - ${units[i].building.street_address}`;
    city = document.createElement("p");
    city.textContent = `${units[i].building.city}, NY - ${units[i].building.neighborhood}`;
    bed = document.createElement("p");
    bed.textContent = `BR: ${units[i].legal_beds}`;
    container.appendChild(address);
    container.appendChild(city);
    container.appendChild(bed);
    target.appendChild(container);
  }
};

document.getElementById("search-btn").addEventListener("click", searchPivot);
