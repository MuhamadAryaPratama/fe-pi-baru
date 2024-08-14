import React, { useEffect } from "react";
import Layout from "./Layout";
import FormAddOutgoingGoods from "../components/FormAddOutgoingGoods";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddOutgoingGoods = () => {
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
      <FormAddOutgoingGoods />
    </Layout>
  );
};

export default AddOutgoingGoods;
