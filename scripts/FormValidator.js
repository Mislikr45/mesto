export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showInputEror = (inputElement) => {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    this._errorElement.classList.add(this._config.errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._config.inputErrorClass);
  };

  _hideInputEror = (inputElement) => {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    this._errorElement.classList.remove(this._config.errorClass);
    this._errorElement.textContent = "";
    inputElement.classList.remove(this._config.inputErrorClass);
  };

  _checkInputValidity = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputEror(inputElement);
    } else {
      this._showInputEror(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  };

  _disableSubmitButton() {
    const saveButton = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
    saveButton.classList.add(this._config.inactiveButtonClass);
    saveButton.setAttribute("disabled", "disabled");
    return saveButton;
  }

  _deleteDisableButton() {
    this._formElement
      .querySelector(this._config.submitButtonSelector)
      .classList.remove(this._config.inactiveButtonClass);
    this._formElement
      .querySelector(this._config.submitButtonSelector)
      .removeAttribute("disabled");
  }

  _toggleButtonState = (inputList) => {
    if (this._hasInvalidInput(inputList)) {
      this._disableSubmitButton();
    } else {
      this._deleteDisableButton();
    }
  };

  _setEventListeners = () => {
    const _inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );

    _inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(_inputList);
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
}
export default FormValidator;
