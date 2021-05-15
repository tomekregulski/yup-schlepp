const fullUnitForm = document.querySelector('.unit-full-form');
const unitId = document.getElementById('unit-id').value;
const unitAmenForm = document.querySelector('.unit-amenities');

console.log(unitId);

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
    unitAmenForm.classList.toggle('hide');
    // document.getElementById('unit-id-amenities').textContent = unitData.id;
    // unitIdPhotos = unitData.id;
  } else {
    alert('No good');
  }
  // });
};

fullUnitForm.addEventListener('submit', fullUnitFormHandler);
