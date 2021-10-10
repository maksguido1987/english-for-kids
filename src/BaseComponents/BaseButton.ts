export class BaseButton {
  readonly button: HTMLButtonElement;

  onClick: () => void;

  constructor(parentNode: HTMLElement, styles: string[], title: string) {
    this.button = document.createElement('button');
    this.button.textContent = title;
    this.button.classList.add(...styles);
    if (parentNode) parentNode.append(this.button);

    this.button.onclick = (e: Event) => {
      e.preventDefault();
      if (this.onClick) {
        this.onClick();
      }
    };
  }

  addDisableBtn(): void {
    this.button.setAttribute('disabled', 'true');
  }

  removeDisableBtn(): void {
    this.button.removeAttribute('disabled');
  }

  hideButton(): void {
    this.button.remove();
  }
}
