import { BaseComponent } from '../../BaseComponents/BaseComponent';
import '../main.scss';

export class HomePageCard extends BaseComponent {
  imageContainer: BaseComponent;

  constructor(parentNode: HTMLElement, text: string, bgImage: string, attr: string) {
    super(parentNode, 'a', ['home-card']);

    this.node.textContent = text;
    this.addAttribute('data-category', attr);
    this.imageContainer = new BaseComponent(this.node, 'div', ['bg-container']);
    this.imageContainer.node.style.backgroundImage = `url(${bgImage})`;
  }
}
