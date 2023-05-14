export default class ITAcademy extends HTMLElement {
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
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${ITAcademy.styles}</style>
        <h1>ITAcademy</h1>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { 
    if(typeof attr !== "string"){
      throw new Error("this attribute must be a string")
    }
    console.log("Attribute changed: " + attr + " " + (now - old) )
  }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("it-academy",ITAcademy);