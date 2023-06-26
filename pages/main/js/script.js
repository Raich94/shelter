console.log('Реализация burger menu на обеих страницах: +26\nРеализация слайдера-карусели на странице Main: +36\nРеализация пагинации на странице Pets: +36\nРеализация попап на обеих страницах: +12\nОбщее 110')

// --------------------------------------------- Бургер ------------------------------------
const iconBurger = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");
const linksMenu = document.querySelectorAll(".nav__link");
const navBackground = document.querySelector(".nav__background");

iconBurger.addEventListener("click", function () {
  document.body.classList.toggle("_lock");
  navMenu.classList.toggle("_active");
  iconBurger.classList.toggle("_active");
  navBackground.classList.toggle("_active");
});

document.addEventListener("click", (e) => {// скрываю меню т.к клик был за его пределами
  const withinBoundaries = e.composedPath().includes(navMenu);
  const withinBoundaries2 = e.composedPath().includes(iconBurger);

  if (!withinBoundaries && !withinBoundaries2) {
    document.body.classList.remove("_lock");
    navMenu.classList.remove("_active");
    iconBurger.classList.remove("_active");
    navBackground.classList.remove("_active");
  }
});

linksMenu.forEach((el) => {
  el.addEventListener("click", () => {
    document.body.classList.remove("_lock");
    navMenu.classList.remove("_active");
    iconBurger.classList.remove("_active");
    navBackground.classList.remove("_active");
  });
});

//---------------------------------------------------- Карусель ----------------------------------------------------------

const leftCarouselButton = document.querySelector(".friends__arrow-left");
const rightCarouselButton = document.querySelector(".friends__arrow-rigth");

const carousel = document.querySelector(".carousel");

const item_Left = document.querySelector("#carousel_left");
const item_Right = document.querySelector("#carousel_right");
const item_Active = document.querySelector("#carousel_active");

const pets = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.jpg",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.jpg",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.jpg",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlet.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.jpg",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const numbers = [];
const getRandomNumber = () => {
  const number = Math.floor(Math.random() * 8);
  if (numbers.includes(number)) return getRandomNumber();
  else {
    numbers.push(number);
    return number;
  }
};

const randomArr = [];

for (let i = 0; i < 8; i++) {
  randomArr.push(getRandomNumber());
}

const createCardTemplate = (num) => {
  const card = document.createElement("div");
  card.classList.add("friends__card");
  card.id = pets[`${num}`].name;
  const cardColumn = document.createElement("div");
  cardColumn.classList.add("card__column");
  const cardImage = document.createElement("div");
  cardImage.classList.add("card__image");
  cardImage.style.background = `url('${pets[num].img}')`;
  const cardName = document.createElement("div");
  cardName.classList.add("card__name");
  cardName.innerText = pets[`${num}`].name;
  const cardBtn = document.createElement("button");
  cardBtn.classList.add("card__btn");
  cardBtn.innerText = "Learn more";
  cardColumn.appendChild(cardImage);
  cardColumn.appendChild(cardName);
  cardColumn.appendChild(cardBtn);
  card.appendChild(cardColumn);
  return card;
};

randomArr.push(randomArr[0])

let activeArr = [];
let leftArr = [];
let rightArr = [];

for (let i = 0; i < 3; i++) {
  leftArr.push(randomArr[i]);
}
for (let i = 3; i < 6; i++) {
  activeArr.push(randomArr[i]);
}
for (let i = 6; i < 9; i++) {
  rightArr.push(randomArr[i]);
}


function addLeftItem() {
  item_Left.innerHTML = "";
  for (let i = 0; i < 3; i++) {
      item_Left.appendChild(createCardTemplate(leftArr[i]))
  }
}
addLeftItem();

function addActiveItem() {
  item_Active.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    item_Active.appendChild(createCardTemplate(activeArr[i]))
  }
}
addActiveItem();

function addRightItem() {
  item_Right.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    item_Right.appendChild(createCardTemplate(rightArr[i]))
  }
}
addRightItem();

function copyArray(from, to) {
  for (let i = 0; i < 3; i++) {
    to.push(from[i])
  }
}

let arr2 = [];

function generationNextItem() {
  let arr = [];
  for (let i = 0; i < randomArr.length; i++) {
    if (activeArr.indexOf(randomArr[i]) === -1) {
      arr.push(randomArr[i]) // массив без центральных карт
    }
    arr = arr.sort(() => Math.random() - 0.5) // рандомно перемешивает массив
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) === -1) {
      arr2.push(arr[i]) // массив без повтоений
    }
  }
}

const moveLeft = () => {
  carousel.classList.add("to__the__left");
  leftCarouselButton.removeEventListener("click", moveLeft);
  rightCarouselButton.removeEventListener("click", moveRight);
  rightArr = [];
  copyArray(activeArr, rightArr);
  addRightItem();
};
const moveRight = () => {
  carousel.classList.add("to__the__right");
  rightCarouselButton.removeEventListener("click", moveRight);
  leftCarouselButton.removeEventListener("click", moveLeft);
  leftArr = [];
  copyArray(activeArr, leftArr);
  addLeftItem();
};

leftCarouselButton.addEventListener("click", moveLeft);
rightCarouselButton.addEventListener("click", moveRight);

carousel.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    carousel.classList.remove("to__the__left");
    // коппирую левый массив и вставляю в центр
    activeArr = [];
    copyArray(leftArr, activeArr);
    addActiveItem();
    // генерация неповторяющихся карт слева
    leftArr = [];
    arr2 = [];
    generationNextItem();
    copyArray(arr2, leftArr);
    addLeftItem();
  } else {
    carousel.classList.remove("to__the__right");

    activeArr = [];
    copyArray(rightArr, activeArr);
    addActiveItem();

    rightArr = [];
    arr2 = [];
    generationNextItem();
    copyArray(arr2, rightArr);
    addRightItem();
  }

  leftCarouselButton.addEventListener("click", moveLeft);
  rightCarouselButton.addEventListener("click", moveRight);

  createPopup();
});

// ---------------------------------------------------------- Попап ----------------------------------------------------------
function createPopup() {
  const petsCards = document.querySelectorAll('.friends__card');
  const popupWrapper = document.querySelector('.friends__popup');
  const popupClose = document.querySelector('.popup__close');
  const popupCard = document.querySelector('.popup__card');
  const popupImage = document.querySelector('.popup__image_pet');
  const popupName = document.querySelector('.popup__title');
  const popupType = document.querySelector('.type');
  const popupBreed = document.querySelector('.breed');
  const popupDescription = document.querySelector('.popup__description');
  const popupAge = document.querySelector('.age');
  const popupInoculations = document.querySelector('.inoculations');
  const popupDiseases = document.querySelector('.diseases');
  const popupParasites = document.querySelector('.parasites');

  petsCards.forEach(el => {
    el.addEventListener('click', function() {
      popupWrapper.classList.add("friends__popup_active")
      document.body.classList.toggle("_lock2");

      popupImage.setAttribute('src', '');
      popupName.innerText = '';
      popupType.innerText = '';
      popupBreed.innerText = '';
      popupDescription.innerText = '';
      popupAge.innerText = '';
      popupInoculations.innerText = '';
      popupDiseases.innerText = '';
      popupParasites.innerText = '';

      function hangePopup(num) {
        popupImage.setAttribute('src', pets[`${num}`].img);
        popupName.innerText = pets[`${num}`].name;
        popupType.innerText = pets[`${num}`].type;
        popupBreed.innerText = pets[`${num}`].breed;
        popupDescription.innerText = pets[`${num}`].description;
        popupAge.innerText = pets[`${num}`].age;
        popupInoculations.innerText = pets[`${num}`].inoculations;
        popupDiseases.innerText = pets[`${num}`].diseases;
        popupParasites.innerText = pets[`${num}`].parasites;
      }

      if (el == document.querySelector('#Jennifer')) {
        hangePopup(0)
      }
      if (el == document.querySelector('#Sophia')) {
        hangePopup(1)
      }
      if (el == document.querySelector('#Woody')) {
        hangePopup(2)
      }
      if (el == document.querySelector('#Scarlett')) {
        hangePopup(3)
      }
      if (el == document.querySelector('#Katrine')) {
        hangePopup(4)
      }
      if (el == document.querySelector('#Timmy')) {
        hangePopup(5)
      }
      if (el == document.querySelector('#Freddie')) {
        hangePopup(6)
      }
      if (el == document.querySelector('#Charly')) {
        hangePopup(7)
      }
    })
  })

  popupClose.addEventListener('click', function() {
    popupWrapper.classList.remove("friends__popup_active")
    document.body.classList.remove("_lock2");
  })

  popupWrapper.addEventListener("click", (e) => {// скрываю попап т.к клик был за пределами карты
    if (popupWrapper.classList.contains("friends__popup_active")) {
      const withinBoundaries = e.composedPath().includes(popupCard);

      if (!withinBoundaries) {
        popupWrapper.classList.remove("friends__popup_active")
        document.body.classList.remove("_lock2");
      }
    }
  });
}
createPopup();

