"use strict";

const animalList = [
  {
    species: "cat",
    src: "img/Cats/1.jpg",
    alt: "The man strokes the cat.",
  },
  {
    species: "cat",
    src: "img/Cats/2.jpg",
    alt: "Ginger cat is stretching.",
  },
  {
    species: "cat",
    src: "img/Cats/3.jpg",
    alt: "The cat is sitting on the table.",
  },
  {
    species: "cat",
    src: "img/Cats/4.jpg",
    alt: "Ginger cat looks up.",
  },
  {
    species: "cat",
    src: "img/Cats/5.jpg",
    alt: "Four cats on the kitchen surface.",
  },
  {
    species: "cat",
    src: "img/Cats/6.jpg",
    alt: "The cat sleeps in the bed.",
  },
  {
    species: "cat",
    src: "img/Cats/7.jpg",
    alt: "The face of a red fluffy cat.",
  },
  {
    species: "cat",
    src: "img/Cats/8.jpg",
    alt: "Two cats are lying.",
  },
  {
    species: "cat",
    src: "img/Cats/9.jpg",
    alt: "Three kittens.",
  },
  {
    species: "dog",
    src: "img/Dogs/1.jpg",
    alt: "A white puppy runs across the grass.",
  },
  {
    species: "dog",
    src: "img/Dogs/2.jpg",
    alt: "Nine dogs against a pink wall.",
  },
  {
    species: "dog",
    src: "img/Dogs/3.jpg",
    alt: "Dog with one drooping ear.",
  },
  {
    species: "dog",
    src: "img/Dogs/4.jpg",
    alt: "Two dogs run along the path.",
  },
  {
    species: "dog",
    src: "img/Dogs/5.jpg",
    alt: "A woman holds a dog in her arms.",
  },
  {
    species: "dog",
    src: "img/Dogs/6.jpg",
    alt: "Two white and brown dogs.",
  },
  {
    species: "dog",
    src: "img/Dogs/7.jpg",
    alt: "Two dogs white and black.",
  },
  {
    species: "dog",
    src: "img/Dogs/8.jpg",
    alt: "Two dogs run along the path.",
  },
  {
    species: "dog",
    src: "img/Dogs/9.jpg",
    alt: "Red dog.",
  },
  {
    species: "horses",
    src: "img/Horses/1.jpg",
    alt: "The white horse is running.",
  },
  {
    species: "horses",
    src: "img/Horses/2.jpg",
    alt: "The horse's head lies on the back of another.",
  },
  {
    species: "horses",
    src: "img/Horses/3.jpg",
    alt: "Two horses in the meadow.",
  },
  {
    species: "horses",
    src: "img/Horses/4.jpg",
    alt: "Brown horse.",
  },
  {
    species: "horses",
    src: "img/Horses/5.jpg",
    alt: "Three horses.",
  },
  {
    species: "horses",
    src: "img/Horses/6.jpg",
    alt: "White horse in the field.",
  },
  {
    species: "horses",
    src: "img/Horses/7.jpg",
    alt: "Two horses white and brown are grazing.",
  },
  {
    species: "horses",
    src: "img/Horses/8.jpg",
    alt: "Four brown horses are running.",
  },
  {
    species: "horses",
    src: "img/Horses/9.jpg",
    alt: "Brown horse.",
  },
];

const codeTemplate = `
        <div class="img">
          <div class="img__column">
            <img
              src="" alt="" class="img__js"
            />
            <img
              src="" alt="" class="img__js"
            />
            <img
              src="" alt="" class="img__js"
            />
          </div>
          <div class="img__column">
            <img
            src="" alt="" class="img__js"
            />
            <img
              src="" alt="" class="img__js"
            />
            <img
              src="" alt="" class="img__js"
            />
          </div>
          <div class="img__column">
            <img
              src="" alt="" class="img__js"
            />
            <img
              src="" alt="" class="img__js"
            />
            <img
            src="" alt="" class="img__js"
            />
          </div>
        </div>`;


const speciesList=["cat","dog","horses"];
const getRandomSpecies = (speciesList) => speciesList.sort(() => 0.5 - Math.random());
const initValueList = getRandomSpecies(animalList).slice(0, 9)
  
render(codeTemplate, document.querySelector("main"));

const imgHtml = document.querySelectorAll("img");

const popupIcon = document.querySelector("#popup");
popupIcon.addEventListener("click", showPopup);

const menuList = document.querySelector(".navigation");
menuList.addEventListener("click", changeImagesByClick);

function render(codeTemplate, placeholder) {
  placeholder.innerHTML = codeTemplate;
}

function changeImagesByClick(event){
  const imgFiltreById = animalList.filter(
    (kindOfAnimal) => kindOfAnimal.species === event.target.id
  );
  changeImages(imgFiltreById);
}

function changeImages(animalList) {
    for (let i = 0; i < imgHtml.length; i++) {
      imgHtml[i].setAttribute("src", animalList[i].src);
      imgHtml[i].setAttribute("alt", animalList[i].alt);
    }
}

changeImages(initValueList);

function showPopup() {
  menuList.classList.toggle("navigation__none");
}
