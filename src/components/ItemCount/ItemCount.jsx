import { useState } from "react";
const ItemCount = ({ initial, stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="Counter">
      <div className="CounterControls">
        <button onClick={incrementar} className=" btn btn-dark">
          +
        </button>
        <h4>{cantidad}</h4>
        <button onClick={decrementar} className=" btn btn-dark">
          -
        </button>
      </div>
      <div className="addCart">
        <button
          className="btn btn-dark"
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
