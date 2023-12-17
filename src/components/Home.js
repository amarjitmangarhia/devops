import React, { useContext, useEffect } from "react";

import styles from "./Products.module.css";
import Product from "./Product";
import { ProductContext } from "./ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {products.map((product) => {
          return (
            <Product
              key={product._id}
              id={product._id}
              name={product.Name}
              image={product.Image}
              price={product.Price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
