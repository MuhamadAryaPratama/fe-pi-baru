import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1
        className="title"
        style={{ color: "#c86a5a", fontWeight: "bold", fontSize: "2rem" }}
      >
        Produk
      </h1>
      <h2 className="subtitle">List Produk</h2>
      <div className="field">
        <div className="control">
          <input
            type="text"
            className="input"
            placeholder="Search Products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="columns is-multiline">
        {filteredProducts.map((product, index) => (
          <div key={product.uuid} className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">{product.name}</p>
                <p className="subtitle">
                  Harga: {product.price} <br />
                  Jumlah: {product.quantity} <br />
                  Created By: {product.user.name}
                </p>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <Link
                    to={`/products/edit/${product.uuid}`}
                    className="button is-small is-info"
                  >
                    Edit
                  </Link>
                </p>
                <p className="card-footer-item">
                  <button
                    onClick={() => deleteProduct(product.uuid)}
                    className="button is-small is-danger"
                  >
                    Hapus
                  </button>
                </p>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
