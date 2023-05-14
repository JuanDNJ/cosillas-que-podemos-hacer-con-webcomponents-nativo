import "../components/Bienvenida"
import "../components/Menu"
export default class Inicio extends HTMLElement {
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
      }

      bienvenida-njv::part(h2) {
        color: #646cff;
        font-size: 2rem;
      }
      .contenedor{
        display: grid;
        height: 100vh;
        grid-template-columns: 1fr;
        grid-template-rows: .1fr .9fr;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Inicio.styles}</style>
        <section class="contenedor">
          <section class="menu">
            <menu-njv></menu-njv>
          </section>
          <section class="contenido">
            <bienvenida-njv nameUser="Juan"></bienvenida-njv>
          </section>
        </section>
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
window.customElements.define("inicio-njv",Inicio);