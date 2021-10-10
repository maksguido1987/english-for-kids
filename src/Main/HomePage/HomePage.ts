import { BaseComponent } from '../../BaseComponents/BaseComponent';
import { HomePageCard } from './HomePageCard';
import { cardsCategories } from '../../cards';
import '../main.scss';

export class HomePage extends BaseComponent {
  testLink: BaseComponent;

  homePageCard: HomePageCard;

  homeCardsArray: Array<HomePageCard>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['home-page']);

    this.homeCardsArray = [];
  }

  renderHomeCards(): void {
    cardsCategories.forEach((item) => {
      const homeCard = new HomePageCard(this.node, item.text, item.src, item.attr);
      this.homeCardsArray.push(homeCard);
    });
  }

  addPlayClassHomePage(): void {
    this.homeCardsArray.forEach((item) => {
      item.node.classList.toggle('play');
    });
  }
}
