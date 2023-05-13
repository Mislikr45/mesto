import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(selector, { submitCallback }) {
    super(selector);
    
    this._submitCallback = submitCallback;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._buttonSubmit = this._popupElement.querySelector(".popup__save");
    this.defaultText = this._buttonSubmit.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(userData) {
    this._inputs.forEach((input) => {
      input.value = userData[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }


  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(loadingText) {    
    this._buttonSubmit.textContent = loadingText;
  }
  finalLoading() {
    this._buttonSubmit.textContent = this.defaultText;
  }
}

export default PopupWithForm;
