import { BaseComponent } from '../../BaseComponents/BaseComponent';
import '../main.scss';

export class Card extends BaseComponent {
  card: BaseComponent;

  transparentBlock: BaseComponent;

  cardFront: BaseComponent;

  cardBack: BaseComponent;

  cardWordFront: BaseComponent;

  cardWordBack: BaseComponent;

  rotateItem: BaseComponent;

  constructor(parentNode: HTMLElement, image: string, word: string, translation: string) {
    super(parentNode, 'div', ['card-container']);

    this.card = new BaseComponent(this.node, 'div', ['card']);
    this.transparentBlock = new BaseComponent(this.node, 'div', ['transparent-block']);
    this.cardFront = new BaseComponent(this.card.node, 'div', ['card-front']);
    this.cardWordFront = new BaseComponent(this.cardFront.node, 'div', ['card-word'], word);
    this.cardBack = new BaseComponent(this.card.node, 'div', ['card-back']);
    this.cardWordBack = new BaseComponent(this.cardBack.node, 'div', ['card-word'], translation);
    this.rotateItem = new BaseComponent(this.card.node, 'div', ['rotate']);
    this.cardFront.node.style.backgroundImage = `url("${image}")`;
    this.cardBack.node.style.backgroundImage = `url("${image}")`;
    this.flipCard();
  }

  flipCard(): void {
    this.rotateItem.node.addEventListener('click', () => {
      this.node.classList.add('flip');
      this.node.onmouseleave = () => {
        this.node.classList.remove('flip');
      };
    });
  }

  audioClick(path: string): void {
    this.cardFront.node.addEventListener('click', () => {
      const audio = new Audio(path);
      audio.addEventListener('canplaythrough', () => {
        audio.play();
      });
    });
  }

  playStateCard(): void {
    this.cardWordFront.hideElement();
    this.rotateItem.hideElement();
    this.transparentBlock.node.classList.add('show-block');
  }

  trainStateCard(): void {
    this.cardWordFront.showElement();
    this.rotateItem.showElement();
    this.transparentBlock.node.classList.remove('show-block');
  }

  addOpacityClass(): void {
    this.node.classList.add('win-card');
  }
}
