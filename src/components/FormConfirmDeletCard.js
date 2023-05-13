import Popup from "./Popup.js";

export default class FormConfirmDeletCard extends Popup {
  constructor(selector, { submitCallback }) {
    super(selector);
    this._buttonSubmit= this._popupElement.querySelector('.popup__save_place_yes');
    this._submitCallback = submitCallback;
  }

  // Открытие попапа с айди
  openConfirmation(card) {
    super.open();
    this.cardId = card._id;
    this.card = card;
  }

  // Слушатель
  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._submitCallback(this);
    });
  }
  renderLoading(loadingText) {
    this.defaultText = this._buttonSubmit.textContent;
        this._buttonSubmit.textContent = loadingText;
  }
  finalLoading() {
    this._buttonSubmit.textContent = this.defaultText;
  }
}
