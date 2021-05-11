const gKey = 'AIzaSyBX63r-WVeIUwaLArYbnhDTKwDwWt8np-s';
const buildingInput = document.getElementById('building');
const addRow = document.querySelector('.add-row');
const selectRow = document.querySelector('.select-row');
const drop = document.querySelector('.dropdown');
const options = drop.options;
const cardFooter = document.querySelector('.card-footer');

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
        createMgmt.ok ? document.location.replace(`/new-listing/management/buildings/${mgmtVal}`) : alert('No good');
      }
    } else {
      const mgmtID = await drop.value;
      // document.location.replace(`/new-listing/management/buildings/${mgmtID}`);
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
        const data = await fetch(`/api/googleApi/api/google/?address=${buildingVal}`);
        const { lat, lng: lon } = data.results[0].geometry.location;
        const [
          { long_name: streetName },
          { long_name: buildingNum },
          { long_name: neighborhood },
          { long_name: city },
          { long_name: zip_code },
        ] = data.results[0].address_components;
        const street_address = `${streetName} ${buildingNum}`;
        console.log(street_address);
      }
    }
  });
};

if (
  document.location.pathname === '/new-listing/management/' ||
  document.location.pathname === '/new-listing/management'
) {
  mgmtFormHandler();
} else if (document.location.pathname.includes('/new-listing/management/buildings')) {
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
}
