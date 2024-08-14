import React from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoAddCircle, IoLogIn, IoLogOut } from "react-icons/io5";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <p className="menu-label">Management Barang</p>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag /> Products
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products/add"}>
              <IoAddCircle /> Add Product
            </NavLink>
          </li>
          <p className="menu-label">Transaksi</p>
          <li>
            <NavLink to={"/incoming-goods"}>
              <IoLogIn /> Barang Masuk
            </NavLink>
          </li>
          <li>
            <NavLink to={"/outgoing-goods"}>
              <IoLogOut /> Barang Keluar
            </NavLink>
          </li>
        </ul>
        {user && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Profile
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;
