const gKey = 'AIzaSyBX63r-WVeIUwaLArYbnhDTKwDwWt8np-s';
const buildingInput = document.getElementById('building');
const addRow = document.querySelector('.add-row');
const selectRow = document.querySelector('.select-row');
const drop = document.querySelector('.dropdown');
const options = drop.options;
const cardFooter = document.querySelector('.card-footer');
const buildingAmenForm = document.querySelector('.building-amenities');
const fullUnitForm = document.querySelector('.unit-full-form');
const unitAmenForm = document.querySelector('.unit-amenities');
const unitImageForm = document.querySelector('.unit-images-form');

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
    if (addRow) {
      addRow.classList.remove('hide');
    }
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

        if (createBuilding.ok) {
          buildingForm.classList.toggle('hide');
          document.querySelector('.inner-card').classList.toggle('hide');
          buildingAmenForm.classList.toggle('hide');
          document.querySelector('.address').textContent = buildingData.street_address;
          document.getElementById('building-id-amenities').textContent = buildingData.id;
        } else {
          alert('No good');
        }
      }
    } else {
      const buildingId = drop.value;
      document.location.replace(`/new-listing/units/${buildingId}`);
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
  let building_id = document.getElementById('building-id-amenities').textContent;

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
    document.location.replace(`/new-listing/units/${building_id}`);
  } else {
    alert('No good');
  }
};

// add listing - unit dropdown card '/new-listing/units/:id'
const unitFormHandler = () => {
  const unit = document.getElementById('unit');
  const unitForm = document.querySelector('.unit-form');
  const buildingId = document.getElementById('building-id');

  unitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (options.selectedIndex === options.length - 1) {
      document.querySelector('.inner-card').classList.toggle('hide');
      fullUnitForm.classList.toggle('hide');
    } else {
      const unitId = drop.value;
      // redirect to the view page for this unit once it's built
    }
  });
};

const fullUnitFormHandler = async (e) => {
  // fullUnitForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let status = document.querySelector('.status').value;
  let unit_num = document.getElementById('unit-number').value;
  let access = document.getElementById('access').value;
  let op = parseInt(document.getElementById('op').value);
  let move_in = document.getElementById('move-in').value;
  let market_as = document.querySelector('.market-as').value;
  let lease_term = parseInt(document.querySelector('.lease-term').value);
  let gross_rent = parseInt(document.getElementById('gross').value);
  let concession = document.querySelector('.concession');
  concession = concession.checked ? true : false;
  let months_free = parseInt(document.querySelector('.months-free').value);
  let legal_beds = parseInt(document.querySelector('.beds').value);
  let full_bath = parseInt(document.querySelector('.full-baths').value);
  let half_bath = parseInt(document.querySelector('.half-baths').value);
  let total_rooms = parseInt(document.querySelector('.rooms').value);
  let size = parseInt(document.getElementById('size').value);
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

  const unitData = await postUnit.json();

  if (postUnit.ok) {
    alert("it's good");
    fullUnitForm.classList.toggle('hide');
    unitAmenForm.classList.toggle('hide');
    document.getElementById('unit-id-amenities').textContent = unitData.id;
  } else {
    alert('No good');
  }
  // });
};

const unitAmenFormHandler = async (e) => {
  e.preventDefault();

  let furnished = document.getElementById('furnished').checked;
  let balcony = document.getElementById('balcony').checked;
  let garden = document.getElementById('private-roof').checked;
  let private_roof = document.getElementById('garden').checked;
  let roof_rights = document.getElementById('roof-rights').checked;
  let terrace = document.getElementById('terrace').checked;
  let central_air = document.getElementById('central-air').checked;
  let dishwasher = document.getElementById('dishwasher').checked;
  let fireplace = document.getElementById('fireplace').checked;
  let hardwood_floors = document.getElementById('hardwood-floors').checked;
  let washer_dryer = document.getElementById('washer-dryer').checked;
  let city_view = document.getElementById('city-view').checked;
  let garden_view = document.getElementById('garden-view').checked;
  let park_view = document.getElementById('park-view').checked;
  let skyline_view = document.getElementById('skyline-view').checked;
  let water_view = document.getElementById('water-view').checked;
  let unit_id = parseInt(document.getElementById('unit-id-amenities').textContent);

  const postUnitAmenities = await fetch('/api/units/amenities', {
    method: 'POST',
    body: JSON.stringify({
      furnished,
      balcony,
      garden,
      private_roof,
      roof_rights,
      terrace,
      central_air,
      dishwasher,
      fireplace,
      hardwood_floors,
      washer_dryer,
      city_view,
      garden_view,
      park_view,
      skyline_view,
      water_view,
      unit_id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  const amenitiesData = await postUnitAmenities.json();

  if (postUnitAmenities.ok) {
    alert("It's good!");
    unitAmenForm.classList.toggle('hide');
    unitImageForm.classList.toggle('hide');
    building_id_photos = amenitiesData.id;
  } else {
    alert('No good');
  }
};

let building_id_photos;
const unitImageFormHandler = async (e) => {
  e.preventDefault();

  let image = document.getElementById('unit-image-form').files;
  console.log(image);

  const uploadImages = await fetch(`/api/units/${building_id_photos}/uploadImage`, {
    method: 'PATCH',
    body: new FormData(unitImageForm),
    headers: { 'Content-Type': 'application/json' },
  });

  let data = await uploadImages.json();
  console.log(data);
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
  buildingAmenForm.addEventListener('submit', buildingAmenFormHandler);
} else if (document.location.pathname.includes('/units')) {
  unitFormHandler();
  fullUnitForm.addEventListener('submit', fullUnitFormHandler);
  unitAmenForm.addEventListener('submit', unitAmenFormHandler);
  unitImageForm.addEventListener('submit', unitImageFormHandler);
}
// else if (document.location.pathname.includes('/new-listing/form/')) {
// }
