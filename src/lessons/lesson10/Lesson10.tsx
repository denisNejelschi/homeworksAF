import { useEffect, useState } from "react";
import styles from "./lesson10.module.css";
import Counter from "./counter/Counter";
import CounterProps from "./counter/Counter";

interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Lesson10 = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [count, setCount] = useState<number>(10);

  async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    // console.log("getProducts только вначале и при counter !");
  }

  const changeToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <h3>Lesson {count}</h3>
        <div className={styles.menu}>
          <a href="/">Home</a>
          <a href="/">Info</a>
          <a href="/">Profile</a>
        </div>
        <span className={styles.burger} onClick={changeToggle}>
          ≡
        </span>
        <div className={`${styles.burgerMenu} ${toggle ? styles.show : ""}`}>
          <a href="/">Home</a>
          <a href="/">Info</a>
          <a href="/">Profile</a>
        </div>
      </header>

      {!toggle && <CounterProps setCount={setCount} count={count} />}

      <ul>
        {products.map((el) => (
          < div className={styles.card}>
            <li key={el.id}>{el.title}</li>
            <p>{el.price}$</p>
            <p>{el.category}</p>
            <img src={el.image} alt={el.title} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Lesson10;
