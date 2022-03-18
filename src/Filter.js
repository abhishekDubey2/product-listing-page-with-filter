import React, { useState, useEffect } from 'react';

export default function Filter({ products }) {
  /*   let [isChecked, setIsChecked] = useState(false);
  function toggleCheckboxChange() {
    setIsChecked({ isChecked: !isChecked });
  } */
  const [categories, setCategories] = useState('');
  async function loginUser() {
    return fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }
  useEffect(() => {
    loginUser();
  }, []);
  return (
    <div className="filter-container">
      <h2>Filter</h2>
      <h3 className="filter-header">Gender</h3>
      {categories
        ? categories.map((categorie, index) => {
            return (
              <div key={index} className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    value={categorie}
                    /*           checked={isChecked}
                        onChange={toggleCheckboxChange} */
                  />
                  {categorie}
                </label>
              </div>
            );
          })
        : null}
    </div>
  );
}
