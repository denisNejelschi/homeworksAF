import { useEffect, useState } from "react";
import style from "./fakeStore.module.css";

interface Iproduct {
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
          <div className={style.card}>
            <h2>{product.title}</h2>
            <h3>{product.price}$</h3>
            <p>{product.description}</p>
            <span>{product.category}</span>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </>
  );
};
export default FakeStore;
