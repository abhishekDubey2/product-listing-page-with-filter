import React from 'react';

export default function Card({ product }) {
  console.log(product);
  return (
    <div className="card">
      <img src={product.image} alt="Avatar" />
      <div className="container-card">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}
