import { BaseButton } from '../../BaseComponents/BaseButton';
import '../main.scss';

export class PlayButton extends BaseButton {
  onStartGame: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, ['play-button'], 'Play');
    this.onClick = () => {
      this.onStartGame();
    };
  }
}
