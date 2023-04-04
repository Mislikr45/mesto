import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import openPopup from "./utils.js";

const popupEditeProfile = document.querySelector(".popup_edit-profile");
const popupNameInput = document.querySelector(".popup__input_type_name");
const poupAboutInput = document.querySelector(".popup__input_type_about");
const buttonOpenEditProfileForm = document.querySelector(".profile__edite");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const buttonCloseList = document.querySelectorAll(".popup__close");

const cardsContainer = document.querySelector(".cards");
const cardForm = document.querySelector(".popup_card-form");
const cardInputPlace = cardForm.querySelector(".popup__input_type_place");
const cardInputLink = cardForm.querySelector(".popup__input_type_link");
const buttonOpenAddCardForm = document.querySelector(".profile__add");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

buttonCloseList.forEach((btn) => {
  const popup = btn.closest(".popup");
  btn.addEventListener("click", () => closePopup(popup));
});

export function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function submitEditProfileForm(evt) {
  evt.preventDefault(evt);
  profileName.textContent = popupNameInput.value;
  profileAbout.textContent = poupAboutInput.value;
  closePopup(popupEditeProfile);
}

popupEditeProfile.addEventListener("submit", submitEditProfileForm);
buttonOpenEditProfileForm.addEventListener("click", () => {
  popupNameInput.value = profileName.textContent;
  poupAboutInput.value = profileAbout.textContent;
  openPopup(popupEditeProfile);
});

const renderCard = (todoDate) => {
  const card = new Card(todoDate);
  cardsContainer.prepend(card.getView());
};

initialCards.forEach((todoDate) => {
  renderCard(todoDate);
});

const submitAddCardForm = (event) => {
  event.preventDefault();
  const link = cardInputLink.value;
  const name = cardInputPlace.value;
  renderCard({ name, link });
  cardInputPlace.value = "";
  cardInputLink.value = "";
  const button = event.submitter;
  button.classList.add("popup__save_invalid");
  validationAddCardForm.disableSubmitButton();
  closePopup(cardForm);
};

cardForm.addEventListener("submit", submitAddCardForm);
buttonOpenAddCardForm.addEventListener("click", () => {
  openPopup(cardForm);
});

const popupList = document.querySelectorAll(".popup");
popupList.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});

// константы валидации
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_invalid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

const validationEditForm = new FormValidator(
  validationConfig,
  popupEditeProfile
);
validationEditForm.enableValidation();

const validationAddCardForm = new FormValidator(validationConfig, cardForm);
validationAddCardForm.enableValidation();
export { openPopup };
