import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../../stores/actions/profile";
import axios from "../../utils/axios";
import { toast, ToastContainer } from "react-toastify";

const Account = () => {
  const user = useSelector((state) => state.auth);
  const profileUser = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });
  useEffect(() => {
    dispatch(profile(user.idUser)).then((res) => {
      setForm({
        ...form,
        firstName: res.value.data.data[0].firstName,
        lastName: res.value.data.data[0].lastName,
        email: res.value.data.data[0].email,
        phoneNumber: res.value.data.data[0].phoneNumber
      });
    });
  }, []);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = (e) => {
    e.preventDefault();
    const updatePassword = {
      newPassword: newPassword,
      confirmPassword: confirmPassword
    };
    axios
      .patch(`user/updatePassword/${user.idUser}`, updatePassword)
      .then((res) => {
        console.log(res);
        toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    axios
      .patch(`user/updateProfile/${user.idUser}`, form)
      .then((res) => {
        dispatch(profile(user.idUser));
        toast.success(res.data.msg);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Details Information</h2>
      <div className="line"></div>
      <form onSubmit={handleUpdateProfile}>
        <div className="row">
          <div className="col-6">
            <div className="user__content--desc">
              <span>First Name</span>
            </div>
            <div className="user__content--input">
              <input
                type="text"
                placeholder="jonas"
                value={form.firstName || ""}
                name="firstName"
                onChange={onChangeInput}
              />
            </div>
            <div className="user__content--desc">
              <span>E-mail</span>
            </div>
            <div className="user__content--input">
              <input
                type="email"
                placeholder="jonasrodrigu123@gmail.com"
                value={form.email || ""}
                name="email"
                readOnly
                onChange={onChangeInput}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </div>
          <div className="col-6">
            <div className="user__content--desc">
              <span>Last Name</span>
            </div>
            <div className="user__content--input">
              <input
                type="text"
                placeholder="El Rodriguez"
                value={form.lastName || ""}
                name="lastName"
                onChange={onChangeInput}
              />
            </div>
            <div className="user__content--desc">
              <span>Phone Number</span>
            </div>
            <div className="user__content--input">
              <input
                type="number"
                placeholder="+62 | 81445687121"
                value={form.phoneNumber || ""}
                name="phoneNumber"
                onChange={onChangeInput}
              />
            </div>
          </div>
        </div>
      </form>
      <h2>Account and Privacy</h2>
      <div className="line"></div>
      <form onSubmit={handlePassword}>
        <div className="row">
          <div className="col-6">
            <div className="user__content--desc">
              <span>New Password</span>
            </div>
            <div className="user__content--input">
              <input
                type="password"
                placeholder="Write your new password"
                name="newPassword"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Update Password
            </button>
          </div>
          <div className="col-6">
            <div className="user__content--desc">
              <span>Confirm Password</span>
            </div>
            <div className="user__content--input">
              <input
                type="password"
                placeholder="Confirm your new password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Account;
