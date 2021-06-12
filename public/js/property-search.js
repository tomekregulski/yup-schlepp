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
        document.location.replace('/building-filter');
        break;
      case 'Unit':
        showUnitForm(category);
        break;
    }

    document.querySelector('.filter-select').classList.toggle('hide');
  });
});

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

if (document.location.pathname.includes('building-filter')) {
  document.getElementById('search-buildings').addEventListener('click', () => buildQuery('Building'));
}
