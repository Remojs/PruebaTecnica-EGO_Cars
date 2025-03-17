import React from 'react'
import styles from './GalleryCard.module.css';

const Card = ({ title, description, image }) => {
    return (
      <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    );
  };
  
  export default Card;