import { Api } from '../../Api';
import { BaseButton } from '../../BaseComponents/BaseButton';
import { BaseComponent } from '../../BaseComponents/BaseComponent';
import { BaseInput } from '../../BaseComponents/BaseInput';
import { IUser, passwordValidatePattern, usernameValidatePattern } from '../../variables';

export class RegisterPopup extends BaseComponent {
  registerForm: BaseComponent;

  registerName: BaseInput;

  registerPassword: BaseInput;

  passworfTranscript: BaseComponent;

  registerErrorMessage: BaseComponent;

  registerFormButton: BaseButton;

  api: Api;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['register-popup']);

    this.api = new Api();
    this.registerForm = new BaseComponent(this.node, 'form', ['register-form']);
    this.registerName = new BaseInput(this.registerForm.node, ['register-name'], 'text', 'username');
    this.registerPassword = new BaseInput(this.registerForm.node, ['password-register'], 'password', 'password');
    this.passworfTranscript = new BaseComponent(
      this.registerForm.node,
      'span',
      ['pass-descript'],
      'Пароль должен быть не менее 8ми символов, содержать цифры, строчные и заглавные буквы'
    );
    this.registerErrorMessage = new BaseComponent(
      this.registerForm.node,
      'span',
      ['error-message'],
      'This name is already registered'
    );
    this.registerFormButton = new BaseButton(this.registerForm.node, ['reg-form-button'], 'Registration');
    this.registerName.input.oninput = () => {
      this.addValidNameClass();
    };
    this.registerPassword.input.oninput = () => {
      this.addValidPasswordClass();
    };
    this.register();
    this.closeRegisterPopup();
  }

  register(): void {
    this.registerFormButton.onClick = async () => {
      if (this.checkValidName() && this.checkValidPass()) {
        const user: IUser = {
          username: this.registerName.getInputValue(),
          password: this.registerPassword.getInputValue(),
        };
        if ((await this.api.registration(user)) === 200) {
          this.api.registration(user);
          this.removeElement();
        } else {
          this.registerErrorMessage.node.classList.add('error-message-active');
        }
      } else if (this.checkValidName() && !this.checkValidPass()) {
        this.registerPassword.input.classList.add('invalid');
        setTimeout(() => {
          this.registerPassword.input.classList.remove('invalid');
        }, 2000);
      } else if (!this.checkValidName() && this.checkValidPass()) {
        this.registerName.input.classList.add('invalid');
        setTimeout(() => {
          this.registerName.input.classList.remove('invalid');
        }, 2000);
      } else {
        this.registerPassword.input.classList.add('invalid');
        this.registerName.input.classList.add('invalid');
        setTimeout(() => {
          this.registerPassword.input.classList.remove('invalid');
          this.registerName.input.classList.remove('invalid');
        }, 2000);
      }
    };
  }

  checkValidName(): boolean {
    return usernameValidatePattern.test(this.registerName.input.value);
  }

  checkValidPass(): boolean {
    return passwordValidatePattern.test(this.registerPassword.input.value);
  }

  addValidNameClass(): void {
    if (this.checkValidName()) {
      this.registerName.input.classList.remove('invalid');
      this.registerName.input.classList.add('valid');
    } else {
      this.registerName.input.classList.remove('valid');
      this.registerName.input.classList.add('invalid');
    }
    if (this.registerName.input.value.length === 0) {
      this.registerName.input.classList.remove('valid');
      this.registerName.input.classList.remove('invalid');
    }
  }

  addValidPasswordClass(): void {
    if (this.checkValidName()) {
      this.registerPassword.input.classList.remove('invalid');
      this.registerPassword.input.classList.add('valid');
    } else {
      this.registerPassword.input.classList.remove('valid');
      this.registerPassword.input.classList.add('invalid');
    }
    if (this.registerPassword.input.value.length === 0) {
      this.registerPassword.input.classList.remove('valid');
      this.registerPassword.input.classList.remove('invalid');
    }
  }

  closeRegisterPopup(): void {
    document.addEventListener('mousedown', (event) => {
      const registerPopup = (event.target as HTMLElement).closest('.register-popup');
      const formRegister = (event.target as HTMLElement).closest('.register-form');
      if (registerPopup && !formRegister) {
        this.removeElement();
      }
    });
  }
}
