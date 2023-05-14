import "../components/Button"
export default class BienvenidaNjv extends HTMLElement {
  nameUser: string = JSON.parse(localStorage.getItem('nameUser')!) ?? 'unknown';
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this.ready()
    this.addEventListener("router-link", this.eventHandler)
    
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
      form{
        display: flex;
        gap: 1rem;
        padding: var(--padding);
      }
      button{
        border: var(--border-button);
        border-radius: var(--border-radius-button);
        padding: var(--padding-button);
        background: var(--background-button);
        color: var(--color-button);
        font-size: var(--font-size)
      }
    `
  }
  eventHandler(e: any) {
    console.log(e)
    this.setAttribute("nameUser", e.target.nameUser.value)
    this.ready()
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${BienvenidaNjv.styles}</style>
        <form id="changeName">
          <input id="setNameUser" name="nameUser" type="text" placeholder="name" />
          <button-njv type="submit">
            <span slot="content">Send</span>
          </button-njv>
        </form>
      `
      this.shadowRoot!.querySelector("#changeName")?.addEventListener("submit", this.eventHandler.bind(this))

  }
  pruebas() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${BienvenidaNjv.styles}</style>
      
        <h2 part="h2">Bienvenid@ ${this.getAttribute("nameUser") ? this.getAttribute("nameUser"): this.nameUser}</h2>
        <form id="changeName">
        <input id="setNameUser" name="nameUser" type="text" placeholder="name" />
      <button-njv type="submit">
        <span slot="content">Send</span>
      </button-njv>
        </form>
      `
      this.shadowRoot!.querySelector("#changeName")?.addEventListener("submit", this.eventHandler.bind(this))
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { 

    if(typeof attr !== "string"){
      throw new Error("This attribute must be a string")
    }
   
   
    console.log(  this.setAttribute("nameUser", now))

  }


  static get observedAttributes() {
    return ['nameUser'];
  }
}
window.customElements.define("bienvenida-njv",BienvenidaNjv);