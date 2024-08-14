import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddIncomingGoods from "../components/FormAddIncomingGoods";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddIncomingGoods = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormAddIncomingGoods />
    </Layout>
  );
};

export default AddIncomingGoods;
