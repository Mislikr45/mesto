export default class Section {
  constructor({ items, renderer }) {
    this.items = items;
    this._renderer = renderer;
    this._container = document.querySelector('.cards');
  }

  rendersItem(items){
    items.forEach(item => {
      this._renderer(item);
    });
  }

  addItemPrepend (item){
    this._container.prepend(item);
  }

  addItem(item) {
      this._container.prepend(item);
  }
}
