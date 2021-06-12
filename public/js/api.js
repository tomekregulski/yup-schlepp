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

// Retrieve Buildings based on search query
const fetchBuildings = async (apiUrl, redirectUrl) => {
  let buildings = [];

  let response = await fetch(apiUrl);

  if (response.ok) {
    let json = await response.json();
    for (var i = 0; i < json.length; i++) {
      buildings.push(json[i]);
    }
    window.sessionStorage.setItem('buildings', JSON.stringify(buildings));
    document.location.assign(redirectUrl);
  } else {
    alert(response.statusText);
  }
};

// Fetch units with constructed query
const fetchUnits = async (apiUrl, redirectUrl) => {
  let units = [];

  let response = await fetch(apiUrl);

  if (response.ok) {
    let json = await response.json();
    for (var i = 0; i < json.length; i++) {
      units.push(json[i]);
    }
    window.sessionStorage.setItem('units', JSON.stringify(units));
    document.location.assign(redirectUrl);
  } else {
    alert(response.statusText);
  }
};

// Fetch neighborhoods in brooklyn
const fetchBrooklyn = async () => {
  const brooklynData = await fetch('/api/neighborhoods/brooklyn');

  const brooklyn = await brooklynData.json();

  // console.log(brooklyn);
  return brooklyn;
};

// Fetch neighborhoods in bronx
const fetchBronx = async () => {
  const bronxData = await fetch('/api/neighborhoods/bronx');

  const bronx = await bronxData.json();

  // console.log(bronx);
  return bronx;
};

// Fetch neighborhoods in manhattan
const fetchManhattan = async () => {
  const manhattanData = await fetch('/api/neighborhoods/manhattan');

  const manhattan = await manhattanData.json();

  // console.log(manhattan);
  return manhattan;
};

// Fetch neighborhoods in queens
const fetchQueens = async () => {
  const queensData = await fetch('/api/neighborhoods/queens');

  const queens = await queensData.json();

  // console.log(queens);
  return queens;
};

// Fetch all neighborhoods
const fetchNeighborhoods = async () => {
  await fetchBrooklyn();
  await fetchBronx();
  await fetchManhattan();
  await fetchQueens();
};
