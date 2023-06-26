console.log('Реализация burger menu на обеих страницах: +26\nРеализация слайдера-карусели на странице Main: +36\nРеализация пагинации на странице Pets: +36\nРеализация попап на обеих страницах: +12\nОбщее 110')

// --------------------------------- Бургер ---------------------------------
const iconBurger = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.nav__menu');
const linksMenu = document.querySelectorAll('.nav__link');
const navBackground = document.querySelector('.nav__background');

iconBurger.addEventListener('click', function() {
    document.body.classList.toggle('_lock');
    navMenu.classList.toggle('_active');
    iconBurger.classList.toggle('_active');
    navBackground.classList.toggle('_active');
})

document.addEventListener( 'click', (e) => {  // скрываю меню т.к клик был за его пределами
	const withinBoundaries = e.composedPath().includes(navMenu);
    const withinBoundaries2 = e.composedPath().includes(iconBurger);

	if ( ! withinBoundaries && ! withinBoundaries2 ) {
		document.body.classList.remove('_lock');
        navMenu.classList.remove('_active');
        iconBurger.classList.remove('_active');
        navBackground.classList.remove('_active');
	}
})

linksMenu.forEach(el => {
    el.addEventListener('click', () => {
        document.body.classList.remove('_lock');
        navMenu.classList.remove('_active');
        iconBurger.classList.remove('_active');
        navBackground.classList.remove('_active');
    })
})

// ------------------------------------------------- Пагинация -------------------------------------------------

const cardConteiner = document.querySelector('.friends__row');

const buttonFirst = document.querySelector('#first');
const buttonPrevious = document.querySelector('#previous');
const buttonNext = document.querySelector('#next');
const buttonLast = document.querySelector('#last');
const pageNumber = document.querySelector('#number');


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

let paginationPets = [];  // массив из 48 объектов

for (let i = 0; i < 6; i++) {
  paginationPets = paginationPets.concat(pets)
}


let arr = []; // массив 0 - 47
for(let i = 0; i < 48; i++) {
  arr.push(i)
}
console.log(arr)

let arr2 = [];
for (let i = 0; i < arr.length; i += 8) {  // массив 6шт по 8
  arr2.push(arr.slice(i, i + 8));
}
arr2.map(arr => { // каждый массив перемешал
    arr = arr.sort(() => Math.random() - 0.5)
})
console.log(arr2)
let arr3 = arr2[0].concat(arr2[1], arr2[2], arr2[3], arr2[4], arr2[5])
console.log(arr3)


let arrItem = [];


const createCardTemplate = (num) => {
  const card = document.createElement("div");
  card.classList.add("friends__card");
  card.id = paginationPets[`${num}`].name;
  const cardColumn = document.createElement("div");
  cardColumn.classList.add("card__column");
  const cardImage = document.createElement("div");
  cardImage.classList.add("card__image");
  cardImage.style.background = `url('${paginationPets[num].img}')`;
  const cardName = document.createElement("div");
  cardName.classList.add("card__name");
  cardName.innerText = paginationPets[`${num}`].name;
  const cardBtn = document.createElement("button");
  cardBtn.classList.add("card__btn");
  cardBtn.innerText = "Learn more";
  cardColumn.appendChild(cardImage);
  cardColumn.appendChild(cardName);
  cardColumn.appendChild(cardBtn);
  card.appendChild(cardColumn);
  return card;
};


let page = 1;


const media8Card = window.matchMedia('(min-width: 1160px)');
const media6Card = window.matchMedia('(min-width: 680px) and (max-width: 1159px)');
const media3Card = window.matchMedia('(max-width: 679px)');

function media8(x) {
  if (x.matches) {
    page = 1;
    arrItem = [];
    for (let i = 0; i < arr3.length; i += 8) {  // массив 6шт по 8
      arrItem.push(arr3.slice(i, i + 8));
    }
  } else {
    if (media6Card.matches) {
      page = 1;
      arrItem = [];
      for (let i = 0; i < arr3.length; i += 6) {  // массив 8шт по 6
        arrItem.push(arr3.slice(i, i + 6));
      }
    } else {
      page = 1;
      arrItem = [];
      for (let i = 0; i < arr3.length; i += 3) {  // массив 16шт по 3
        arrItem.push(arr3.slice(i, i + 3));
      }
    }
  }
  addCard(page)
  createPopup();
}

function media6(x) {
  if (x.matches) {
    page = 1;
    arrItem = [];
    for (let i = 0; i < arr3.length; i += 6) {  // массив 8шт по 6
      arrItem.push(arr3.slice(i, i + 6));
    }
  } else {
    if (media8Card.matches) {
      page = 1;
      arrItem = [];
      for (let i = 0; i < arr3.length; i += 8) {  // массив 6шт по 8
        arrItem.push(arr3.slice(i, i + 8));
      }
    } else {
      page = 1;
      arrItem = [];
      for (let i = 0; i < arr3.length; i += 3) {  // массив 16шт по 3
        arrItem.push(arr3.slice(i, i + 3));
      }
    }
  }
  addCard(page)
  createPopup();

}

function media3(x) {
  if (x.matches) {
    page = 1;
    arrItem = [];
    for (let i = 0; i < arr3.length; i += 3) {
      arrItem.push(arr3.slice(i, i + 3));
    }
  } else {
    if (media8Card.matches) {
      page = 1;
      arrItem = [];
      for (let i = 0; i < arr3.length; i += 8) {  // массив 6шт по 8
        arrItem.push(arr3.slice(i, i + 8));
      }
    } else {
      page = 1;
      arrItem = [];
      for (let i = 0; i < arr3.length; i += 6) {  // массив 16шт по 3
        arrItem.push(arr3.slice(i, i + 6));
      }
    }
  }
  addCard(page)
  createPopup();
}


media3(media3Card)
media3Card.addEventListener('change', media3)
media6(media6Card)
media6Card.addEventListener('change', media6)
media8(media8Card)
media8Card.addEventListener('change', media8)


function addCard(page) {
  cardConteiner.innerHTML = '';
  pageNumber.innerText = '';
  for (let i = 0; i < arrItem[page - 1].length; i++) {
    cardConteiner.appendChild(createCardTemplate(arrItem[page - 1][i]))
  }
  pageNumber.innerText = page;
  if (page == 1) {
    buttonFirst.setAttribute("disabled", "disabled");
    buttonPrevious.setAttribute("disabled", "disabled");
    buttonLast.removeAttribute("disabled");
    buttonNext.removeAttribute("disabled");
  } else if (page == arrItem.length) {
    buttonLast.setAttribute("disabled", "disabled");
    buttonNext.setAttribute("disabled", "disabled");
    buttonFirst.removeAttribute("disabled");
    buttonPrevious.removeAttribute("disabled");
  } else {
    buttonFirst.removeAttribute("disabled");
    buttonPrevious.removeAttribute("disabled");
    buttonLast.removeAttribute("disabled");
    buttonNext.removeAttribute("disabled");
  }
}
addCard(page);


function addButtons() {
  buttonNext.addEventListener('click', () => {
    page++
    addCard(page)
    createPopup();
  })
  buttonPrevious.addEventListener('click', () => {
    page--
    addCard(page)
    createPopup();
  })
  buttonFirst.addEventListener('click', () => {
    page = 1;
    addCard(page)
    createPopup();
  })
  buttonLast.addEventListener('click', () => {
    page = arrItem.length;
    addCard(page)
    createPopup();
  })
}
addButtons()


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













