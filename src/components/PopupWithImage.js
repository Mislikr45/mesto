import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._img = document.querySelector(".popup__img");
    this._tag = document.querySelector(".popup__tag");
  }

   open(tag, link) {
    super.open();
    this._img.src = link;
    this._img.alt = tag;
    this._tag.textContent = tag;
  }
}
