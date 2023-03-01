import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSingleProduct, editProductAsync } from "./singleProductSlice";

const EditProductForm = ({ product, onSubmit }) => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectSingleProduct);

  const [name, setName] = useState(selectedProduct.name || "");
  const [price, setPrice] = useState(selectedProduct.price || "");
  const [description, setDescription] = useState(
    selectedProduct.description || ""
  );
  const [imgUrl, setImgUrl] = useState(selectedProduct.imgUrl || "");

  useEffect(() => {
    setName(selectedProduct.name || "");
    setPrice(selectedProduct.price || "");
    setDescription(selectedProduct.description || "");
    setImgUrl(selectedProduct.imgUrl || "");
  }, [selectedProduct]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !price || !description || !imgUrl) {
      window.alert("Please fill out all fields!");
      return;
    }

    const confirmSave = window.confirm(
      "Are you sure you want to save these changes?"
    );

    if (confirmSave) {
      dispatch(
        editProductAsync({
          id: product.id,
          name,
          price,
          description,
          imgUrl,
        })
      ).then(() => {
        onSubmit();
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="image URL"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProductForm;
