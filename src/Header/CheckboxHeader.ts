import { BaseComponent } from '../BaseComponents/BaseComponent';
import { BaseInput } from '../BaseComponents/BaseInput';

export class CheckboxHeader extends BaseComponent {
  checkbox: BaseInput;

  label: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'span', ['train-or-play']);

    this.checkbox = new BaseInput(this.node, ['checkbox-header'], 'checkbox');
    this.label = new BaseComponent(this.node, 'label', ['label-header']);
    this.label.node.setAttribute('for', 'check-input');
    this.checkbox.input.setAttribute('id', 'check-input');
    this.checkbox.input.checked = true;
  }

  getStateCheckbox(): boolean {
    return this.checkbox.input.checked;
  }
}
