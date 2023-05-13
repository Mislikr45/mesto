export default class Section {
  constructor({ items, renderer }) {
    this._renderer = renderer;
    this._container = document.querySelector('.cards');
  }

  rendersItem(items, userId){
    items.forEach(item => {
      this._renderer(item, userId);
    });
  }

  addItemPrepend (item){
    this._container.prepend(item);
  }

  addItem(item) {
      this._container.prepend(item);
  }
}
