import "./index.css";
import { initialCards, validationConfig } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const popupEditeProfile = document.querySelector(".popup_edit-profile");
const popupNameInput = document.querySelector(".popup__input_type_name");
const poupAboutInput = document.querySelector(".popup__input_type_about");
const buttonOpenEditProfileForm = document.querySelector(".profile__edite");
const template = document.querySelector("#card-item__template");
const cardForm = document.querySelector(".popup_card-form");
const buttonOpenAddCardForm = document.querySelector(".profile__add");
const popupWithImage = new PopupWithImage(".popup_img-zoom");

const сardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const card = createCard(data, template);

      сardList.addItem(card);
    },
  },
  ".cards"
);

console.log(сardList);
сardList.renderItems();

const userInfo = new UserInfo({
  userName: ".profile__name",
  userAbout: ".profile__about",
});

// слушатель открытия попапа профиля
buttonOpenEditProfileForm.addEventListener("click", () => {
  popupNameInput.value = userInfo.getUserInfo().name;
  poupAboutInput.value = userInfo.getUserInfo().about;
  formPopupEditProfile.open();
});

// слушатель открытия попапа добавления карточки
buttonOpenAddCardForm.addEventListener("click", () => {
  formPopupAddCard.open();
});

function createCard({ name, link }, template, openPopupImage) {
  console.log(name, link);
  const card = new Card({ name, link }, template, () =>
    popupWithImage.open(name, link)
  );
  console.log(card);
  return card.getView();
}

const formPopupAddCard = new PopupWithForm({
  selector: ".popup_card-form",
  handleFormSubmit: (data) => {
    console.log(data);

    сardList.addItem(createCard(data, template));
  },
});

const formPopupEditProfile = new PopupWithForm({
  selector: ".popup_edit-profile",
  handleFormSubmit: (userdata) => {
    const { name, about } = userdata;
    userInfo.setUserInfo({ name, about });
    formPopupEditProfile.close();
  },
});

// слушатель на профиль
formPopupEditProfile.setEventListeners();

// слушатель на добавление карты
formPopupAddCard.setEventListeners();

// слушатель на попап img
popupWithImage.setEventListeners();

//Функция создания карточки
const validationEditForm = new FormValidator(
  validationConfig,
  popupEditeProfile
);

validationEditForm.enableValidation();

const validationAddCardForm = new FormValidator(validationConfig, cardForm);

validationAddCardForm.enableValidation();
