// expand neighborhoods in accordian filter
document.querySelectorAll('.brooklyn').forEach((neighborhood) => {
  neighborhood.addEventListener('click', () => {
    document.querySelectorAll('.brooklyn-neighborhoods').forEach((neighborhood) => {
      neighborhood.classList.toggle('hide');
    });
  });
});
document.querySelectorAll('.bronx').forEach((neighborhood) => {
  neighborhood.addEventListener('click', () => {
    document.querySelectorAll('.bronx-neighborhoods').forEach((neighborhood) => {
      neighborhood.classList.toggle('hide');
    });
  });
});
document.querySelectorAll('.manhattan').forEach((neighborhood) => {
  neighborhood.addEventListener('click', () => {
    document.querySelectorAll('.manhattan-neighborhoods').forEach((neighborhood) => {
      neighborhood.classList.toggle('hide');
    });
  });
});
document.querySelectorAll('.queens').forEach((neighborhood) => {
  neighborhood.addEventListener('click', () => {
    document.querySelectorAll('.queens-neighborhoods').forEach((neighborhood) => {
      neighborhood.classList.toggle('hide');
    });
  });
});
