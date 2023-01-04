// попапп профиля

const popupSave=document.querySelector('.button_function_save')
let popup = document.querySelector('.popup');
let popupContent = popup.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');
let closeButton = popup.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edite');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
const elementsContainer = document.querySelector('.elements')

function closePopup () {
  popup.classList.remove('popup_opened');
};

function openPopup () {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

function handleFormSubmit (evt) {
    evt.preventDefault(evt),
    profileName.textContent = nameInput.value,
    profileAbout.textContent = aboutInput.value,
    closePopup();
}

popup.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
 
// Добавление карточек

const initialCards = [
  {
    name: 'Архыз',
    link: './images/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: './images/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: './images/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: './images/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: './images/baikal.jpg'
  }
]; 

let cardsContainer = document.querySelector('.cards');
const addCardForm = document.querySelector('.card-form');
const inputPlace = addCardForm.querySelector('.card-form__input_type_place');
const inputLink = addCardForm.querySelector('.card-form__input_type_link');
const buttonSubmitCard = addCardForm.querySelector('.card-form__submit-btn');
const buttonCloseCard = addCardForm.querySelector('.card-form__close-btn');
const plusCard = document.querySelector('.profile__add');
let   editCard = null;
const zoomImg = document.querySelector('.img-zoom__img');
const zoomTxt = document.querySelector('.img-zoom__title');
const imgZoom = document.querySelector('.img-zoom');
const zoomPopup=document.querySelector('.img-zoom');
const buttonCloseImg=document.querySelector('.img-zoom__clsbtn');
 

const createCard = ({name, link}) => {
  const template = document.querySelector('#card-item__template');
  const card = template.content.querySelector('.card-item').cloneNode(true);
  const buttonLikeCard = card.querySelector('.card-item__like');
  const cardImage=card.querySelector('.card-item__image');
  cardImage.src = link;
  card.querySelector('.card-item__title').textContent = name;
  cardImage.alt =name;
 
  card.querySelector('.card-item__trash').addEventListener('click', () => {
      card.remove();
  });

  cardImage.addEventListener('click', () => {
    Zoom({name, link});
  });

  card.querySelector('.card-item__like').addEventListener('click', () => {
    buttonLikeCard.classList.toggle('card-item__like_selected');
});
  return card;
};


const Zoom = ({name, link}) => {
 zoomPopup.classList.add('img-zoom_opened');
  zoomImg.src = link;
  zoomImg.alt = name;
  zoomTxt.textContent = name;
};


const renderCard = ({name, link}) => {
  cardsContainer.append(createCard({name, link}));
}

cardsContainer.append(...initialCards.map((name, link) =>
 {return createCard(name, link)}
));

const addCard = (event) => {
  event.preventDefault();
  const link = inputLink.value;
  const name = inputPlace.value; 
  renderCard({name, link});
  inputPlace.value = '';
  inputLink.value = '';
};

addCardForm.addEventListener('submit', addCard);
plusCard.addEventListener('click', () => {
  addCardForm.classList.add('card-form_opened');
});

buttonCloseCard.addEventListener('click', () => {
  addCardForm.classList.remove('card-form_opened');
});

buttonCloseImg.addEventListener('click', () => {
  zoomPopup.classList.remove('img-zoom_opened');
});
