const debounce = (fn: any, time: number = 20) => {
  let timeout: any

  return () => {
    const functionCall = () => fn.apply(this)
    
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
  }
}


export default debounce