export default class ButtonNjv extends HTMLElement {
  constructor() {
    super()

  }
  connectedCallback() {
    this.ready()
  }
  static get styles() {
    return /* CSS */ `
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
    return /*CSS*/ `
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
  template(): HTMLTemplateElement {
    const template = document.createElement("template")
    const style = document.createElement("style")
    style.textContent = ButtonNjv.styles
    template.setAttribute("shadowroot", "open")
    template.appendChild(style)
    template.id = "button"
    const btn = document.createElement("button")
    btn.textContent = "Button Njv"
    btn.classList.add("btn")
    template.appendChild(btn)

    return template
  }
  static createButton(textContent: string, options: {}) {
    const btn = document.createElement("button")

  }
  // TODDO: Seguir por aqui, a divertirse
  ready() {


    const template = this.template()
    const {content} = template
    this.append(content.cloneNode((true)))

    if (this.hasAttribute("form")) {
      const form = this.querySelector(`#${this.getAttribute("id-btn")}`) as HTMLButtonElement
    }
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
  attributeChangedCallback(attr: any, old: any, now: any) { }


  static get observedAttributes() {
    return [''];
  }
}
window.customElements.define("button-njv", ButtonNjv);