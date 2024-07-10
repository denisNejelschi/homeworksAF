import { Link, useParams } from "react-router-dom";
import { IDummyProduct } from "./types/types";
import InitialProduct from "./types/types";
import { useEffect, useState } from "react";
import styles from "./dummyProduct.module.css";
import Spinner from "react-bootstrap/esm/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const DummyProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IDummyProduct>(InitialProduct);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const goBackToTop = () => {
    window.history.back();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.product}>
      <Link to="/DummyStore">
        <button>Back to list</button>
      </Link>
      {isLoading && <Spinner />}
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        onLoad={handleImageLoad}
      />
      <p>{product.description}</p>
      <p>Price: {product.price}$</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating}</p>
      <p>Available in stock: {product.stock}</p>
      <p>#Tags:</p>
      {product.tags.map((tag, index) => (
        <li key={index}>#{tag}</li>
      ))}
      <p>Brand: {product.brand}</p>
      <p>Weight: {product.weight} kg</p>
      <div className={styles.dimmensions}>
        <p>{product.returnPolicy}</p>
        <p>{product.minimumOrderQuantity}</p>
        <p>Dimmensions:</p>
        <ul>
          <li>Width: {product.dimensions.width}</li>
          <li>Height: {product.dimensions.height}</li>
          <li>Depth: {product.dimensions.depth}</li>
        </ul>
      </div>
      <p>Warranty: {product.warrantyInformation}</p>
      <p>Shipping info: {product.shippingInformation}</p>
      <span>{product.availabilityStatus}</span>
      <div className={styles.reviews}>
        <h4>Reviews:</h4>
        {product.reviews.map((review, index) => (
          <div key={index}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <div className={styles.reviewer}>
              <p>Review date: {review.date}</p>
              <p>Reviewer: {review.reviewerName}</p>
              <p>Reviewer's email: {review.reviewerEmail}</p>
            </div>
          </div>
        ))}
      </div>
      <p>Images:</p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {product.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`${product.title} ${index + 1}`} />
          </SwiperSlide>
        ))}
        {isLoading && <Spinner />}
      </Swiper>
      <button onClick={goBackToTop}>Back to list</button>
    </div>
  );
};

export default DummyProduct;
