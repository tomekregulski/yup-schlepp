const selectPic = (src) => {
  const selectedPic = document.getElementById('selected-photo');
  console.log(src);
  selectedPic.setAttribute('src', src);
};

const lightbox = document.querySelector('.light-box');
const unitBody = document.querySelector('.unit-body');

document.querySelectorAll('.slider-item').forEach((image) => {
  image.addEventListener('click', () => {
    lightbox.classList.toggle('hide');
    unitBody.classList.toggle('hide');
  });
});

lightbox.addEventListener('click', (e) => {
  if (!e.target.classList.contains('lb-controls')) {
    lightbox.classList.toggle('hide');
    unitBody.classList.toggle('hide');
  }
});
