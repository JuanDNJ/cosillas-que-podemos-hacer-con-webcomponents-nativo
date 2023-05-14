export type OptionsApp = {
  router: Route[]
}
export type Route = {
  path: string,
  component: HTMLElement,
  name?: string,
  children?: []
}

export type OptionsButton = {
  class: string,
  id: string,
  border: {
    color: string,
    xy: string,
    tipo: string,
    medida: string
  },
  background: {
    color: string,
    ancho: string,
    alto: string,
    transparente: boolean
  },

}
