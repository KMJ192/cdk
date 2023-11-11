import './style.css';

class TestComponent extends HTMLElement {
  static observedAttributes = ['sample', 'data'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = /* html */ `
    <style>
      .test {
        color: red;
      }
    </style>
    <div class='test'>
      test
    </div>
    <slot></slot>
  `;
  }

  // connectedCallback() {}

  // disconnectedCallback() {}

  // adoptedCallback() {}

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(name, oldValue, newValue);
  }
}

customElements.define('test-tag', TestComponent);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /* html */ `
  <test-tag class='test' sample='test' data='data'>123</test-tag>
`;
