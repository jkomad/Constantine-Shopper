import "../styles/User.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectUser, fetchSingleUser, clearUserState } from "./userSlice";
import EditUser from "../editUserForm/EditUser";
import { me } from "../auth/authSlice";
import {
  fetchOrderHistory,
  selectOrderHistory,
} from "../orderHistory/orderHistorySlice";

const User = () => {
  const user = useSelector(selectUser);
  const orderHistory = useSelector(selectOrderHistory);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const { id } = useParams();
  const [editStatus, setEditStatus] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSingleUser(id));
    dispatch(fetchOrderHistory(id));
  }, [editStatus]);
  console.log(orderHistory);

  const handleClick = () => {
    dispatch(clearUserState());
    navigate("/users");
  };

  return (
    <>
      {!editStatus ? (
        <div className="user-container">
          <div className="single-user">
            <img className="user-pic" src={user.imgUrl} />
            <h1>{user.username}</h1>
            <h2>{user.email}</h2>
            <h3>{user.address}</h3>
            <div className="buttons">
              {!isAdmin ? (
                <></>
              ) : (
                <button className="back-button" onClick={handleClick}>
                  View All Users
                </button>
              )}
              <button
                className="edit-button"
                onClick={() => setEditStatus(true)}
              >
                Edit
              </button>
            </div>
            <h3>ORDER HISTORY:</h3>
            <div>
              {orderHistory.map((order) => (
                <div className="orderContainer" key={order.id}>
                  <p>{`Order#: ${order.id}`}</p>
                  <p>{`Total: $${order.total}.00`}</p>
                  <p>{`Created: ${order.createdAt}.00`}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="user-container">
            <div className="single-user">
              <img className="user-pic" src={user.imgUrl} />
              <h1>{user.username}</h1>
              <h2>{user.email}</h2>
              <h3>{user.address}</h3>
            </div>
          </div>
          <EditUser id={user.id} editStatus={setEditStatus} />
        </div>
      )}
    </>
  );
};

export default User;
