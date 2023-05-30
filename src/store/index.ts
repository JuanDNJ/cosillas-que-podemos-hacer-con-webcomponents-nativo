import { Espia } from "../core/Espia";
import { Observador } from "../core/interfaces";

const storeDefault = new Espia()


const ref: Observador = {
  actualizar: () => {
    console.log("Actualizando...");
  }
}


storeDefault.escribir(ref)