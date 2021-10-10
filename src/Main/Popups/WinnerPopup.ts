import { BaseComponent } from '../../BaseComponents/BaseComponent';

export class WinnerPopup extends BaseComponent {
  pictureWinPopup: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['winner-popup']);

    this.pictureWinPopup = new BaseComponent(this.node, 'div', ['picture-win-popup']);
  }
}
