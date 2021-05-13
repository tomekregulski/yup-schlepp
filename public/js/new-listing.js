const gKey = 'AIzaSyBX63r-WVeIUwaLArYbnhDTKwDwWt8np-s';
const buildingInput = document.getElementById('building');
const addRow = document.querySelector('.add-row');
const selectRow = document.querySelector('.select-row');
const drop = document.querySelector('.dropdown');
const options = drop.options;
const cardFooter = document.querySelector('.card-footer');
const buildingAmenForm = document.querySelector('.building-amenities');

// dropdown menu event listener
drop.addEventListener('change', () => {
  if (
    options.selectedIndex > 0 &&
    options.selectedIndex < options.length - 1 &&
    cardFooter.classList.contains('hide')
  ) {
    cardFooter.classList.toggle('hide');
  } else if (options.selectedIndex === 0) {
    if (!cardFooter.classList.contains('hide')) cardFooter.classList.toggle('hide');
  } else if (options.selectedIndex === options.length - 1) {
    if (cardFooter.classList.contains('hide')) cardFooter.classList.toggle('hide');
    addRow.classList.remove('hide');
    selectRow.classList.add('hide');
  }
});

// add/edit listing - mgmt dropdown card '/new-listing/management'
const mgmtFormHandler = () => {
  const mgmt = document.getElementById('mgmt');
  const mgmtForm = document.querySelector('.mgmt-form');

  mgmtForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mgmtVal = mgmt.value.trim();
    if (options.selectedIndex === options.length - 1) {
      if (mgmtVal === '') {
        alert('Please enter a valid management company before submitting');
      } else {
        confirm(`Select OK to add management company: ${mgmtVal}`);
        const createMgmt = await fetch('/api/management', {
          method: 'POST',
          body: JSON.stringify({ management_name: mgmtVal }),
          headers: { 'Content-Type': 'application/json' },
        });

        const mgmtData = await createMgmt.json();

        createMgmt.ok ? document.location.replace(`/new-listing/buildings/${mgmtData.id}`) : alert('No good');
      }
    } else {
      const mgmtID = drop.value;
      document.location.replace(`/new-listing/buildings/${mgmtID}`);
    }
  });
};

// add/edit listing - building dropdown card '/new-listing/building/:id' && '/new-listing/building/:name
const buildingFormHandler = () => {
  const buildingForm = document.querySelector('.building-form');

  buildingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const buildingVal = buildingInput.value.trim();
    const mgmtID = document.getElementById('mgmt-id');
    if (options.selectedIndex === options.length - 1) {
      if (buildingVal === '') {
        alert('Please enter valid address before submitting');
      } else {
        confirm(`Select OK to confirm address: ${buildingVal}`);
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${buildingVal}&key=${gKey}`
        );
        const data = await response.json();
        console.log(data);

        const { lat, lng: lon } = data.results[0].geometry.location;
        const [
          { long_name: streetName },
          { long_name: buildingNum },
          { long_name: neighborhood },
          { long_name: city },
          { long_name: county },
          { long_name: state },
          { long_name: country },
          { long_name: zip_code },
        ] = data.results[0].address_components;
        const street_address = `${streetName} ${buildingNum}`;

        const trainResponse = await fetch(`/api/opendata/resource/kk4q-3rt2.json`);
        const trainData = await trainResponse.json();

        const trains = await trainData
          .map(({ name: name, line, the_geom }) => {
            const stationLat = the_geom.coordinates[1];
            const stationLon = the_geom.coordinates[0];

            let radlat1 = (Math.PI * lat) / 180;
            let radlat2 = (Math.PI * stationLat) / 180;
            let theta = lon - stationLon;
            let radtheta = (Math.PI * theta) / 180;

            let distance =
              Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            distance = Math.acos(distance);
            distance = (distance * 180) / Math.PI;
            distance = distance * 60 * 1.1515;
            distance = distance * 1.609344 * 0.62137;

            return {
              name,
              station_lines: line.split('-'),
              distance,
            };
          })
          .sort((a, b) => (a.distance > b.distance ? 1 : -1))
          .slice(0, 5);

        const createBuilding = await fetch('/api/buildings', {
          method: 'POST',
          body: JSON.stringify({
            street_address,
            neighborhood,
            city,
            zip_code,
            trains,
            management_id: mgmtID.value.trim(),
          }),
          headers: { 'Content-Type': 'application/json' },
        });

        const buildingData = await createBuilding.json();

        createBuilding.ok ? document.location.replace(`/new-listing/units/${buildingData.id}`) : alert('No good');
      }
    } else {
      const buildingId = drop.value;
      document.location.replace(`/new-listing/units/${buildingId}`);
    }
  });
};

// add listing - unit dropdown card '/new-listing/units/:id'
const unitFormHandler = () => {
  const unit = document.getElementById('unit');
  const unitForm = document.querySelector('.unit-form');
  const buildingId = document.getElementById('building-id');

  unitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (options.selectedIndex === options.length - 1) {
      document.location.replace(`/new-listing/form/${buildingId.value}`);
    } else {
      const unitId = drop.value;
      // redirect to the view page for this unit once it's built
    }
  });
};

const fullUnitFormHandler = () => {
  const fullUnitForm = document.querySelector('.unit-full-form');

  fullUnitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let status = document.querySelector('.status').value;
    let unit_num = document.getElementById('unit-number').value;
    let access = document.getElementById('access').value;
    let op = document.getElementById('op').value;
    let move_in = document.getElementById('move-in').value;
    let market_as = document.querySelector('.market-as').value;
    let lease_term = document.querySelector('.lease-term').value;
    let gross_rent = document.getElementById('gross').value;
    let concession = document.querySelector('.concession');
    concession = concession.checked ? true : false;
    let months_free = document.querySelector('.months-free').value;
    let legal_beds = document.querySelector('.beds').value;
    let full_bath = document.querySelector('.full-baths').value;
    let half_bath = document.querySelector('.half-baths').value;
    let total_rooms = document.querySelector('.rooms').value;
    let size = document.getElementById('size').value;
    let desc = document.getElementById('description').value;
    let building_id = document.getElementById('building-id').value;

    let net_rent = ((lease_term - months_free) * gross_rent) / lease_term;

    const postUnit = await fetch(`/api/units`, {
      method: 'POST',
      body: JSON.stringify({
        status,
        unit_num,
        access,
        op,
        move_in,
        market_as,
        lease_term,
        gross_rent,
        concession,
        months_free,
        net_rent,
        legal_beds,
        full_bath,
        half_bath,
        total_rooms,
        size,
        desc,
        building_id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (postUnit.ok) {
      fullUnitForm.classList.toggle('hide');
      buildingAmenForm.classList.toggle('hide');
    } else {
      alert('No good');
    }
  });
};

const buildingAmenFormHandler = async (e) => {
  e.preventDefault();

  let pets_allowed = document.getElementById('pets').checked;
  let roof = document.getElementById('roof').checked;
  let courtyard = document.getElementById('courtyard').checked;
  let concierge = document.getElementById('concierge').checked;
  let doorman = document.getElementById('doorman').checked;
  let elevator = document.getElementById('elevator').checked;
  let laundry = document.getElementById('laundry').checked;
  let children_playroom = document.getElementById('children-playroom').checked;
  let gym = document.getElementById('gym').checked;
  let media_room = document.getElementById('media-room').checked;
  let recreation_room = document.getElementById('recreation-room').checked;
  let swimming_pool = document.getElementById('pool').checked;
  let live_in_super = document.getElementById('line-in-super').checked;
  let smoke_free = document.getElementById('smoke-free').checked;
  let wheelchair_access = document.getElementById('wheelchair-access').checked;
  let garage_parking = document.getElementById('garage-parking').checked;
  let valet_parking = document.getElementById('valet-parking').checked;
  let bike_room = document.getElementById('bike-room').checked;
  let cold_storage = document.getElementById('cold-storage').checked;
  let locker_cage = document.getElementById('locker').checked;
  let package_room = document.getElementById('package-room').checked;
  let building_id = document.getElementById('building-id-amenities').value;

  const postBuildingAmenities = await fetch('/api/buildings/amenities', {
    method: 'POST',
    body: JSON.stringify({
      pets_allowed,
      roof,
      courtyard,
      concierge,
      doorman,
      elevator,
      laundry,
      children_playroom,
      gym,
      media_room,
      recreation_room,
      swimming_pool,
      live_in_super,
      smoke_free,
      wheelchair_access,
      garage_parking,
      valet_parking,
      bike_room,
      cold_storage,
      locker_cage,
      package_room,
      building_id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (postBuildingAmenities.ok) {
    alert("It's good!");
  } else {
    alert('No good');
  }
};

if (
  document.location.pathname === '/new-listing/management/' ||
  document.location.pathname === '/new-listing/management'
) {
  mgmtFormHandler();
} else if (document.location.pathname.includes('/buildings')) {
  // script tag for google places
  const gScript = document.createElement('script');
  gScript.async = 'true';
  gScript.src = `https://maps.googleapis.com/maps/api/js?key=${gKey}&libraries=places&callback=initAutoFill`;
  document.body.append(gScript);

  // autocomplete from google places
  function initAutoFill() {
    const autocomplete = new google.maps.places.Autocomplete(buildingInput);
  }
  buildingFormHandler();
} else if (document.location.pathname.includes('/units')) {
  unitFormHandler();
} else if (document.location.pathname.includes('/new-listing/form/')) {
  fullUnitFormHandler();
  buildingAmenForm.addEventListener('submit', buildingAmenFormHandler);
}
