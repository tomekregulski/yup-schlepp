const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let category = e.target.textContent;

    switch (category) {
      case 'Management':
        let url = 'api/managements';
        fetchMgmt(url);
        break;
      case 'Building':
        showBuildingForm(category);
        break;
      case 'Unit':
        showUnitForm(category);
        break;
    }

    document.querySelector('.filter-select').classList.toggle('hide');
  });
});

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

const renderMgmtResults = (management) => {
  document.querySelector('.title-container').textContent = 'Management Companies';
  let target = document.getElementById('mgmt-list');
  let container = document.querySelector('.results-container');
  if (container.classList.contains('hide')) {
    container.classList.toggle('hide');
  }

  for (var i = 0; i < management.length; i++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row p-4 d-flex justify-content-center');
    row.innerHTML = `
    <div class="col-12 col-md-10 col-lg-6 d-flex justify-content-between mgmt-row">
      <span class="card-title unit-num mgmt-link m-0" onClick="window.location='/managements/${management[i].id}'">${management[i].management_name}</span>
      <div class="specs">
          <span>${management[i].buildings.length}</span>
          <span>Buildings</span>
      </div>
    </div>`;
    target.appendChild(row);
  }
};

const showBuildingForm = (category) => {
  let buildings = document.getElementById('building_hide');

  if (buildings.classList.contains('hide')) {
    buildings.classList.remove('hide');
    document.querySelector('.title-container').textContent = 'Buildings';
  }
  const search = document.getElementById('search-main');
  search.classList.remove('hide');
  search.addEventListener('click', () => buildQuery(category));
};

const showUnitForm = (category) => {
  let units = document.getElementById('unit_hide');

  if (units.classList.contains('hide')) {
    units.classList.remove('hide');
    document.querySelector('.title-container').textContent = 'Units';
  }
  const search = document.getElementById('search-main');
  search.classList.remove('hide');
  search.addEventListener('click', () => buildQuery(category));
};

const buildQuery = (category) => {
  let queryArray = [];
  let url = '';
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
  if (category == 'Unit') {
    url = '/units';
  } else if (category == 'Building') {
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

  if (category == 'Unit') {
    redirectUrl = `results${url}`;
    apiUrl = `api${url}`;
    fetchUnits(apiUrl, redirectUrl);
  } else if (category == 'Building') {
    redirectUrl = `results${url}`;
    apiUrl = `api${url}`;
    fetchBuildings(apiUrl, redirectUrl);
  }
};

const toggleSearchBtn = () => {
  const categoryBtn = document.getElementById('category-btn');
  if (categoryBtn.style.display === 'none') {
    categoryBtn.style.display = 'block';
  } else {
    categoryBtn.style.display = 'none';
  }
};

const uncheckAll = () => document.getElementsByName('searchElement').forEach((el) => (el.checked = false));

// expand neighborhoods in accordian filter
document.querySelector('.brooklyn').addEventListener('click', () => {
  document.querySelectorAll('.brooklyn-neighborhoods').forEach((neighborhood) => {
    neighborhood.classList.toggle('hide');
  });
});
document.querySelector('.bronx').addEventListener('click', () => {
  document.querySelectorAll('.bronx-neighborhoods').forEach((neighborhood) => {
    neighborhood.classList.toggle('hide');
  });
});
document.querySelector('.manhattan').addEventListener('click', () => {
  document.querySelectorAll('.manhattan-neighborhoods').forEach((neighborhood) => {
    neighborhood.classList.toggle('hide');
  });
});
document.querySelector('.queens').addEventListener('click', () => {
  document.querySelectorAll('.queens-neighborhoods').forEach((neighborhood) => {
    neighborhood.classList.toggle('hide');
  });
});
