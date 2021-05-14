const searchPivot = (event) => {
  event.preventDefault();
  console.log("hello");
  clearSearchResults();
  uncheckAll();
  const category = document.getElementById("search-category").value;
  console.log(category);
  switch (category) {
    case "Management":
      console.log("mgmt");

      buildQuery(category);
      break;
    case "Building":
      console.log("Building");
      showUnitForm();
      break;
    case "Unit":
      console.log("Unit");
      showUnitForm();
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

const fetchBuildings = async (apiUrl, redirectUrl) => {
  let buildings = [];

  let response = await fetch(apiUrl);

  if (response.ok) {
    let json = await response.json();
    for (var i = 0; i < json.length; i++) {
      buildings.push(json[i]);
    }
    console.log(buildings);
    window.sessionStorage.setItem("buildings", JSON.stringify(buildings));
    document.location.assign(redirectUrl);
  } else {
    alert(response.statusText);
  }
};

const fetchUnits = async (apiUrl, redirectUrl) => {
  let units = [];

  let response = await fetch(apiUrl);

  if (response.ok) {
    let json = await response.json();
    for (var i = 0; i < json.length; i++) {
      units.push(json[i]);
    }
    console.log(units);
    window.sessionStorage.setItem("units", JSON.stringify(units));
    document.location.assign(redirectUrl);
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
    container.setAttribute(
      "class",
      "result-container d-flex flex-row justify-content-start justify-content-sm-center align-items-center"
    );
    container.setAttribute("style", "cursor: pointer");
    container.setAttribute(
      "onClick",
      `window.location='/managements/${management[i].id}'`
    );
    thumbDiv = document.createElement("div");
    infoDiv = document.createElement("div");
    infoDiv.setAttribute(
      "class",
      "d-flex flex-column justify-content-center align-items-start text-left"
    );
    thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", "/images/branding/building.png");
    thumbnail.setAttribute("height", "90px");
    thumbnail.setAttribute("class", "mr-1");
    mgmtName = document.createElement("span");
    mgmtName.textContent = `${management[i].management_name} Management`;
    mgmtBuildings = document.createElement("span");
    mgmtBuildings.setAttribute("class", "mt-1");
    mgmtBuildings.textContent = `Buildings: ${management[i].buildings.length}`;

    thumbDiv.appendChild(thumbnail);
    infoDiv.appendChild(mgmtName);
    infoDiv.appendChild(mgmtBuildings);
    container.appendChild(thumbDiv);
    container.appendChild(infoDiv);
    target.appendChild(container);
  }
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

const buildQuery = (event) => {
  // event.preventDefault();
  let category = document.getElementById("search-category").value;
  let queryArray = [];
  let url = "";
  console.log("ok");
  var checkboxes = document.getElementsByName("searchElement");
  for (var checkbox of checkboxes) {
    if (
      checkbox.checked &&
      checkbox.value !== "unit[__gte_gross_rent" &&
      checkbox.value !== "unit[__lte_gross_rent"
    ) {
      queryArray.push(checkbox.value);
    }
  }
  const minRent = document.getElementById("min_rent").value;
  const maxRent = document.getElementById("max_rent").value;
  if (minRent > 0) {
    const gte = `unit[__gte_gross_rent]=${minRent}`;
    queryArray.push(gte);
  }
  if (maxRent > 0) {
    const lte = `unit[__lte_gross_rent]=${maxRent}`;
    queryArray.push(lte);
  }
  console.log(queryArray);
  switch (category) {
    case "Management":
      console.log("mgmt");
      url = "api/managements";
      break;
    case "Building":
      console.log("Building");
      url = "/buildings";
      break;
    case "Unit":
      console.log("Unit");
      url = "/units";
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
      redirectUrl = `results${url}`;
      apiUrl = `api${url}`;
      console.log(apiUrl);
      console.log(redirectUrl);
      fetchBuildings(apiUrl, redirectUrl);
      break;
    case "Unit":
      console.log("Unit");
      redirectUrl = `results${url}`;
      apiUrl = `api${url}`;
      console.log(apiUrl);
      console.log(redirectUrl);
      fetchUnits(apiUrl, redirectUrl);
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

const uncheckAll = () => {
  document
    .getElementsByName("searchElement")
    .forEach((el) => (el.checked = false));
};

document.getElementById("category-btn").addEventListener("click", searchPivot);
document.getElementById("search-main").addEventListener("click", buildQuery);
