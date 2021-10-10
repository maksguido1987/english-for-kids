import { BaseComponent } from '../BaseComponents/BaseComponent';
import './admin-panel.scss';
import { HeaderAdminPanel } from './HeaderAdminPanel';
import { MainAdminPanel } from './MainAdminPanel';

export class AdminPanel extends BaseComponent {
  headerPanel: HeaderAdminPanel;

  mainAdminPanel: MainAdminPanel;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['admin-panel']);

    this.headerPanel = new HeaderAdminPanel(this.node);
    this.mainAdminPanel = new MainAdminPanel(this.node);
    this.headerPanel.adminCategories.node.addEventListener('click', () => {
      this.mainAdminPanel.removeElement();
      this.mainAdminPanel = new MainAdminPanel(this.node);
      this.headerPanel.adminCategories.node.classList.add('admin-navigation-active');
      this.headerPanel.adminWords.node.classList.remove('admin-navigation-active');
      this.mainAdminPanel.onAddClassActiveLinkNewWord = () => {
        this.headerPanel.adminCategories.node.classList.remove('admin-navigation-active');
        this.headerPanel.adminWords.node.classList.add('admin-navigation-active');
      };
    });
    this.mainAdminPanel.onAddClassActiveLinkNewWord = () => {
      this.headerPanel.adminCategories.node.classList.remove('admin-navigation-active');
      this.headerPanel.adminWords.node.classList.add('admin-navigation-active');
    };
  }
}
