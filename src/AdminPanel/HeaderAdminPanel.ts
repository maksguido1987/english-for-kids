import { BaseComponent } from '../BaseComponents/BaseComponent';

export class HeaderAdminPanel extends BaseComponent {
  adminCategories: BaseComponent;

  adminWords: BaseComponent;

  wrapperNavigation: BaseComponent;

  logOut: BaseComponent;

  onRenderApplication: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['header-admin-panel']);

    this.wrapperNavigation = new BaseComponent(this.node, 'ul', ['wrapper-navigation']);
    this.adminCategories = new BaseComponent(
      this.wrapperNavigation.node,
      'li',
      ['cat-s', 'admin-navigation', 'admin-navigation-active'],
      'Caregories'
    );
    this.adminWords = new BaseComponent(this.wrapperNavigation.node, 'li', ['words', 'admin-navigation'], 'Words');
    this.logOut = new BaseComponent(this.node, 'div', ['log-out', 'admin-navigation'], 'Log out');
    this.logOut.node.addEventListener('click', () => {
      this.onRenderApplication();
    });
  }
}
