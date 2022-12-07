
const popupSave=document.querySelector('.button_function_save')
let popup = document.querySelector('.popup');
let popupContent = popup.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutInput = document.querySelector('.popup__input_type_about');
let closeButton = popup.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edite');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let like=document.querySelector('.element__like');


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

like.addEventListener('click', function(likeElement) {
    like.classList.toggle('element__like_selected')})

popup.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
 