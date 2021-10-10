import { BaseButton } from '../../BaseComponents/BaseButton';

export class RegisterBtn extends BaseButton {
  onRegisterUser: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, ['register-btn'], 'Register');

    this.onClick = () => {
      this.onRegisterUser();
    };
  }
}
