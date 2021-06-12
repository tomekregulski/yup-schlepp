const showBuildings = () => {
  let data = sessionStorage.getItem('buildings');
  newData = JSON.parse(data);
  console.log(newData);
  renderBuildingResults(newData);
};

const renderBuildingResults = (newData) => {
  console.log('rendering buildings...');
  console.log(newData);
  let target = document.getElementById('render-test');
  if (newData.length == 0) {
    console.log('no match');
    container = document.createElement('div');
    // container.setAttribute("class", "result-container");
    noResults = document.createElement('p');
    noResults.setAttribute('class', 'text-center');
    noResults.textContent =
      'Sorry! There are currently no entries in the database that match all of those parameters - please try something else';
    container.appendChild(noResults);
    target.appendChild(container);
  } else {
    for (var i = 0; i < newData.length; i++) {
      container = document.createElement('div');
      container.setAttribute('class', 'row p-4 mx-5');
      container.innerHTML = `
      <div class="col-12  col-md-10 col-lg-8 mgmt-row">
        <a href="/buildings/${newData[i].id}">
          <h3 class="card-title unit-num m-0">${newData[i].street_address}</h3>
          <h3 class="card-title unit-num m-0">${newData[i].neighborhood}, ${newData[i].city}</h3>
        </a>
      <div class="specs">
          <span>Available Units:</span>
          <span>${newData[i].units.length}</span>
      </div>
    </div>`;
      target.appendChild(container);
    }
  }
};

showBuildings();
