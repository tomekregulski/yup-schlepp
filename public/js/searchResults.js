const showUnits = () => {
  let data = sessionStorage.getItem('units');
  newData = JSON.parse(data);
  console.log(newData);
  renderUnitResults(newData);
};

const renderUnitResults = (newData) => {
  //   clearSearchResults();
  let target = document.getElementById('render-test');
  if (newData.length == 0) {
    console.log('no match');
    container = document.createElement('div');
    container.setAttribute('class', 'result-container d-flex flex-row justify-content-center align-items-center');
    noResults = document.createElement('p');
    noResults.setAttribute('style', 'text-center');
    noResults.setAttribute('class', 'mt-2');
    noResults.textContent =
      'Sorry! There are currently no entries in the database that match all of those parameters - please try something else';
    container.appendChild(noResults);
    target.appendChild(container);
  } else {
    for (var i = 0; i < newData.length; i++) {
      console.log('making results');
      const halfBaths = newData[i].half_bath / 2;

      container = document.createElement('div');
      container.setAttribute('class', 'col-lg-4 col-md-6 col-sm-12');
      container.innerHTML = `<div onClick="window.location='/units/${newData[i].id}'" class="card display-card my-5">
      <img class="card-img" src=${newData[i].image[0]} alt="Card image">
      <div class="card-img-overlay rent-bar d-flex justify-content-center align-items-center">
        <span class="rent">$${newData[i].net_rent}</span>
      </div>
      <div class="status p-2">
        <span>${newData[i].status}</span>
      </div>
      <div class="card-body text-center">
        <div class="row d-flex justify-content-between align-items-baseline px-2">
          <div class="col-3 col-lg-4">
            <h3 class="card-title unit-num">#${newData[i].unit_num}</h3>
          </div>
          <div class="col-9 col-lg-8 specs">
            <span>${newData[i].legal_beds}</span>
            <span>Beds</span>
            <span>|</span>
            <span>${newData[i].full_bath + halfBaths}</span>
            <span>Baths</span>
          </div>
        </div>
      </div>
    </div>`;
      target.appendChild(container);
    }
  }
};

showUnits();
