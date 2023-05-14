export default class MenuNjv extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /* CSS */ `
      :host{  
        display: block;
        padding: 0;
        margin: 0;
      }

      .menu{
        padding: 0;
        margin: 0;
      }
      .lista__menu{
        padding: var(--padding-list);
        margin: var(--margin-list);
        color: var(--color-claro);
        list-style: var(--list-style);
        background: var(--backgound-list);
      }
      .item__lista{

      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${MenuNjv.styles}</style>
        <nav class="menu">
          <ul class="lista__menu">
            <li class="item__lista">
                <router-link goto="/about">Quien soy?</router-link>
            </li>
            <li class="item__lista">
                <router-link goto="/it-academy">IT Academy</router-link>
            </li>
          </ul>
        </nav>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("menu-njv",MenuNjv);