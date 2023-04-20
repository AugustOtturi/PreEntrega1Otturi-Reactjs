import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { fCursos } from "../../js/Cursos";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { pid } = useParams();

  useEffect(() => {
    const getProductsById = async (productId) => {
      const res = await fCursos();
      const productFind = res.find((prod) => prod.id === parseInt(productId));
      setProduct(productFind);
    };
    getProductsById(pid);
  }, [pid]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
