class Card {
  constructor(
    data,
    template,
    userId,
    handleImageClick,
    handleTrashClick,
    handleToggleLike
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._template = template;
    this._counter = data.likes.length;
    this.cardId = data._id;
   
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._alt = data.name;
    this._handleImageClick = handleImageClick;
    this._handleTrashClick = handleTrashClick;
    this._handleToggleLike = handleToggleLike;
    
  }

  _getTemplateCard() {
    const card = this._template.content
      .querySelector(".card-item")
      .cloneNode(true);
    return card;
  }

  _setData() {
    this._element = this._getTemplateCard();
    this._title = this._newCard.querySelector(".card-item__title");
    this._title.textContent = this._name;
    this._image = this._newCard.querySelector(".card-item__image");
    this._image.src = this._link;
    this._image.alt = this._name;
    this._deleteCard = this._newCard.querySelector(".card-item__trash");
    this._likeButton = this._newCard.querySelector(".card-item__like");
    this._amountLikes = this._newCard.querySelector(".card-item__like-amount");
    this._amountLikes.textContent = this._counter;

    if (this.isLiked(this._likes)) {
      console.log("this.isLiked(this._likes)");
      this._likeButton.classList.add("card-item__like_selected");
    }
    
    if (this._ownerId !== this._userId) {
      this._deleteCard.remove();
    }

    return this._element;
  }

  isLiked(likes) {
    return likes.some((like) => {
      like._id === this._userId;
    });
  }

  toggleLike({ likes }) {
    this.likes = likes;
    this._likeButton.classList.toggle("card-item__like_selected");
    this._amountLikes.textContent = likes.length;
  }

  removeCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleOpenPopup() {
    this._handleImageClick(this._name, this._link);
  }

  _setEventListeners() {
    this._deleteCard = this._newCard.querySelector(".card-item__trash");
    this._deleteCard.addEventListener("click", () => {
      this._handleTrashClick(this.cardId);
    });

    this._likeButton = this._newCard.querySelector(".card-item__like");
    this._likeButton.addEventListener("click", () => {
      this._handleToggleLike(this.cardId, this._likes);
    });

    this._image = this._newCard.querySelector(".card-item__image");
    this._image.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();
    return this._newCard;
  }
}

export default Card;
