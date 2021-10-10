import { BaseComponent } from '../../BaseComponents/BaseComponent';
import { cardsCategories } from '../../cards';
import { LoginBtn } from './LoginBtn';
import { RegisterBtn } from './RegisterBtn';

export class ExitMenu extends BaseComponent {
  menuList: BaseComponent;

  menuLink: BaseComponent;

  menuListCollection: Array<BaseComponent>;

  btnContainer: BaseComponent;

  registerBtn: RegisterBtn;

  loginBtn: LoginBtn;

  onCreateHomePage: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'nav', ['exit-menu']);

    this.menuListCollection = [];
    this.menuList = new BaseComponent(this.node, 'ul', ['menu-list']);
    this.menuLink = new BaseComponent(this.menuList.node, 'li', ['menu-link', 'active-link'], 'Main Page');
    this.btnContainer = new BaseComponent(this.node, 'div', ['btn-container']);
    this.registerBtn = new RegisterBtn(this.btnContainer.node);
    this.loginBtn = new LoginBtn(this.btnContainer.node);
    this.menuLink.node.addEventListener('click', () => {
      this.onCreateHomePage();
    });
  }

  toggleExitMenuClassPlay(): void {
    this.node.classList.toggle('play');
  }

  toggleActiveExitMenuClass(): void {
    this.node.classList.toggle('active-exit-menu');
  }

  renderMenuList(): void {
    cardsCategories.forEach((item) => {
      const menuLink = new BaseComponent(this.menuList.node, 'li', ['menu-link'], item.attr);
      menuLink.addAttribute('data-category', item.attr);
      this.menuListCollection.push(menuLink);
    });
  }
}
