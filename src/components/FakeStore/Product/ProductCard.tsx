
import styled from "./productCard.module.css";
import { Link } from "react-router-dom";
import MyButton from "../../myButton/MyButton";
import { Iproduct } from "../FakeStore";


const ProductCard = ({ products }: { products: Iproduct[] }) => {
    return (
        <div className={styled.cardContainer}>
            {products.map((product) => (
                <div key={product.id} className={styled.card}>
                    <h2>{product.title}</h2>
                    <p>{product.category}</p>
                    <img src={product.image} alt={product.title} />
                    <p>Price: {product.price} $</p>
                    <p>{product.description}</p>
                    <p>Rating: {product.rating.rate}</p>
                    <Link to={String(product.id)}>
                        <button className={styled.button} type="button">View Details</button>                       
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;


