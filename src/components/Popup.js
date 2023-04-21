class Popup {
  constructor(selector) {
    this._selector = document.querySelector(selector);
    this._popupList = document.querySelectorAll(".popup");
  }

  _handleEscClose() {
    console.log();
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        this.close(openedPopup);
      }
    });
  }

  setEventListeners() {
    this._selector.addEventListener("click", (evt) => {
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
    this._selector.classList.add("popup_opened");
    this._handleEscClose();
  }

  close() {
    this._selector.classList.remove("popup_opened");
    // document.removeEventListener("keydown", closeByEsc);
  }
}

export default Popup;
