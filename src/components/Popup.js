class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._buttonSubmit = this._popupElement.querySelector(".popup__save");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      const targetClassList = evt.target.classList;
      if (
        targetClassList.contains("popup") ||
        targetClassList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  renderLoading(isLoading, loadingText) {
    if (isLoading) {
      this.defaultText = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = loadingText;
    } else {
      this._buttonSubmit.textContent = this.defaultText;
    }
  }
}

export default Popup;
