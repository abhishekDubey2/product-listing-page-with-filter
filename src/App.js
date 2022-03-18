import React, { useEffect, useState } from 'react';
import ProductCard from './Product.js';

export default function App() {
  const [data, setData] = useState('');
  async function loginUser() {
    return fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }
  useEffect(() => {
    loginUser();
  }, []);
  return (
    <div>
      <ProductCard products={data} />
    </div>
  );
}
