import { Api } from '../Api';
import { BaseComponent } from '../BaseComponents/BaseComponent';
import { IUser } from '../variables';
import { CheckboxHeader } from './CheckboxHeader';
import './header.scss';
import { ExitMenu } from './Menu/ExitMenu';
import { LoginPopup } from './Menu/LoginPopup';
import { MenuHeader } from './Menu/MenuHeader';
import { RegisterPopup } from './Menu/RegisterPopup';

export class Header extends BaseComponent {
  menuHeader: MenuHeader;

  checkboxHeader: CheckboxHeader;

  exitMenu: ExitMenu;

  registerPopup: RegisterPopup;

  loginPopup: LoginPopup;

  api: Api;

  onCreateAdminPanel: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', ['header']);

    this.menuHeader = new MenuHeader(this.node);
    this.checkboxHeader = new CheckboxHeader(this.node);
    this.exitMenu = new ExitMenu(this.node);
    this.loginPopup = new LoginPopup(this.node);
    this.api = new Api();
    this.menuHeader.node.onclick = () => {
      this.menuHeader.activeClass();
      this.exitMenu.toggleActiveExitMenuClass();
    };
    this.exitMenu.registerBtn.onRegisterUser = () => {
      this.registerPopup = new RegisterPopup(this.node);
      this.exitMenu.toggleActiveExitMenuClass();
      this.menuHeader.activeClass();
    };
    this.exitMenu.loginBtn.onLoginUser = () => {
      this.loginPopup.showElement();
      this.exitMenu.toggleActiveExitMenuClass();
      this.menuHeader.activeClass();
    };
    this.closeMenu();
    this.login();
  }

  login(): void {
    this.loginPopup.loginFormButton.onClick = async () => {
      const user: IUser = {
        username: this.loginPopup.loginName.getInputValue(),
        password: this.loginPopup.loginPassword.getInputValue(),
      };
      if ((await this.api.login(user)) === 200) {
        this.onCreateAdminPanel();
        this.loginPopup.removeElement();
      } else {
        this.loginPopup.loginErrorMessage.node.classList.add('error-message-active');
      }
    };
  }

  closeMenu(): void {
    document.addEventListener('click', (event) => {
      const exitMenu = (event.target as HTMLElement).closest('.exit-menu');
      const menuHeader = (event.target as HTMLElement).closest('.menu-header');
      if (!exitMenu && !menuHeader) {
        this.exitMenu.node.classList.remove('active-exit-menu');
        this.menuHeader.node.classList.remove('active');
      }
    });
  }

  disableCheckbox(): void {
    this.checkboxHeader.checkbox.setDisableElement('disable');
  }

  redisableCheckbox(): void {
    this.checkboxHeader.checkbox.removeDisableElement();
    this.checkboxHeader.checkbox.input.checked = true;
  }
}
