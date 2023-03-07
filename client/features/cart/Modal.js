import React from "react";
import Payment from "./Payment";
import "../styles/Cart.css";

const Modal = ({ setIsOpen }) => {
  return (
    <div className="darkBG centered">
      <div className="whiteBackground">
        <Payment />
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Cancel Payment
        </button>
      </div>
    </div>
  );
};

export default Modal;
