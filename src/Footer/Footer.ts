import { BaseComponent } from '../BaseComponents/BaseComponent';
import { linkRSSchool } from '../variables';
import './footer.scss';

export class Footer extends BaseComponent {
  logo: BaseComponent;

  link: BaseComponent;

  authorInfo: BaseComponent;

  authorGitHub: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'footer', ['footer']);

    this.logo = new BaseComponent(this.node, 'img', ['footer-logo']);
    this.authorInfo = new BaseComponent(this.node, 'div', ['author-info'], `${new Date().getFullYear()}  `);
    this.authorGitHub = new BaseComponent(this.authorInfo.node, 'a', ['github-link'], 'maksguido1987');
    this.link = new BaseComponent(this.node, 'a', ['footer-link'], 'RS School');
    this.authorGitHub.addAttribute('href', 'https://github.com/maksguido1987');
    this.logo.addAttribute('src', './logo.svg');
    this.logo.addAttribute('title', 'RS School');
    this.link.addAttribute('href', linkRSSchool);
  }
}
