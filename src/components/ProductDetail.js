import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductById = async () => {
      const fetchedProduct = await fetchProductFromServer(id);

      setProduct(fetchedProduct);
    };

    fetchProductById();
  }, [id]);

  const fetchProductFromServer = async (productId) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return products.find((product) => product._id === productId);
  };

  if (!product) {
    return (
      <div className={styles.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div
      style={{
        padding: "20px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card d-flex align-items-center justify-content-center"
        style={{ maxWidth: "400px" }}
      >
        <img
          src={product.Image}
          alt={product.Name}
          className="card-img-top img-fluid"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{product.Name}</h5>
          <p className="card-text">Price: ${product.Price}</p>
          <p className="card-text">Description: {product.Description}</p>
          <button type="button" className="btn btn-success">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
