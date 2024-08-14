import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "../api/axios";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  const [totalStock, setTotalStock] = useState(0);
  const [availableProducts, setAvailableProducts] = useState(0);
  const [outOfStockCount, setOutOfStockCount] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:5000/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);

      // Calculate total stock, available products, and out-of-stock count
      const stock = response.data.reduce(
        (acc, product) => acc + product.quantity,
        0
      );
      const available = response.data.filter(
        (product) => product.quantity > 0
      ).length;
      const outOfStock = response.data.filter(
        (product) => product.quantity === 0
      ).length;

      setTotalStock(stock);
      setAvailableProducts(available);
      setOutOfStockCount(outOfStock);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1
        className="title"
        style={{ color: "#ff6347", fontWeight: "bold", fontSize: "2.5rem" }}
      >
        Dashboard
      </h1>
      <h2 className="subtitle">
        Welcome Back{" "}
        <strong
          style={{ color: "#c86a5a", fontWeight: "bold", fontSize: "1.4rem" }}
        >
          {user && user.name}
        </strong>
      </h2>
      <div className="columns">
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Total Stock</p>
            </header>
            <div className="card-content">
              <div className="content">
                <h5 className="title is-5">{totalStock}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Stok Produk Tersedia</p>
            </header>
            <div className="card-content">
              <div className="content">
                <h5 className="title is-5">{availableProducts}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Stok Produk Tidak Tersedia</p>
            </header>
            <div className="card-content">
              <div className="content">
                <h5 className="title is-5">{outOfStockCount}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
