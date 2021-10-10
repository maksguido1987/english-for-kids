import { BaseComponent } from '../../BaseComponents/BaseComponent';

export class LooserPopup extends BaseComponent {
  pictureLoosPopup: BaseComponent;

  countLooseClick: BaseComponent;

  constructor(parentNode: HTMLElement, count: number) {
    super(parentNode, 'div', ['looser-popup']);

    this.countLooseClick = new BaseComponent(this.node, 'div', ['count-loose-click'], `${count} errors`);
    this.pictureLoosPopup = new BaseComponent(this.node, 'div', ['picture-loose-popup']);
  }
}
