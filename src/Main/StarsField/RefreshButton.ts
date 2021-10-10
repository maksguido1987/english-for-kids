import { BaseButton } from '../../BaseComponents/BaseButton';
import '../main.scss';

export class RefreshButton extends BaseButton {
  constructor(parentNode: HTMLElement) {
    super(parentNode, ['refresh-button'], '');
  }

  repeatAudio(audio: string): void {
    this.onClick = () => {
      new Audio(audio).play();
    };
  }
}
