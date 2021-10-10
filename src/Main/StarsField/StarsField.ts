import { BaseComponent } from '../../BaseComponents/BaseComponent';
import '../main.scss';

export class StarsField extends BaseComponent {
  goodStar: BaseComponent;

  badStar: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['stars-field']);
  }

  addStarWin(): void {
    new BaseComponent(this.node, 'div', ['good-star']);
  }

  addStarLoose(): void {
    new BaseComponent(this.node, 'div', ['bad-star']);
  }
}
