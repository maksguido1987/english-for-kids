import { BaseButton } from '../../BaseComponents/BaseButton';

export class LoginBtn extends BaseButton {
  onLoginUser: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, ['login-btn'], 'Login');

    this.onClick = () => {
      this.onLoginUser();
    };
  }
}
