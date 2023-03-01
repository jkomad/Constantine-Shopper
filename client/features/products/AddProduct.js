import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addProduct({name, price, description, imgUrl}));

    setName("");
    setPrice("");
    setDescription("");
    setImgUrl("");
  };

  return (
    <form className="formBox" onSubmit={handleSubmit}>
        <h3 className="addNew">Add New Product</h3>
      <input
        type="text"
        value={name}
        placeholder="Product Name"
        onChange={
          (e) => setName(e.target.value)
        }
      />
      {/* <label htmlFor="name">Last Name:</label> */}
      <input
        type="text"
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      {/* <label>description</label> */}
      <input
        type="text"
        value={description}
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* <label>imgUrl</label> */}
      <input
        type="text"
        value={imgUrl}
        placeholder="Image URL"
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <button className="addButton" type="submit">SUBMIT</button>
    </form>
  );
};

export default AddProduct;
