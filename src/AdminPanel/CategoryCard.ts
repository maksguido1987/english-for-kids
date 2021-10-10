import { BaseComponent } from '../BaseComponents/BaseComponent';

export class CategoryCard extends BaseComponent {
  titleCategory: BaseComponent;

  countWords: BaseComponent;

  wrapperBtns: BaseComponent;

  updateCat: BaseComponent;

  addWord: BaseComponent;

  deleteCategory: BaseComponent;

  constructor(parentNode: HTMLElement, title: string, count: number) {
    super(parentNode, 'div', ['category-card']);

    this.titleCategory = new BaseComponent(this.node, 'div', ['title-category'], `${title}`);
    this.deleteCategory = new BaseComponent(this.node, 'div', ['delete-category']);
    this.countWords = new BaseComponent(this.node, 'div', ['count-words'], `WORDS: ${count}`);
    this.wrapperBtns = new BaseComponent(this.node, 'div', ['wrapper-btns']);
    this.updateCat = new BaseComponent(this.wrapperBtns.node, 'div', ['category-buttons'], 'Update');
    this.addWord = new BaseComponent(this.wrapperBtns.node, 'div', ['category-buttons'], 'Add word');
  }
}
