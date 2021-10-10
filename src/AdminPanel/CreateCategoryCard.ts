import { BaseComponent } from '../BaseComponents/BaseComponent';

export class CreateCategoryCard extends BaseComponent {
  titleCreateCategory: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['category-card', 'create-category']);

    this.titleCreateCategory = new BaseComponent(this.node, 'div', ['title-category'], 'Create new Category');
  }
}
