import { useState } from 'react'
import '../css/carrito.css'
const Carrito = ({stock, initial}) => {
    const [count, setCount] = useState(initial)

    function mas() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function menos() {
        if (count > initial) {
            setCount(count - 1)
        }
    }
  return (
    <div className="carrito">
        <div className='btnmenos'>
            <button class="btn btn-secondary" onClick={menos}>-</button>
        </div>
        <div className='monto'>{count}</div>
        <div className='btnmas'>
            <button class="btn btn-primary" onClick={mas}>+</button>
        </div>
    </div>
  )
}
export default Carrito