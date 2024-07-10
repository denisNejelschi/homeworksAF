import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Iproduct } from "../FakeStore";
import styled from "./product.module.css";
import MyButton from "../../myButton/MyButton";
import { faBackward, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const { id } = useParams();
  const initialProduct: Iproduct = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  };
  const [product, setProduct] = useState<Iproduct>(initialProduct);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div className={styled.product}>
      {product.title && (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>Short description:{product.description}</p>
          <p>Price:{product.price}$</p>
          <p>Category:{product.category}</p>
          <p>Rating:{product.rating.rate}</p>
          <p>Number of reviews:{product.rating.count}</p>
          <br />
          <div className={styled.buttons}>
            <Link to="/FakeStore">
            
            <button className={styled.button} type="button">Back</button>                       
            
            </Link>
            
          </div>
        </>
      )}
    </div>
  );
};
export default Product;
