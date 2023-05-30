// Base de todo lo complejo. 
import { Observador } from "./interfaces"

export class Espia {
  
  observadores: Observador[] = []

  constructor() {}

  escribir(observador: Observador): void{
    this.observadores = [...this.observadores,observador]
  }

  limpiar(observador: Observador) : void {
    this.observadores.filter(record => record != observador)
  }

  notificar(datos: any): void{
    this.observadores.forEach((record) => {
      record.actualizar(datos)
    })
  }

}