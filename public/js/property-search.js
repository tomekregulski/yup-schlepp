console.log("hello properties");

const searchPivot = (event) => {
  event.preventDefault();
  console.log("hello");
  // let target = document.getElementById("render-test");
  // while (target.firstChild) {
  //   target.removeChild(target.firstChild);
  // }
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
      // fetchUnits();
      showUnits();
      break;
  }
};

// const fetchMgmt = async () => {
//   const url = "http://127.0.0.1:8080/api/managements";

//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         management.push(data[i]);
//       }
//       renderMgmtResults();
//     });
// };

// Retrieve Management Companies based on search query
const fetchMgmt = async () => {
  let management = [];

  let url = "http://127.0.0.1:8080/api/managements/?id=1";

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

// const fetchBuildings = async () => {
//   const url = "http://127.0.0.1:8080/api/buildings/";

//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       for (var i = 0; i < data.length; i++) {
//         buildings.push(data[i]);
//       }
//       renderBuildingResults();
//     });
// };

const fetchBuildings = async () => {
  let buildings = [];
  let url = "http://127.0.0.1:8080/api/buildings/?id=1";

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

// const fetchUnits = async () => {
//   const url =
//     "http://127.0.0.1:8080/api/units/?legal_beds=4&status=active&full_bath=2";

//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         units.push(data[i]);
//       }
//       renderUnitResults();
//     });
// };

const fetchUnits = async (url) => {
  let units = [];

  // let url = "/api/units/?legal_beds=4&status=active&full_bath=2";

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
};

const showUnits = () => {
  // event.preventDefault();
  console.log("unit info");
  let rooms = document.getElementById("unit_hide");
  // rooms.setAttribute("display", "block");
  if (rooms.style.display === "none") {
    rooms.style.display = "block";
  } else {
    rooms.style.display = "none";
  }
};

const unitQuery = () => {
  let query = [];
  let url = "/api/units/?";
  let br1 = document.getElementById("BR1");
  console.log(br1.checked);
  let br2 = document.getElementById("BR2");
  console.log(br2.checked);
  let br3 = document.getElementById("BR3");
  console.log(br3.checked);
  let br4 = document.getElementById("BR4");
  console.log(br4.checked);
  if (br1.checked) {
    query.push("legal_beds=1");
  }
  if (br2.checked) {
    query.push("legal_beds=2");
  }
  console.log(query);
  for (var i = 0; i < query.length; i++) {
    if (i > 0) {
      url = url + "&";
    }
    url = url + query[i];
  }
  console.log(url);
  fetchUnits(url);
};

document.getElementById("category-btn").addEventListener("click", searchPivot);
document.getElementById("search-units").addEventListener("click", unitQuery);
