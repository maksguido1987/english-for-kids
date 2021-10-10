import { BaseComponent } from '../../BaseComponents/BaseComponent';
import { cards } from '../../cards';
import { Card } from './Card';
import '../main.scss';

export class CardField extends BaseComponent {
  card: Card;

  cardsCollection: Array<Card>;

  audioCollection: Array<string>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['card-field']);

    this.cardsCollection = [];
    this.audioCollection = [];
  }

  renderCards(param: string): void {
    cards.forEach((item) => {
      if (item.category === param) {
        item.data.forEach((data) => {
          const card = new Card(this.node, data.image, data.word, data.translation);
          card.addAttribute('data-audio', data.audioSrc);
          this.audioCollection.push(data.audioSrc);
          card.audioClick(data.audioSrc);
          this.cardsCollection.push(card);
        });
      }
    });
  }
}
