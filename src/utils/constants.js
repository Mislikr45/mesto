
// iimport jordanImage from './images/jordan.jpg';
// import jamesImage from './images/james.jpg';
// import bryantImage from './images/bryant.jpg';

// const whoIsTheGoat = [
//   // меняем исходные пути на переменные
//   { name: 'Michael Jordan', image: jordanImage },
//   { name: 'Lebron James', link: jamesImage },
//   { name: 'Kobe Bryant', link: bryantImage },
// ]; 

import arkhyz from "../images/arkhyz.jpg";
import chelyabinsk from "../images/chelyabinsk-oblast.jpg";
import ivanovo from "../images/ivanovo.jpg";
import kamchatka from "../images/kamchatka.jpg";
import kholmogorsky from "../images/kholmogorsky-rayon.jpg";
import baikal from "../images/baikal.jpg";

export const initialCards = [
  {
    name: "Архыз",
    link: arkhyz,
  },
  {
    name: "Челябинская область",
    link: chelyabinsk,
  },
  {
    name: "Иваново",
    link: ivanovo,
  },
  {
    name: "Камчатка",
    link: kamchatka,
  },
  {
    name: "Холмогорский район",
    link: kholmogorsky,
  },
  {
    name: "Байкал",
    link: baikal,
  },
];

// константы валидации
export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};
