import { useEffect, useState } from "react";
import ProductCard from  './Product/ProductCard';

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
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []); 

  return (
    <>
      <ProductCard products={products} />
    </>
  );
};

export default FakeStore;
