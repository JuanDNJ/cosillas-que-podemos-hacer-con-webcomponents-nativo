import { dispatch } from "../helpers"

export default class ButtonNjv extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this.ready()
    const button = this.shadowRoot!.querySelector('button') as HTMLButtonElement
    if(button){
      button.addEventListener("click", this.handleClickEvent.bind(this))
    }
  }
  static get styles() {
    return /*html*/ `
      :host{
        display: block;
      }
      button.btn{
        border: var(--border-button);
        border-radius: var(--border-radius-button);
        padding: var(--padding-button);
        background: var(--background-button);
        color: var(--color-button);
        font-size: var(--font-size);
        cursor: pointer
      }
      .btn-disabled{
          color: var(--color-cuatro);
          border-color: var(--color-dos)
      }
      ::slotted(content){
        border: 4px solid red;
      }
    `
  }
  static get buttonStyle() {
    return /*html*/ `
      button.btn{
        border: var(--border-button);
        border-radius: var(--border-radius-button);
        padding: var(--padding-button);
        background: var(--background-button);
        color: var(--color-button);
        font-size: var(--font-size);
        cursor: pointer
      }
      .btn-disabled{
          color: var(--color-cuatro);
          border-color: var(--color-dos)
      }
      /*
      ::slotted(content){
        border: 4px solid red;
      }
      */
    `
  }
  template(): HTMLTemplateElement {
    const template = document.createElement("template")
    template.id = "button"
    const style = document.createElement("style")
    style.textContent = ButtonNjv.styles
   
    const btn = document.createElement("button")
    btn.textContent = "Button Njv"
    btn.classList.add("btn")

    template.innerHTML = /*html*/ `
      <style>
        ${ButtonNjv.styles}
      </style>
      <button type="submit">
        ${this.getAttribute('text') ?? `<slot name="content">Button NJV</slot>`}
      </button>
    `
    return template
  }
  handleClickEvent(e: Event) {
    const sendEvent : CustomEvent = dispatch("clickButton",{}, e);
   
    console.log(e)
    this.dispatchEvent(sendEvent)
  }
  // TODDO: Seguir por aqui, a divertirse
  ready() {
    const template = this.template()
    console.log(template)
    this.shadowRoot!.appendChild(template.content.cloneNode((true)))
  }

  disconnectedCallback() {
    this.innerHTML = /* html */ "";
  }

  funcion() {
    this.innerHTML = /*html*/ `
        <style>${ButtonNjv.styles}</style>
        <button 
          id="${this.getAttribute("idBtn") ?? 'btnNjv'}" 
          type="${this.getAttribute("type") ?? 'button'}" 
          class="${this.hasAttribute('disabled') ? 'btn-disabled' : 'btn'}"
          ${this.hasAttribute('disabled') ? 'disabled' : ''}
        >
          ${this.getAttribute('text') ?? `<slot name="content">Button NJV</slot>`}
        </button>
      `
  }

  attributeChangedCallback(attr: any, old: any, now: any) { 
    if(typeof attr === 'string'){
      throw new Error("attribute must be a string")
    }
    console.log("attribute changed", attr, now, old)
  }

  static get observedAttributes() {
    return [''];
  }

}

window.customElements.define("button-njv", ButtonNjv);