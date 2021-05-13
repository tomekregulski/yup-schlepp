let unitsObject = window.sessionStorage.getItem("units");
console.log(unitsObject);
// function getQuery() {
//   // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//   console.log(document.location.pathname);
//   var queryString = document.location.search.split("?");
//   console.log(queryString);
//   var apiQuery = `api/units/?${queryString[1]}`;
//   console.log(apiQuery);
//   if (document.location.pathname.includes("units")) {
//     console.log("units");
//     fetchUnits(apiQuery);
//   }
// }

// const fetchMgmt = async (url) => {
//   let management = [];

//   let response = await fetch(url);

//   if (response.ok) {
//     let json = await response.json();
//     for (var i = 0; i < json.length; i++) {
//       management.push(json[i]);
//     }
//     renderMgmtResults(management);
//   } else {
//     alert(response.statusText);
//   }
// };

// const fetchBuildings = async (url) => {
//   let buildings = [];

//   let response = await fetch(url);

//   if (response.ok) {
//     let json = await response.json();
//     for (var i = 0; i < json.length; i++) {
//       buildings.push(json[i]);
//     }
//     renderBuildingResults(buildings);
//   } else {
//     alert(response.statusText);
//   }
// };

// const fetchUnits = (apiQuery) => {
//   fetch(apiQuery).then(async (response) => {
//     try {
//       const data = await response.json();
//       console.log("response data", data);
//     } catch (error) {
//       console.log("Error happened here");
//       console.error(error);
//     }
//   });
// };

// const fetchUnits = async (apiQuery) => {
//   let units = [];
//   let response = await fetch(apiQuery);

//   if (response.ok) {
//     let json = await response.json();
//     console.log(json);
//     for (var i = 0; i < json.length; i++) {
//       units.push(json[i]);
//     }
//     console.log(units);
//     renderUnitResults(units);
//   } else {
//     alert(response.statusText);
//   }
// };

// const renderMgmtResults = (management) => {
//   console.log("rendering management...");
//   console.log(management);
//   clearSearchResults();
//   let target = document.getElementById("render-test");
//   for (var i = 0; i < management.length; i++) {
//     container = document.createElement("div");
//     container.setAttribute("class", "result-container");
//     mgmtName = document.createElement("a");
//     mgmtName.setAttribute("href", `/managements/${management[i].id}`);
//     mgmtName.textContent = management[i].management_name;
//     mgmtBuildings = document.createElement("p");
//     mgmtBuildings.textContent = `Buildings: ${management[i].buildings.length}`;
//     container.appendChild(mgmtName);
//     container.appendChild(mgmtBuildings);
//     target.appendChild(container);
//   }
// };

// const renderBuildingResults = (buildings) => {
//   console.log("rendering buildings...");
//   console.log(buildings);
//   clearSearchResults();
//   let target = document.getElementById("render-test");
//   if (buildings.length == 0) {
//     console.log("no match");
//     container = document.createElement("div");
//     container.setAttribute("class", "result-container");
//     noResults = document.createElement("p");
//     noResults.setAttribute("class", "text-center");
//     noResults.textContent =
//       "Sorry! There are currently no entries in the database that match all of those parameters - please try something else";
//     container.appendChild(noResults);
//     target.appendChild(container);
//   }
//   for (var i = 0; i < buildings.length; i++) {
//     container = document.createElement("div");
//     container.setAttribute("class", "result-container");
//     address = document.createElement("a");
//     address.setAttribute("href", `/buildings/${buildings[i].id}`);
//     address.textContent = buildings[i].street_address;
//     city = document.createElement("p");
//     city.textContent = `${buildings[i].city}, NY - ${buildings[i].neighborhood}`;
//     units = document.createElement("p");
//     units.textContent = `Available Units: ${buildings[i].units.length}`;
//     container.appendChild(address);
//     container.appendChild(city);
//     container.appendChild(units);
//     target.appendChild(container);
//   }
//   toggleBuildings();
// };

// const renderUnitResults = (units) => {
//   console.log(units, "units");
//   clearSearchResults();
//   let target = document.getElementById("render-test");
//   if (units.length == 0) {
//     console.log("no match");
//     container = document.createElement("div");
//     container.setAttribute("class", "result-container");
//     noResults = document.createElement("p");
//     noResults.setAttribute("class", "text-center");
//     noResults.textContent =
//       "Sorry! There are currently no entries in the database that match all of those parameters - please try something else";
//     container.appendChild(noResults);
//     target.appendChild(container);
//   }
//   for (var i = 0; i < units.length; i++) {
//     container = document.createElement("div");
//     container.setAttribute("class", "result-container");
//     address = document.createElement("a");
//     address.setAttribute("href", `/units/${units[i].id}`);
//     address.textContent = `#${units[i].unit_num} - ${units[i].building.street_address}`;
//     city = document.createElement("p");
//     city.textContent = `${units[i].building.city}, NY - ${units[i].building.neighborhood}`;
//     bed = document.createElement("p");
//     bed.textContent = `BR: ${units[i].legal_beds}`;
//     container.appendChild(address);
//     container.appendChild(city);
//     container.appendChild(bed);
//     target.appendChild(container);
//   }
//   toggleUnits();
// };

// getQuery();
