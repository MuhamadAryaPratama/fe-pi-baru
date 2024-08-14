import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const FormAddOutgoingGoods = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveOutgoingGoods = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/outgoing-goods", {
        productName: productName,
        quantity: quantity,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1
        className="title"
        style={{ color: "#c86a5a", fontWeight: "bold", fontSize: "2rem" }}
      >
        Barang Keluar
      </h1>
      <h2 className="subtitle">Tambah Barang Keluar</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveOutgoingGoods}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Produk</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Nama Produk"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Jumlah Barang Keluar"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddOutgoingGoods;
