export default class Componente extends HTMLElement  {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  static get styles(): string {
    return /*html*/ `
      :host{
        display: block;
      }
    `
  }
  mounted(callback: (arg: this) => any) {
    return callback(this)
  }
  actualizar(): void {

  }
  render(): void {}

  attributeChangedCallback(attr: any, old: any, now: any) {

    if (typeof attr !== "string") {
      throw new Error("This attribute must be a string")
    }
    console.log("Elemento padre")
    console.table({attr, now, old})

  }
  static get observedAttributes() {
    return [''];
  }
}
