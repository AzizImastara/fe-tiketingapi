import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import "./index.css";
import Navs from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Account from "../../../components/AccountSettings";
import OrderHistory from "../../../components/OrderHistory";
import axios from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../../stores/actions/profile";
import { toast, ToastContainer } from "react-toastify";

// import { connect } from "react-redux";

const User = (props) => {
  const [active, setActive] = useState(true);
  const user = useSelector((state) => state.auth);
  const profileUser = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profile(user.idUser));
  }, []);

  const inputFile = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const updateImage = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    axios
      .patch(`user/updateImage/${user.idUser}?type=user`, formData)
      .then((res) => {
        console.log(res);
        toast.success(res.data.msg);
        dispatch(profile(user.idUser));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navs />
      <div className="user__bg">
        <div className="container">
          <div className="row user__layout">
            <div className="col-lg-4 col-md-12 user__profile">
              <div className="user__header--image">
                <img
                  src={
                    profileUser.data.image
                      ? `http://localhost:3001/uploads/user/${profileUser.data.image}`
                      : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                  }
                />
                <div className="user__update--image">
                  <button onClick={onButtonClick}>Update Image</button>
                  <input
                    type="file"
                    ref={inputFile}
                    style={{ display: "none" }}
                    onChange={updateImage}
                    name="image"
                  />
                </div>
                <h2>{profileUser.data.firstName || ""}</h2>
                <h6>{profileUser.data.email || ""}</h6>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 user__account">
              <div className="account__settings">
                <div className="account__settings--button">
                  <h2
                    onClick={() => setActive(true)}
                    style={
                      active
                        ? {
                            color: "#14142b",
                            padding: "12px",
                            borderBottom: "1px solid #14142b",
                            cursor: "pointer"
                          }
                        : { color: "#aaa", padding: "12px", cursor: "pointer" }
                    }
                  >
                    Details Account
                  </h2>
                  <h2
                    onClick={() => setActive(false)}
                    style={
                      active
                        ? { color: "#aaa", padding: "12px", cursor: "pointer" }
                        : {
                            color: "#14142b",
                            padding: "12px",
                            borderBottom: "1px solid #14142b",
                            cursor: "pointer"
                          }
                    }
                  >
                    Order History
                  </h2>
                </div>
                {active ? <Account /> : <OrderHistory />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default User;
