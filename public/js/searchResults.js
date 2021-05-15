// let unitsObject = window.sessionStorage.getItem("units");
// console.log(unitsObject);
const showUnits = () => {
  let data = sessionStorage.getItem("units");
  newData = JSON.parse(data);
  console.log(newData);
  renderUnitResults(newData);
};

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

// SyntaxError: Unexpected token < in JSON at position 0

// const fetchUnits = async (apiQuery) => {
//   let data = sessionStorage.getItem('key');
//   let units = [];
//   let response = await fetch(apiQuery);

//   if (response.ok) {
//     let json = await JSON.stringify(response);
//     console.log(json);
//     // for (var i = 0; i < json.length; i++) {
//     //   units.push(json[i]);
//     // }
//     // console.log(units);
//     // renderUnitResults(units);
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

const renderUnitResults = (newData) => {
  //   clearSearchResults();
  let target = document.getElementById("render-test");
  if (newData.length == 0) {
    console.log("no match");
    container = document.createElement("div");
    container.setAttribute("class", "result-container");
    noResults = document.createElement("p");
    noResults.setAttribute("class", "text-center");
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
      "result-container d-flex flex-row justify-content-start align-items-center"
    );
    container.setAttribute(
      "class",
      "result-container d-flex flex-row justify-content-start align-items-center"
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
    address.setAttribute("class", "mt-3");
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
