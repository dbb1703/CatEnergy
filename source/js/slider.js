const sliderPrev = document.querySelector(".slider__prev");
const sliderAfter = document.querySelector(".slider__after");

const beforeImg = document.querySelector(
  ".slider__items div.slider__item:first-child"
);
const afterImg = document.querySelector(
  ".slider__items div.slider__item:last-child"
);

const indicator = document.querySelector(".slider__indicator");

if (sliderPrev) {
  sliderPrev.onclick = function (event) {
    event.preventDefault();

    if (beforeImg.classList.contains("slider__item--active")) {
      beforeImg.classList.remove("slider__item--active");
    }
    if (afterImg.classList.contains("slider__item--active")) {
      afterImg.classList.remove("slider__item--active");
    }

    if (indicator.classList.contains("slider__indicator--after")) {
      indicator.classList.remove("slider__indicator--after");
    }
    if (indicator.classList.contains("slider__indicator--before")) {
      indicator.classList.remove("slider__indicator--before");
    }

    indicator.classList.add("slider__indicator--before");
    beforeImg.classList.add("slider__item--active");
  };
}

if (sliderAfter) {
  sliderAfter.onclick = function (event) {
    event.preventDefault();

    if (beforeImg.classList.contains("slider__item--active")) {
      beforeImg.classList.remove("slider__item--active");
    }
    if (afterImg.classList.contains("slider__item--active")) {
      afterImg.classList.remove("slider__item--active");
    }

    if (indicator.classList.contains("slider__indicator--after")) {
      indicator.classList.remove("slider__indicator--after");
    }
    if (indicator.classList.contains("slider__indicator--before")) {
      indicator.classList.remove("slider__indicator--before");
    }

    indicator.classList.add("slider__indicator--after");
    afterImg.classList.add("slider__item--active");
  };
}

if (indicator) {
  indicator.onclick = function () {
    indicator.classList.toggle("slider__indicator--after");
    indicator.classList.toggle("slider__indicator--before");

    if (indicator.classList.contains("slider__indicator--after")) {
      sliderAfter.click();
    }

    if (indicator.classList.contains("slider__indicator--before")) {
      sliderPrev.click();
    }
  };
}
