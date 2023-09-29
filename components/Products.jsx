import { useEffect, useState } from "react";
import "../src/styles/products.css"
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

	useEffect(() => {
		getData()
	}, [])

  return (
    <>
      <h2 className="title">Featured products</h2>
      <div className="grid">
          {products.map(product => (
						<Product key={product.id} product={product}/>
					))}
      </div>
    </>
  );
};
export default Products;
