const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let category = e.target.textContent;

    switch (category) {
      case 'Management':
        console.log('mgmt');
        let url = 'api/managements';
        fetchMgmt(url);
        break;
      case 'Building':
        console.log('Building');
        showUnitForm(category);
        break;
      case 'Unit':
        console.log('Units');
        showUnitForm(category);
        break;
    }

    document.querySelector('.filter-select').classList.toggle('hide');
  });
});

// const searchPivot = (event) => {
//   event.preventDefault();
//   console.log('hello');
//   clearSearchResults();
//   uncheckAll();
//   const category = document.getElementById('search-category').value;
//   console.log(category);
//   switch (category) {
//     case 'Management':
//       console.log('mgmt');
//       buildQuery(category);
//       break;
//     case 'Building':
//       console.log('Building');
//       showUnitForm();
//       break;
//     case 'Unit':
//       console.log('Unit');
//       showUnitForm();
//       break;
//   }
// };

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
    console.log(units);
    window.sessionStorage.setItem('units', JSON.stringify(units));
    document.location.assign(redirectUrl);
  } else {
    alert(response.statusText);
  }
};

const renderMgmtResults = (management) => {
  console.log('rendering management...');
  console.log(management);
  clearSearchResults();
  document.querySelector('.title-container').textContent = 'Management Companies';
  let target = document.getElementById('mgmt-list');
  let container = document.querySelector('.results-container');
  if (container.classList.contains('hide')) {
    container.classList.toggle('hide');
  }

  for (var i = 0; i < management.length; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row p-4 mx-5 mgmt-row');
    row.innerHTML = `
    <div class="col-12 d-flex justify-content-between">
      <h3 class="card-title unit-num mgmt-link m-0" onClick="window.location='/managements/${management[i].id}'">${management[i].management_name}</h3>
      <div class="specs">
          <span>${management[i].buildings.length}</span>
          <span>Buildings</span>
      </div>
    </div>`;
    target.appendChild(row);
  }
};

const toggleUnits = () => {
  console.log('unit info');

  toggleBuildings();

  let units = document.getElementById('unit_hide');
  if (units.classList.contains('hide')) {
    units.classList.remove('hide');
  } else {
    units.classList.add('hide');
  }
};

const toggleBuildings = () => {
  console.log('building info');

  let buildings = document.getElementById('building_hide');
  if (buildings.style.display === 'none') {
    buildings.style.display = 'block';
  } else {
    buildings.style.display = 'none';
  }
};

const showBuildingForm = () => {
  let buildings = document.getElementById('building_hide');

  if (buildings.style.display === 'none') {
    buildings.style.display = 'block';
  }
};

const showUnitForm = (category) => {
  category = category;
  let units = document.getElementById('unit_hide');

  if (units.classList.contains('hide')) {
    units.classList.remove('hide');
    document.querySelector('.title-container').textContent = 'Units';
  }

  document.getElementById('search-main').addEventListener('click', (category) => buildQuery(category));
};

const hideBuildingForm = () => {
  let buildings = document.getElementById('building_hide');

  if (buildings.style.display === 'block') {
    buildings.style.display = 'none';
  }
};

const hideUnitForm = () => {
  let units = document.getElementById('unit_hide');

  if (!units.classList.contains('hide')) {
    units.classlist.add('hide');
  }
};

const buildQuery = (category) => {
  let queryArray = [];
  let url = '';
  console.log('ok');
  var checkboxes = document.getElementsByName('searchElement');
  for (var checkbox of checkboxes) {
    if (checkbox.checked && checkbox.value !== 'unit[__gte_gross_rent' && checkbox.value !== 'unit[__lte_gross_rent') {
      queryArray.push(checkbox.value);
    }
  }
  const minRent = document.getElementById('min_rent').value;
  const maxRent = document.getElementById('max_rent').value;
  if (minRent > 0) {
    const gte = `unit[__gte_gross_rent]=${minRent}`;
    queryArray.push(gte);
  }
  if (maxRent > 0) {
    const lte = `unit[__lte_gross_rent]=${maxRent}`;
    queryArray.push(lte);
  }
  console.log(queryArray);
  if ((category = 'Unit')) {
    url = '/units';
  } else if ((category = 'Building')) {
    url = '/buildings';
  }

  if (queryArray.length > 0) {
    for (var i = 0; i < queryArray.length; i++) {
      if (i === 0) {
        url = url + '/?';
      }
      if (i > 0) {
        url = url + '&';
      }
      url = url + queryArray[i];
    }
  }

  if ((category = 'Unit')) {
    redirectUrl = `results${url}`;
    apiUrl = `api${url}`;
    console.log(apiUrl);
    console.log(redirectUrl);
    fetchUnits(apiUrl, redirectUrl);
  } else if ((category = 'Building')) {
    redirectUrl = `results${url}`;
    apiUrl = `api${url}`;
    console.log(apiUrl);
    console.log(redirectUrl);
    fetchBuildings(apiUrl, redirectUrl);
  }

  console.log(url);
};

const toggleSearchBtn = () => {
  const categoryBtn = document.getElementById('category-btn');
  if (categoryBtn.style.display === 'none') {
    categoryBtn.style.display = 'block';
  } else {
    categoryBtn.style.display = 'none';
  }
};

const clearSearchResults = () => {
  // let target = document.getElementById('categories');
  // target.classList.add('hide');
  // while (target.firstChild) {
  //   target.removeChild(target.firstChild);
  // }
};

const uncheckAll = () => {
  document.getElementsByName('searchElement').forEach((el) => (el.checked = false));
};

// document.getElementById('category-btn').addEventListener('click', searchPivot);
// document.getElementById('search-main').addEventListener('click', (category) => buildQuery(category));
