import './scss/style.scss';
import './index.html';
import { App } from './App';

window.onload = () => {
  const app = new App(document.body);
  app.adminPanel.headerPanel.onRenderApplication = () => {
    app.adminPanel.removeElement();
    app.footer.removeElement();
    new App(document.body);
  };
};
