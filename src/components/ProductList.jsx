import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/ProductList.css";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? product.category === category : true)
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="grid">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>Rating: {product.rating?.rate || "N/A"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
