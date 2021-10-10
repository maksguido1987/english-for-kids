import { BaseComponent } from '../BaseComponents/BaseComponent';
import { CardField } from './CardField/CardField';
import { HomePage } from './HomePage/HomePage';
import { PlayButton } from './StarsField/PlayButton';
import { StarsField } from './StarsField/StarsField';
import './main.scss';
import { RefreshButton } from './StarsField/RefreshButton';

export class Main extends BaseComponent {
  homePage: HomePage;

  cardField: CardField;

  starsField: StarsField;

  playButton: PlayButton;

  refreshButton: RefreshButton;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'main', ['main']);

    this.starsField = new StarsField(this.node);
    this.playButton = new PlayButton(this.node);
    this.refreshButton = new RefreshButton(this.node);
    this.starsField.removeElement();
    this.refreshButton.hideButton();
    this.playButton.hideButton();
  }

  createHomePage(): void {
    this.homePage = new HomePage(this.node);
    this.homePage.renderHomeCards();
  }

  addStarsField(): void {
    this.starsField = new StarsField(this.node);
    this.playButton = new PlayButton(this.node);
  }

  removeStarsField(): void {
    this.starsField.removeElement();
    this.playButton.hideButton();
    this.refreshButton.hideButton();
  }
}
