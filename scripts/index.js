
const popupSave=document.querySelector('.button_function_save')
let popup = document.querySelector('.popup');
let popupContent = popup.querySelector('.popup__content');
let nameInput = popupContent.querySelector('.popup__name');
let popUpAbout =  popupContent.querySelector('.popup__about');
let closeButton = popup.querySelector('.button_function_close');
let editButton = document.querySelector('.button_function_edite');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let like=document.querySelector('.like');


function closePopup () {
  popup.classList.remove('popup_open');
};

function openPopup () {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  popUpAbout.value = profileAbout.textContent;
};

function handleFormSubmit (evt) {
    evt.preventDefault(evt),
    profileName.textContent = nameInput.value,
    profileAbout.textContent = popUpAbout.value,
    closePopup();
}

like.addEventListener('click', function(likeElement) {
    like.classList.toggle('element__like_active_selected')}
    )

popupSave.addEventListener('click', handleFormSubmit);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
 