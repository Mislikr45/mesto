import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);

    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      evt.submitter.classList.add("popup__save_invalid");
      evt.submitter.disabled = true;
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;
