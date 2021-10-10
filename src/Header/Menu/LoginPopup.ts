import { BaseButton } from '../../BaseComponents/BaseButton';
import { BaseComponent } from '../../BaseComponents/BaseComponent';
import { BaseInput } from '../../BaseComponents/BaseInput';
import { Api } from '../../Api';

export class LoginPopup extends BaseComponent {
  loginForm: BaseComponent;

  loginName: BaseInput;

  loginPassword: BaseInput;

  loginErrorMessage: BaseComponent;

  loginFormButton: BaseButton;

  api: Api;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['login-popup']);

    this.api = new Api();
    this.loginForm = new BaseComponent(this.node, 'form', ['login-form']);
    this.loginName = new BaseInput(this.loginForm.node, ['login-name'], 'text', 'username');
    this.loginPassword = new BaseInput(this.loginForm.node, ['password-login'], 'password', 'password');
    this.loginErrorMessage = new BaseComponent(
      this.loginForm.node,
      'span',
      ['error-message'],
      'You have entered an incorrect username or password'
    );
    this.loginFormButton = new BaseButton(this.loginForm.node, ['log-form-button'], 'Login');
    this.hideElement();
    this.closeLoginPopup();
  }

  closeLoginPopup(): void {
    document.addEventListener('mousedown', (event) => {
      const loginPopup = (event.target as HTMLElement).closest('.login-popup');
      const formLogin = (event.target as HTMLElement).closest('.login-form');
      if (loginPopup && !formLogin) {
        this.removeElement();
      }
    });
  }
}
