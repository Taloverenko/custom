console.log("JS connected");

// select

const element = document.querySelector('select');
const choices = new Choices(element, {
  allowHTML: true,
  searchEnabled: false,
  placeholder: false,
  itemSelectText: '',
});

// scroll

new SimpleBar(document.querySelector(".customScroll"), {
  autoHide: false,
  scrollbarMaxSize: 77,
});

// tooltip

tippy('#tooltip__label', {
  content: 'Глава 2, страница 176',
  animation: 'fade',
});

// yandex.maps

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map1", {
    center: [48.872185073737896,2.354223999999991],
    zoom: 10
  });

  var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geo-point.svg',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('rulerControl');

}

// forms

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.js-form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
  messages: {
    name: "Вы не ввели имя",
    phone: {
      required: "Вы не ввели телефон",
      function: "Не достаточно количество символов"
    },
    email: {
      required: "Вы не ввели e-mail",
      function: "Введите корректный e-mail"
    }}
    });