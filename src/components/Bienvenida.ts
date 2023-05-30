import "../components/Button"
import Base from "../core/Base";
export default class BienvenidaNjv extends Base {
  nameUser: string = JSON.parse(localStorage.getItem('nameUser')!) ?? 'unknown';
  constructor() {
    super()
  }
  connectedCallback() {
    this.ready()
    this.addEventListener("router-link", this.eventHandler)
    this.addEventListener("clickButton", (e: CustomEventInit) => {
      // jajaja pensaba que daria error jajajaja
      console.log(e.detail)
      const form = this.shadowRoot!.querySelector("#changeName") as HTMLInputElement
      // Fua estoy bloqueado
    })
  }
  static get styles() {
    
    return /*html*/ `
      ${super.styles}
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
  mounted(callback: (arg: this) => any) {
      
  }
  pruebas() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${BienvenidaNjv.styles}</style>
      
        <h2 part="h2">Bienvenid@ ${this.getAttribute("nameUser") ? this.getAttribute("nameUser"): this.nameUser}</h2>
        <form id="changeName">
        <input id="setNameUser" name="nameUser" type="text" placeholder="name" />
      <button-njv>
        <span slot="content">Send</span>
      </button-njv>
        </form>
      `
      this.shadowRoot!.querySelector("#changeName")?.addEventListener("submit", this.eventHandler.bind(this))
  }
 
  attributeChangedCallback(attr:any, old:any, now:any) { 

    if(typeof attr !== "string"){
      throw new Error("This attribute must be a string")
    }
    console.log(  this.setAttribute("nameUser", now), old)

  }


  static get observedAttributes() {
    return ['nameUser'];
  }
}
window.customElements.define("bienvenida-njv",BienvenidaNjv);