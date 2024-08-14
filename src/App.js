import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./pages/Users";
import Products from "./pages/Products";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import AddIncomingGoods from "./pages/AddIncomingGoods";
import AddOutgoingGoods from "./pages/AddOutgoingGoods";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/incoming-goods" element={<AddIncomingGoods />} />
          <Route path="/outgoing-goods" element={<AddOutgoingGoods />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;