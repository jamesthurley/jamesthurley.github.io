function handleClick(carouselId, direction) {

  let selector = "#" + carouselId;
  let carousel = document.querySelector(selector);

  handleClickInner(carousel, direction);
}

function handleClickInner(carousel, direction) {
  let list = carousel.querySelector(".list");
  if (!list) {
    console.error('Carousel list not found.');
    return;
  }

  let item = carousel.querySelector(".item");
  if (!item) {
    console.error('Carousel item not found.');
    return;
  }

  let itemWidth = item.offsetWidth;
  if (!itemWidth) {
    console.error('Carousel itemWidth not found.');
    return;
  }

  let listWidth = list.scrollWidth;
  if (!listWidth) {
    console.error('Carousel listWidth not found.');
    return;
  }

  // Perform scrolling with wrap-around
  if (direction === "previous") {
    if (list.scrollLeft <= 0) {
      list.scrollLeft = listWidth;
    }
    else {
      list.scrollBy({ left: -itemWidth, behavior: "auto" });
    }
  } else {
    if (list.scrollLeft + list.clientWidth >= listWidth) {
      list.scrollLeft = 0;
    }
    else {
      list.scrollBy({ left: itemWidth, behavior: "auto" });
    }
  }
}

// Ensure the left and right arrows scroll the carousel instantly, not smoothly.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();

        handleClickInner(carousel, event.key === 'ArrowRight' ? 'next' : 'previous');
      }
    });
  });
});