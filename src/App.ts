import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { CardField } from './Main/CardField/CardField';
import { Main } from './Main/Main';
import { PlayButton } from './Main/StarsField/PlayButton';
import { LooserPopup } from './Main/Popups/LooserPopup';
import { WinnerPopup } from './Main/Popups/WinnerPopup';
import { RefreshButton } from './Main/StarsField/RefreshButton';
import { StarsField } from './Main/StarsField/StarsField';
import { errorSong, theSoundOfDefeat, theSoundOfVictory, winnSong } from './variables';
import { AdminPanel } from './AdminPanel/AdminPanel';

export class App {
  header: Header;

  main: Main;

  footer: Footer;

  adminPanel: AdminPanel;

  cardField: CardField;

  stateGame: boolean;

  constructor(readonly rootElement: HTMLElement) {
    this.header = new Header(this.rootElement);
    this.main = new Main(this.rootElement);
    this.adminPanel = new AdminPanel(this.rootElement);
    this.footer = new Footer(this.rootElement);
    this.stateGame = false;
    this.cardField = new CardField(this.main.node);
    this.adminPanel.hideElement();
    this.cardField.removeElement();
    this.main.createHomePage();
    this.header.exitMenu.renderMenuList();
    this.createMenu();
    this.createNewCardField();
    this.stateCheckbox();
    this.main.playButton.onStartGame = () => {
      this.header.disableCheckbox();
      this.startGame();
    };
    this.creatAdminPanel();
  }

  createNewCardField(): void {
    this.main.homePage.homeCardsArray.forEach((item) => {
      item.node.addEventListener('click', () => {
        const attr = item.node.getAttribute('data-category');
        this.main.homePage.removeElement();
        const links = this.header.exitMenu.menuListCollection;
        links.forEach((link) => {
          if (attr === link.node.getAttribute('data-category')) {
            link.node.classList.add('active-link');
          } else {
            link.node.classList.remove('active-link');
            this.header.exitMenu.menuLink.node.classList.remove('active-link');
          }
        });
        this.addGameField(attr);
      });
    });
  }

  addGameField(attr: string): void {
    const check = this.header.checkboxHeader.getStateCheckbox();
    if (!check && this.stateGame) {
      this.cardField.removeElement();
      this.cardField = new CardField(this.main.node);
      this.cardField.renderCards(attr);
      this.main.starsField.removeElement();
      this.main.starsField = new StarsField(this.main.node);
      this.main.playButton.hideButton();
      this.main.refreshButton.hideButton();
      this.main.playButton = new PlayButton(this.main.node);
      this.main.refreshButton = new RefreshButton(this.main.node);
      this.stateGame = false;
      this.main.playButton.onStartGame = () => {
        this.startGame();
      };
    } else {
      this.cardField = new CardField(this.main.node);
      this.cardField.renderCards(attr);
    }
    this.stateCards();
  }

  createMenu(): void {
    const links = this.header.exitMenu.menuListCollection;
    links.forEach((link) => {
      link.node.addEventListener('click', () => {
        links.forEach((item) => item.node.classList.remove('active-link'));
        this.cardField.removeElement();
        this.header.exitMenu.menuLink.node.classList.remove('active-link');
        const attr = link.node.getAttribute('data-category');
        this.main.homePage.removeElement();
        this.header.redisableCheckbox();
        this.addGameField(attr);
        link.node.classList.add('active-link');
        this.header.exitMenu.node.classList.remove('active-exit-menu');
        this.header.menuHeader.node.classList.remove('active');
      });
    });
    this.header.exitMenu.onCreateHomePage = () => {
      this.header.redisableCheckbox();
      const check = this.header.checkboxHeader.getStateCheckbox();
      this.cardField.removeElement();
      if (check) {
        this.main.createHomePage();
        this.main.removeStarsField();
      } else {
        this.main.createHomePage();
        this.main.removeStarsField();
        this.main.homePage.addPlayClassHomePage();
      }
      links.forEach((item) => item.node.classList.remove('active-link'));
      this.header.exitMenu.menuLink.node.classList.add('active-link');
      this.header.exitMenu.node.classList.remove('active-exit-menu');
      this.header.menuHeader.node.classList.remove('active');
      this.createNewCardField();
    };
  }

  stateCards(): void {
    if (!this.main.node.contains(this.main.homePage.node)) {
      if (!this.header.checkboxHeader.getStateCheckbox()) {
        this.main.addStarsField();
        this.main.playButton.onStartGame = () => {
          this.header.disableCheckbox();
          this.startGame();
        };
        this.cardField.cardsCollection.forEach((card) => {
          card.playStateCard();
        });
      } else {
        this.main.removeStarsField();
        this.cardField.cardsCollection.forEach((card) => {
          card.trainStateCard();
        });
      }
    }
  }

  stateCheckbox(): void {
    this.header.checkboxHeader.checkbox.input.oninput = () => {
      this.header.menuHeader.toggleMenuHeaderClassPlay();
      this.header.exitMenu.toggleExitMenuClassPlay();
      this.main.homePage.addPlayClassHomePage();
      this.stateCards();
    };
  }

  checkWinnerStars(arrNum: Array<number>, arrStr: Array<string>, arrAnswers: HTMLElement[]): void {
    if (arrAnswers.length === arrStr.length) {
      if (arrNum.includes(1, 0)) {
        const countLooseClick = arrNum.filter((item) => item === 1);
        const loosePopup = new LooserPopup(this.main.node, countLooseClick.length);
        setTimeout(() => new Audio(theSoundOfDefeat).play(), 1000);
        setTimeout(() => {
          loosePopup.removeElement();
          this.rerenderMain();
        }, 3000);
      } else {
        const winnerPopup = new WinnerPopup(this.main.node);
        setTimeout(() => new Audio(theSoundOfVictory).play(), 1000);
        setTimeout(() => {
          winnerPopup.removeElement();
          this.rerenderMain();
        }, 3000);
      }
    }
  }

  rerenderMain(): void {
    this.header.redisableCheckbox();
    const links = this.header.exitMenu.menuListCollection;
    links.forEach((link) => {
      link.node.classList.remove('active-link');
    });
    this.header.exitMenu.menuLink.node.classList.add('active-link');
    this.main.starsField.removeElement();
    this.main.playButton.hideButton();
    this.main.refreshButton.hideButton();
    this.cardField.removeElement();
    this.main.createHomePage();
    this.createNewCardField();
    this.createMenu();
  }

  startGame(): void {
    this.stateGame = true;
    this.main.playButton.hideButton();
    this.main.refreshButton = new RefreshButton(this.main.node);
    const winnerStarsArray: number[] = [];
    const rihgtAnswers: HTMLElement[] = [];
    const audioCollection = this.cardField.audioCollection.sort(() => Math.random() - Math.random());
    let src: string = '';
    function* audioGen() {
      for (let i = 0; i < audioCollection.length; i += 1) {
        const audio = new Audio(audioCollection[i]);
        src = audio.src.replace(/^.*?\/a/, './a');
        audio.play();
        yield;
      }
    }
    const audioGenerator = audioGen();
    setTimeout(() => {
      audioGenerator.next();
      this.main.refreshButton.repeatAudio(src);
    }, 1000);
    this.cardField.cardsCollection.forEach((card) => {
      card.node.addEventListener('click', () => {
        if (card.node.classList.contains('win-card')) {
          return;
        }
        if (card.node.dataset.audio === src) {
          card.addOpacityClass();
          this.main.starsField.addStarWin();
          winnerStarsArray.push(0);
          rihgtAnswers.push(card.node);
          new Audio(winnSong).play();
          setTimeout(() => {
            audioGenerator.next();
            this.main.refreshButton.repeatAudio(src);
          }, 1000);
          this.checkWinnerStars(winnerStarsArray, audioCollection, rihgtAnswers);
        } else {
          new Audio(errorSong).play();
          this.main.starsField.addStarLoose();
          winnerStarsArray.push(1);
          this.checkWinnerStars(winnerStarsArray, audioCollection, rihgtAnswers);
        }
      });
    });
  }

  creatAdminPanel(): void {
    this.header.onCreateAdminPanel = () => {
      this.header.removeElement();
      this.main.removeElement();
      this.footer.removeElement();
      this.adminPanel.showElement();
      this.footer = new Footer(this.rootElement);
    };
  }
}
