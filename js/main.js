$(document).ready(function () {
  if ($(window).width() > 768) {
    $(".s-auctions__slider").slick({
      slidesToShow: 2.8,
      adaptiveHeight: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
    $(".s-popular-colection__slider").slick({
      slidesToShow: 2.8,
      adaptiveHeight: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
    $(".s-explore__slider").slick({
      slidesToShow: 3.25,
      adaptiveHeight: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2.8,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }
});
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function moveNumber(num, elem, step) {
  let time = 2000;
  let item = document.querySelector(".move-number__" + elem);
  let n = 0;
  let t = Math.round(time / (num / step));
  if (item.innerHTML < 1) {
    let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
      item.innerHTML = n;
    }, t);
  }
}

const elem = document.querySelector(".move-number-wrap");

document.addEventListener("scroll", function () {
  const posTop = elem.getBoundingClientRect().top;

  // Блок достиг верхней границы экрана (или выше)
  // elem.classList.toggle('visible', posTop <= 0);

  // Блок только появляется снизу (или выше)
  // elem.classList.toggle('visible', posTop < window.innerHeight);

  // Блок целиком находится в видимой зоне
  // elem.classList.toggle(
  //   "visible",
  //   posTop + elem.clientHeight <= window.innerHeight && posTop >= 0
  // );
  console.log(posTop);
  if (posTop < window.innerHeight) {
    elem.classList.add("visible");
    moveNumber(32, "elem-1", 2);
    moveNumber(20, "elem-2", 2);
    moveNumber(12, "elem-3", 1);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // конечная дата, например 1 июля 2021
  const deadline = new Date(2022, 07, 21);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? "0" + days : days;
    $hours.textContent = hours < 10 ? "0" + hours : hours;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    $days.dataset.title = declensionNum(days, ["день", "дня", "дней"]);
    $hours.dataset.title = declensionNum(hours, ["час", "часа", "часов"]);
    $minutes.dataset.title = declensionNum(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    $seconds.dataset.title = declensionNum(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector(".timer__days");
  const $hours = document.querySelector(".timer__hours");
  const $minutes = document.querySelector(".timer__minutes");
  const $seconds = document.querySelector(".timer__seconds");
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

window.onload = function () {
  document
    .querySelector(".header-burger")
    .addEventListener("click", function () {
      document.querySelector(".header-body").classList.toggle("open");
      document.querySelector(".header-burger").classList.toggle("open");
    });
};
