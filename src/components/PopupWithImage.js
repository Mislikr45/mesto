import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._img = this._popup.querySelector(".popup__img");
    this._tag = this._popup.querySelector(".popup__tag");
  }

  setEventListeners() {
    super.setEventListeners();
  }

  open(tag, link) {
    super.open();
    this._img.src = link;
    this._img.alt = tag;
    this._tag.textContent = tag;
  }
}
