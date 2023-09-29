import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../src/styles/singleProduct.css";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const { title, image, description, category } = product;

  return (
    <>
      <Link to={-1}>Go back</Link>
      <div className="productDetails">
        <div className="cardProduct">
          <img src={image} alt={title} />
          <div className="infoProduct">
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{category}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
