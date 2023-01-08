// попапп профиля

const popupEditeProfile=document.querySelector('.popup_edit-profile')
const popup = document.querySelector('.popup');
const popupContent = popup.querySelector('.popup__content');
const popupNameInput = document.querySelector('.popup__input_type_name');
const poupAboutInput = document.querySelector('.popup__input_type_about');
const buttonCloseEditProfileForm = popup.querySelector('.popup__close_place_edit-profile');
const buttonOpenEditProfileForm = document.querySelector('.profile__edite');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const elementsContainer = document.querySelector('.cards')

function closePopup (popup) {
  popup.classList.remove('popup_opened');
 
};

function openPopup (popup) {
  popup.classList.add('popup_opened');
};

function submitEditProfileForm (evt) {
    evt.preventDefault(evt),
    profileName.textContent = popupNameInput.value,
    profileAbout.textContent = poupAboutInput.value,
    closePopup(popupEditeProfile);
}

popupEditeProfile.addEventListener('submit', submitEditProfileForm);
buttonOpenEditProfileForm.addEventListener('click', () => { 
  popupNameInput.value = profileName.textContent;
  poupAboutInput.value = profileAbout.textContent;
  openPopup(popupEditeProfile)}); 
buttonCloseEditProfileForm.addEventListener('click', () => { 
  closePopup(popupEditeProfile);
});

const cardsContainer = document.querySelector('.cards');
const cardForm = document.querySelector('.popup_card-form');
const cardInputPlace = cardForm.querySelector('.popup__input_type_place');
const cardInputLink = cardForm.querySelector('.popup__input_type_link');
const cardSubmitBtn = cardForm.querySelector('.popup__save_place_card-form');
const buttonCloseAddCardForm = cardForm.querySelector('.popup__close_place_card-form');
const buttonOpenAddCardForm = document.querySelector('.profile__add');
const popupImgLink = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__tag');
const popupImg=document.querySelector('.popup_img-zoom');
const popupImgCloseBtn=document.querySelector('.popup__close_place_img-zoom');
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
    openPopupZoom({name, link});
  });

  card.querySelector('.card-item__like').addEventListener('click', () => {
    cardLikeBtn.classList.toggle('card-item__like_selected');
});
  return card;
};


const openPopupZoom = ({name, link}) => {
 openPopup(popupImg);
 popupImgLink.src = link;
 popupImgLink.alt = name;
 popupImgTitle.textContent = name;
};


const renderCard = ({name, link}) => {
  cardsContainer.prepend(cardCreate({name, link}));
}

cardsContainer.append(...initialCards.map((name, link) =>
 {return cardCreate(name, link)}
));

const submitAddCardForm = (event) => {
  event.preventDefault();
  const link = cardInputLink.value;
  const name = cardInputPlace.value; 
  renderCard({name, link});
  cardInputPlace.value = '';
  cardInputLink.value = '';
  closePopup(cardForm);
};

cardForm.addEventListener('submit', submitAddCardForm);
buttonOpenAddCardForm.addEventListener('click', () => {
  openPopup(cardForm)
});

buttonCloseAddCardForm.addEventListener('click', () => {
  closePopup(cardForm);
});

popupImgCloseBtn.addEventListener('click', () => {
  closePopup(popupImg);
});
