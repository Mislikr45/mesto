import {openPopup} from './utils.js';
class Card {
  constructor({ link, name }, templateSelector) {
    this._name = name;
    this._link = link;
    this._template = templateSelector;
  }

  _getTemplateCard() {
    const card = this._template.content
      .querySelector(".card-item")
      .cloneNode(true);

    return card;
  }

  _handleDelete() {
    console.log(this._newCard);
    this._newCard.remove();
  }

  _handleCheckTodoCard() {
    this._newCard
      .querySelector(".card-item__like")
      .classList.toggle("card-item__like_selected");
  }

  _setEventListeners() {
    const deleteCard = this._newCard.querySelector(".card-item__trash");
    deleteCard.addEventListener("click", () => this._handleDelete());

    const checkButton = this._newCard.querySelector(".card-item__like");
    checkButton.addEventListener("click", () => this._handleCheckTodoCard());

    this._newCard
      .querySelector(".card-item__image")
      .addEventListener("click", () => {
        this._handlePreviewPicture();
      });
  }

  _handlePreviewPicture() {
    const popupZoom = document.querySelector(".popup_img-zoom");
    this._popupImg = popupZoom.querySelector(".popup__img");
    this._popupTag = popupZoom.querySelector(".popup__tag");
    this._popupImg.src = this._link;
    this._popupImg.alt = this._name;
    this._popupTag.textContent = this._name;
    openPopup(popupZoom);
  }
  _setData() {
    const name = this._newCard.querySelector(".card-item__title");
    name.textContent = this._name;
    const link = this._newCard.querySelector(".card-item__image");
    link.src = this._link;
    link.alt = this._name;
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}

export default Card;
