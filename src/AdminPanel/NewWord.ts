import { BaseComponent } from '../BaseComponents/BaseComponent';

export class NewWord extends BaseComponent {
  titleNewWord: BaseComponent;

  bodyNewWord: BaseComponent;

  addNewWord: BaseComponent;

  titleAddNewWord: BaseComponent;

  constructor(parentNode: HTMLElement, title: string) {
    super(parentNode, 'div', ['new-word']);

    this.titleNewWord = new BaseComponent(this.node, 'div', ['title-new-word'], `Category: ${title}`);
    this.bodyNewWord = new BaseComponent(this.node, 'div', ['body-new-word']);
    this.addNewWord = new BaseComponent(this.bodyNewWord.node, 'div', ['add-new-word']);
    this.titleAddNewWord = new BaseComponent(this.addNewWord.node, 'div', ['add-new-word-title'], 'Add New Word');
  }
}
