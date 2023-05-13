import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._img =  this._popupElement.querySelector(".popup__img");
    this._name =  this._popupElement.querySelector(".popup__tag");
  }

   open(name, url) {
    super.open();      
    this._img.alt = name;
    this._name.textContent = name;
    this._img.src = url;
  }
}
