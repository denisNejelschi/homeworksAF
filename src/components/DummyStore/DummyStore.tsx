import  { useEffect, useState } from "react";
import { IDummyProduct } from "./types/types";
import styles from "./dummyStore.module.css";

import { Link } from "react-router-dom";

const DummyStore = () => {
  const [products, setProducts] = useState<IDummyProduct[]>([]);
  const [seenCategories, setSeenCategories] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products); 
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
    
  }, []);
  const renderCategories = () => {
    const categories = products.map((product) => product.category);
    const uniqueCategories = new Set(categories);
    const sortedCategories = Array.from(uniqueCategories).sort();
    setSeenCategories(sortedCategories);
    return sortedCategories;
  }
  useEffect(() => {
    
    if (products.length > 0) {
      renderCategories();
    }
  }, [products]);
  const renderProducts = (category: string) => {
    const filteredProducts = products.filter((product) => product.category === category);
    return filteredProducts;
  }
  const showAllProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <h1>Dummy Store</h1>
      <p>Homework 49</p>
      <div className={styles.buttons}>
        {seenCategories.map((category) => (
            <button key={category} onClick={() => setProducts(renderProducts(category))} className={styles.button} style={{  width: "100px", borderRadius: "18px" , color: "white" }}>{category} </button>
        ))}
        <button onClick={() => showAllProducts()} style={{  width: "100px", borderRadius: "18px", color: "#FC427B" }}>All</button>
      </div>
      <div className={styles.container}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
           <Link to={String(product.id)}>
           <button className={styles.button} style={{  width: "100px", borderRadius: "18px"  }}> about</button>            
           </Link>
          </div>//знаю что костыль, иначе никак не работает, постороние стили лезут и лезут
        ))}
      </div>
    </div>
  );
};

export default DummyStore;
