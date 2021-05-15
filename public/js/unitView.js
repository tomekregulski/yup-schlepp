const selectPic = (src) => {
  const selectedPic = document.getElementById('selected-photo');
  console.log(src);
  selectedPic.setAttribute('src', src);
};

// document.querySelectorAll("carousel-pic").addEventListener("click", selectPic);
