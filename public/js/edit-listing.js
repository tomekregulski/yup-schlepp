const fullUnitForm = document.querySelector('.unit-full-form');
const unitId = document.getElementById('unit-id').value;
const unitAmenForm = document.querySelector('.unit-amenities');
const unitImageForm = document.querySelector('.unit-images-form');

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

  const putUnit = await fetch(`/api/units/${unitId}`, {
    method: 'PUT',
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

  const unitData = await putUnit.json();

  if (putUnit.ok) {
    alert("it's good");
    fullUnitForm.classList.toggle('hide');
    // unitAmenForm.classList.toggle('hide');
    // document.getElementById('unit-id-amenities').textContent = unitData.id;
    // unitIdPhotos = unitData.id;
  } else {
    alert('No good');
  }
  // });
};

const unitAmenFormHandler = async (e) => {
  e.preventDefault();
  console.log('you called?');
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
  let unit_id = unitId;

  const putUnitAmenities = await fetch(`/api/units/amenities/${unitId}`, {
    method: 'PUT',
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

  if (putUnitAmenities.ok) {
    alert("It's good!");
    unitAmenForm.classList.toggle('hide');
    // unitImageForm.classList.toggle('hide');
  } else {
    alert('No good');
  }
};

const unitImageFormHandler = async (e) => {
  e.preventDefault();

  let images = document.getElementById('unit-image-form').files;
  // console.log(images);

  const formData = new FormData();

  Object.values(images).forEach((image) => {
    // console.log(image);
    formData.append('image', image, image.name);
  });

  const options = {
    method: 'PATCH',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  delete options.headers['Content-Type'];

  // console.log(formData.getAll('image'));
  const uploadImages = await fetch(`/api/units/${unitId}/uploadImage`, options);

  if (uploadImages.ok) {
    alert("It's good!");
  } else {
    alert('Something went wrong... Photo uploads are limited to 20 files, each with a maximum size of 10MB');
  }
};

fullUnitForm.addEventListener('submit', fullUnitFormHandler);
unitAmenForm.addEventListener('submit', unitAmenFormHandler);
unitImageForm.addEventListener('submit', unitImageFormHandler);
