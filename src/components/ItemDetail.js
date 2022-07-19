import '../css/ItemDetail.css'
import Carrito from './Carrito'
const ItemDetail = (props) => {
  
  const {id,thumbnail,price,title,description} = props.producto

  return (
    <>
        <div className="container " key={id}>
          <div className="bloque_detalle card-compact w-96 bg-base-100 shadow-xl separacion">
            <div className='imagen'>
              <img src={thumbnail} alt='' className='object-contain'  />
            </div>
            <div className='texto'>
              <div className='titulo'>{title}</div>
              <div className='descripcion'><div className='dsletras'>{description}</div></div>
              <div className='precio'>{price}$</div>
              <div className='btn_comprar'>
                <button class="btn">Comprar</button>
                <div className='contador_carrito'><Carrito stock={5} initial={1}/></div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
export default ItemDetail