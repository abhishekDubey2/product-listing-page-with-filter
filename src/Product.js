import React from 'react';
import './style.css';
import Card from './Card.js';
import Filter from './Filter.js';
export default function Product({ products }) {
  return (
    <div className="container">
      <div className="filter">
        <Filter products={products} />
      </div>
      <div className="product">
        {products
          ? products.map((product) => {
              return <Card product={product} />;
            })
          : null}
      </div>
    </div>
  );
}
