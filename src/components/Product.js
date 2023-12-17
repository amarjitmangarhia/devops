import React, { useContext } from "react";
import styles from "./Product.module.css";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();
  const onClickHandler = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div onClick={() => onClickHandler(props.id)} className={styles.container}>
      <div className={styles.product}>
        <h2>{props.name}</h2>

        <img className={styles.image} src={props.image} />
        <div className={styles.info}>
          <p>${props.price}</p>
          <button>More</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
