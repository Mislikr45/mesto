import { closeByEsc } from "./index.js";
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

export default openPopup;
