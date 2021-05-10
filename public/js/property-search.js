<<<<<<< HEAD
console.log('hello properties');
let buildings = [];
let management = [];
let units = [];

const searchPivot = (event) => {
  event.preventDefault();
  console.log('hello');
  const category = document.getElementById('search-category').value;
=======
console.log("hello properties");

const searchPivot = (event) => {
  event.preventDefault();
  console.log("hello");
  let target = document.getElementById("render-test");
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
  const category = document.getElementById("search-category").value;
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4
  console.log(category);
  switch (category) {
    case 'Management':
      console.log('mgmt');
      fetchMgmt();
      break;
    case 'Building':
      console.log('Building');
      fetchBuildings();
      break;
    case 'Unit':
      console.log('Unit');
      fetchUnits();
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
<<<<<<< HEAD
  const url = 'http://127.0.0.1:8080/api/managements';

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
=======
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
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4
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
<<<<<<< HEAD
  const url = 'http://127.0.0.1:8080/api/buildings/';

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
=======
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
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4
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

const fetchUnits = async () => {
<<<<<<< HEAD
  const url = 'http://127.0.0.1:8080/api/units';

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
  console.log('rendering management...');
  console.log(management);
  target = document.getElementById('render-test');
=======
  let units = [];

  let url =
    "http://127.0.0.1:8080/api/units/?legal_beds=4&status=active&full_bath=2";

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
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4
  for (var i = 0; i < management.length; i++) {
    container = document.createElement('div');
    container.setAttribute('class', 'result-container');
    mgmtName = document.createElement('a');
    mgmtName.setAttribute('href', `/managements/${management[i].id}`);
    mgmtName.textContent = management[i].management_name;
    mgmtBuildings = document.createElement('p');
    mgmtBuildings.textContent = `Buildings: ${management[i].buildings.length}`;
    container.appendChild(mgmtName);
    container.appendChild(mgmtBuildings);
    target.appendChild(container);
  }
};

<<<<<<< HEAD
const renderBuildingResults = () => {
  console.log('rendering buildings...');
  console.log(buildings);
  target = document.getElementById('render-test');
=======
const renderBuildingResults = (buildings) => {
  console.log("rendering buildings...");
  console.log(buildings);
  let target = document.getElementById("render-test");
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4
  for (var i = 0; i < buildings.length; i++) {
    container = document.createElement('div');
    container.setAttribute('class', 'result-container');
    address = document.createElement('a');
    address.setAttribute('href', `/buildings/${buildings[i].id}`);
    address.textContent = buildings[i].street_address;
    city = document.createElement('p');
    city.textContent = `${buildings[i].city}, NY - ${buildings[i].neighborhood}`;
    units = document.createElement('p');
    units.textContent = `Available Units: ${buildings[i].units.length}`;
    container.appendChild(address);
    container.appendChild(city);
    container.appendChild(units);
    target.appendChild(container);
  }
};

const renderUnitResults = (units) => {
  console.log(units);
<<<<<<< HEAD
  target = document.getElementById('render-test');
=======
  let target = document.getElementById("render-test");
>>>>>>> 645ea164ae6d9a794bec38d05ce4376c65ae8ef4
  for (var i = 0; i < units.length; i++) {
    container = document.createElement('div');
    container.setAttribute('class', 'result-container');
    address = document.createElement('a');
    address.setAttribute('href', `/units/${units[i].id}`);
    address.textContent = `#${units[i].unit_num} - ${units[i].building.street_address}`;
    city = document.createElement('p');
    city.textContent = `${units[i].building.city}, NY - ${units[i].building.neighborhood}`;
    bed = document.createElement('p');
    bed.textContent = `BR: ${units[i].legal_beds}`;
    container.appendChild(address);
    container.appendChild(city);
    container.appendChild(bed);
    target.appendChild(container);
  }
};

document.getElementById('search-btn').addEventListener('click', searchPivot);
