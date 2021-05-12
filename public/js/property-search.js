const searchPivot = (event) => {
  event.preventDefault();
  console.log("hello");
  const category = document.getElementById("search-category").value;
  console.log(category);
  switch (category) {
    case "Management":
      console.log("mgmt");
      hideUnitForm();
      hideBuildingForm();
      buildQuery(category);
      break;
    case "Building":
      console.log("Building");
      hideUnitForm();
      showBuildingForm();
      break;
    case "Unit":
      console.log("Unit");
      showUnitForm();
      showBuildingForm();
      break;
  }
};

// Retrieve Management Companies based on search query
const fetchMgmt = async (url) => {
  let management = [];

  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    for (var i = 0; i < json.length; i++) {
      management.push(json[i]);
    }
    renderMgmtResults(management);
  } else {
    alert(response.statusText);
  }
};

const fetchBuildings = async (url) => {
  let buildings = [];

  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    for (var i = 0; i < json.length; i++) {
      buildings.push(json[i]);
    }
    renderBuildingResults(buildings);
  } else {
    alert(response.statusText);
  }
};

const fetchUnits = async (url) => {
  let units = [];

  let response = await fetch(url);

  if (response.ok) {
    let json = await response.json();
    for (var i = 0; i < json.length; i++) {
      units.push(json[i]);
    }
    renderUnitResults(units);
  } else {
    alert(response.statusText);
  }
};

const renderMgmtResults = (management) => {
  console.log("rendering management...");
  console.log(management);
  clearSearchResults();
  let target = document.getElementById("render-test");
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

const renderBuildingResults = (buildings) => {
  console.log("rendering buildings...");
  console.log(buildings);
  clearSearchResults();
  let target = document.getElementById("render-test");
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

const renderUnitResults = (units) => {
  console.log(units);
  clearSearchResults();
  let target = document.getElementById("render-test");
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
  toggleUnits();
};

const toggleUnits = () => {
  console.log("unit info");

  toggleBuildings();

  let units = document.getElementById("unit_hide");
  if (units.style.display === "none") {
    units.style.display = "block";
  } else {
    units.style.display = "none";
  }
};

const toggleBuildings = () => {
  console.log("building info");

  let buildings = document.getElementById("building_hide");
  if (buildings.style.display === "none") {
    buildings.style.display = "block";
  } else {
    buildings.style.display = "none";
  }
};

const showBuildingForm = () => {
  let buildings = document.getElementById("building_hide");

  if (buildings.style.display === "none") {
    buildings.style.display = "block";
  }
};

const showUnitForm = () => {
  let units = document.getElementById("unit_hide");

  if (units.style.display === "none") {
    units.style.display = "block";
  }
};

const hideBuildingForm = () => {
  let buildings = document.getElementById("building_hide");

  if (buildings.style.display === "block") {
    buildings.style.display = "none";
  }
};

const hideUnitForm = () => {
  let units = document.getElementById("unit_hide");

  if (units.style.display === "block") {
    units.style.display = "none";
  }
};

const buildQuery = () => {
  let category = document.getElementById("search-category").value;
  let queryArray = [];
  let url = "";
  var checkboxes = document.getElementsByName("seachElement");
  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      queryArray.push(checkbox.value);
    }
  }
  console.log(queryArray);
  switch (category) {
    case "Management":
      console.log("mgmt");
      url = "api/managements";
      break;
    case "Building":
      console.log("Building");
      url = "/api/buildings";
      break;
    case "Unit":
      console.log("Unit");
      url = "/api/units";
      break;
  }

  if (queryArray.length > 0) {
    for (var i = 0; i < queryArray.length; i++) {
      if (i === 0) {
        url = url + "/?";
      }
      if (i > 0) {
        url = url + "&";
      }
      url = url + queryArray[i];
    }
  }

  console.log(url);
  switch (category) {
    case "Management":
      console.log("mgmt");
      fetchMgmt(url);
      break;
    case "Building":
      console.log("Building");
      fetchBuildings(url);
      break;
    case "Unit":
      console.log("Unit");
      fetchUnits(url);
      break;
  }
};

const toggleSearchBtn = () => {
  const categoryBtn = document.getElementById("category-btn");
  if (categoryBtn.style.display === "none") {
    categoryBtn.style.display = "block";
  } else {
    categoryBtn.style.display = "none";
  }
};

const clearSearchResults = () => {
  let target = document.getElementById("render-test");
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
};

document.getElementById("category-btn").addEventListener("click", searchPivot);
