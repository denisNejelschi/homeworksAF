import { useEffect, useState } from "react";
import style from "./fakeStore.module.css";
import MyButton from "../myButton/MyButton";
import { faCartPlus, faICursor } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const FakeStore = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);
  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }
  useEffect(() => {
    getData();
  }, [products]);

  return (
    <>
      <div>Products</div>
      <div className={style.container}>
        {products.map((product) => (
          <div key={product.id} className={style.card}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <br />
            <br />
            <Link className={style.button_link} to={String(product.id)}>
              <MyButton name="get info" type="button"   />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default FakeStore;
