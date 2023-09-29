import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, image, title } = product;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <Link to={`/products/${id}`}>More info</Link>
    </div>
  );
};
export default Product;
