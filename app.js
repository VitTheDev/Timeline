const items = document.querySelectorAll('#timeline li');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

async function getPlanets() {
  const res = await axios.get('https://swapi.dev/api/planets/1');
  console.log(res.data);
}

getPlanets();

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
