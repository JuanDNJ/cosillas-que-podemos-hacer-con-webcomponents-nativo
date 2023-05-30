export const dispatch = (nameEvent: string, options: CustomEventInit, detail?: any) : CustomEvent=> {
  if(typeof detail === 'object' && Object.keys(detail).length){
    console.log("Si")
    options = {
      bubbles: true,
      composed: true,
      detail: detail
    }
  }else{
    options = {
      bubbles: true,
      composed: true
    }
  }
  const create = new CustomEvent(nameEvent, options)

  return create
}