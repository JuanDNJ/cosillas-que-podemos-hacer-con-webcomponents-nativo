export interface Observador {
  actualizar: (payload?: any) => void
}

export interface Component {
  actualizar: (payload?: any) => void,
  render: () => void,
}