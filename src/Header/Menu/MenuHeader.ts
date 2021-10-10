import { BaseComponent } from '../../BaseComponents/BaseComponent';

export class MenuHeader extends BaseComponent {
  topSpan: BaseComponent;

  midSpan: BaseComponent;

  bottomSpan: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'nav', ['menu-header']);

    this.topSpan = new BaseComponent(this.node, 'span');
    this.midSpan = new BaseComponent(this.node, 'span');
    this.bottomSpan = new BaseComponent(this.node, 'span');
  }

  toggleMenuHeaderClassPlay(): void {
    this.node.classList.toggle('play');
  }

  activeClass(): void {
    this.node.classList.toggle('active');
  }
}
