// попапп профиля

const popupSave=document.querySelector('.button_function_save')
const popupEditeProfile = document.querySelector('.popup');
const popupContent = popupEditeProfile.querySelector('.popup__content');
const popupNameInput = document.querySelector('.popup__input_type_name');
const poupAboutInput = document.querySelector('.popup__input_type_about');
const popupCloseButton = popupEditeProfile.querySelector('.popup__close');
const popupEditButton = document.querySelector('.profile__edite');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const elementsContainer = document.querySelector('.cards')
let popupCloseLet=null;
let popupOpenLet=null;
let style='null';

function closePopup () {
  popupCloseLet.classList.remove(style);
};

function openPopup () {
  popupOpenLet.classList.add(style);
  
};

function handleFormSubmit (evt) {
    evt.preventDefault(evt),
    profileName.textContent = popupNameInput.value,
    profileAbout.textContent = poupAboutInput.value,
    style='popup_opened';
    popupCloseLet=popupEditeProfile,
    closePopup(popupCloseLet, style);
}

popupEditeProfile.addEventListener('submit', handleFormSubmit);
popupEditButton.addEventListener('click', () => { 
  popupCloseLet=popupEditeProfile
  popupNameInput.value = profileName.textContent;
  poupAboutInput.value = profileAbout.textContent;
  popupOpenLet=popupEditeProfile;
  style='popup_opened';
  openPopup(popupOpenLet,style)}); 
popupCloseButton.addEventListener('click', () => { 
  popupCloseLet=popupEditeProfile;
  style='popup_opened';
  closePopup(popupCloseLet,style);});


const cardsContainer = document.querySelector('.cards');
const cardForm = document.querySelector('.card-form');
const cardInputPlace = cardForm.querySelector('.card-form__input_type_place');
const cardInputLink = cardForm.querySelector('.card-form__input_type_link');
const cardSubmitBtn = cardForm.querySelector('.card-form__submit-btn');
const cardCloseBtn = cardForm.querySelector('.card-form__close-btn');
const cardsEdite = document.querySelector('.profile__add');
const popupImgLink = document.querySelector('.img-zoom__img');
const popupImgTitle = document.querySelector('.img-zoom__title');
const popupImg=document.querySelector('.img-zoom');
const popupImgCloseBtn=document.querySelector('.img-zoom__clsbtn');
const cardTemplate = document.querySelector('#card-item__template');

const cardCreate = ({name, link}) => {
  const card = cardTemplate.content.querySelector('.card-item').cloneNode(true);
  const cardLikeBtn = card.querySelector('.card-item__like');
  const cardImage=card.querySelector('.card-item__image');
  cardImage.src = link;
  card.querySelector('.card-item__title').textContent = name;
  cardImage.alt =name;
 
  card.querySelector('.card-item__trash').addEventListener('click', () => {
      card.remove();
  });

  cardImage.addEventListener('click', () => {
    popupCardZoom({name, link});
  });

  card.querySelector('.card-item__like').addEventListener('click', () => {
    cardLikeBtn.classList.toggle('card-item__like_selected');
});
  return card;
};


const popupCardZoom = ({name, link}) => {
 popupOpenLet=popupImg;
 style='img-zoom_opened';
 openPopup(popupOpenLet,style)
 popupImgLink.src = link;
 popupImgLink.alt = name;
 popupImgTitle.textContent = name;
};


const cardRender = ({name, link}) => {
  cardsContainer.prepend(cardCreate({name, link}));
}

cardsContainer.append(...initialCards.map((name, link) =>
 {return cardCreate(name, link)}
));

const cardAdd = (event) => {
  event.preventDefault();
  const link = cardInputLink.value;
  const name = cardInputPlace.value; 
  cardRender({name, link});
  cardInputPlace.value = '';
  cardInputLink.value = '';
  popupCloseLet=cardForm;
  style='card-form_opened';
  closePopup(popupCloseLet,style);
};

cardForm.addEventListener('submit', cardAdd);
cardsEdite.addEventListener('click', () => {
  popupOpenLet=cardForm;
  style='card-form_opened';
  openPopup(popupOpenLet,style)
});

cardCloseBtn.addEventListener('click', () => {
  popupCloseLet=cardForm;
  style='card-form_opened';
  closePopup(popupCloseLet,style);
});

popupImgCloseBtn.addEventListener('click', () => {
  popupCloseLet=popupImg;
  style='img-zoom_opened';
  closePopup(popupCloseLet,style);
});
