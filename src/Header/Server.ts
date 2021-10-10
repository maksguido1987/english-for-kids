import { BaseComponent } from '../BaseComponents/BaseComponent';

export class Server extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super(
      parentNode,
      'a',
      ['server'],
      `Ссылка на установку сервера (npm i, npm run start), HEROKU не удалось победить ;-), sorry`
    );
    this.addAttribute('href', 'https://github.com/maksguido1987/Express-mongoose-EFK');
    this.addAttribute('target', '__blank');
  }
}
