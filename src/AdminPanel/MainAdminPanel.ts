import { BaseComponent } from '../BaseComponents/BaseComponent';
import { cards } from '../cards';
import { CategoryCard } from './CategoryCard';
import { CreateCategoryCard } from './CreateCategoryCard';
import { NewWord } from './NewWord';

export class MainAdminPanel extends BaseComponent {
  onAddClassActiveLinkNewWord: () => void;

  caregoryCollection: Array<CategoryCard>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['main-admin-panel']);

    this.categoryAdministration();
  }

  categoryAdministration(): void {
    cards.forEach((item) => {
      const cardCategory = new CategoryCard(this.node, item.category, item.data.length);
      cardCategory.addWord.node.addEventListener('click', () => {
        new NewWord(this.node, item.category);
        this.onAddClassActiveLinkNewWord();
      });
    });
    new CreateCategoryCard(this.node);
  }
}
