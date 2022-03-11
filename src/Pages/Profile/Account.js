import React, { useEffect } from "react";
import style from "../../Styling/Pages/Profile/Account.module.css";
import BlueLogo from "../../Assets/Logos/BlueLogo.png";
import squareHome from "../../Assets/Icons/SquareHome.png";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../Redux/Action/UserAction";
import {
  changePassword,
  editProfile,
  getProfile,
} from "../../Redux/Action/ProfileAction";
import { useNavigate } from "react-router";

export default function Account() {
  const image = useSelector((state) => state.getProfile.image);
  const email = useSelector((state) => state.getProfile.email);
  const nama = useSelector((state) => state.getProfile.nama);
  const companyName = useSelector((state) => state.getProfile.companyName);
  // console.log(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChangePict = (evt) => {
    const pict = evt.target.files[0];
    const formData = new FormData();
    formData.append("image", pict);
    // formData.append("company", pict);
    // formData.append("company", pict);
    dispatch(editProfile(formData));
    console.log(formData);
  };

  //handle
  const handleOnChange = (evt) => {
    console.log(evt.target.value);
  };

  //change Password
  const handleOnChangePassword = () => {
    console.log(email);
    dispatch(changePassword(email));
  };

  //LogOut
  const handleOnClick = () => {
    dispatch(logOut());
    navigate("/");
  };
  useEffect(() => {
    dispatch(getProfile());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={style.bodyAccount}>
      <nav className={style.navbar}>
        <div className={style.navbarLeft}>
          <a href="/">
            <img src={BlueLogo} alt="logo" />
          </a>
          <a className={style.linkbBoards} href="/boards">
            <img src={squareHome} alt="logo" />
            <h5>Back to boards</h5>
          </a>
        </div>
        <div className={style.accountImageNav}>
          <img
            src={
              image ||
              "https://res.cloudinary.com/dry2yqm3h/image/upload/v1644199101/image/whiteboard/no-profile-pic_zyup0u.png"
            }
            alt="sally11"
            className={style.ImageNavbar}
          />
        </div>
      </nav>
      <div className={style.account}>
        <div className={style.accountPict}>
          <h1>Your Photo</h1>
          <div className={style.accountImage}>
            <img
              src={
                image ||
                "https://res.cloudinary.com/dry2yqm3h/image/upload/v1644199101/image/whiteboard/no-profile-pic_zyup0u.png"
              }
              alt="sally11"
              className={style.Image}
            />
          </div>
          <input
            type="file"
            placeholder="ganti"
            id="file"
            className={style.photo}
            onChange={handleOnChangePict}
          />
          <label className={style.btnUpload} htmlFor="file">
            Upload
          </label>
          <a className={style.remove} href="/">
            Remove
          </a>
        </div>
        <div className={style.accountNameRole}>
          <div className={style.accountName}>
            <p>Name</p>
            <input className={style.inputName} type="text" placeholder={nama} />
            {/* <label>{nama}</label> */}
          </div>
          <div className={style.accountRole}>
            <p>Role</p>
            <div className={style.containerDropdown}>
              <select
                id="category"
                name="Role"
                className={style.Dropdown}
                onChange={handleOnChange}
              >
                <option value="All Category">All Category</option>
                <option value="Photography">Photography</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Music">Music</option>
              </select>
            </div>
            {/* <NavDropdown className={style.NavDropdown} title="Role" menuVariant="light">
              <NavDropdown.Item>Designer</NavDropdown.Item>
              <NavDropdown.Item>Foreigner</NavDropdown.Item>
              <NavDropdown.Item>Caster</NavDropdown.Item>
            </NavDropdown> */}
          </div>
        </div>
        <div className={style.accountIndustryCompany}>
          <div className={style.accountIndustry}>
            <p>Industry</p>
            <select
              id="category"
              name="Role"
              className={style.Dropdown}
              onChange={handleOnChange}
            >
              <option value="All Category">All Category</option>
              <option value="Photography">Photography</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Music">Music</option>
            </select>
          </div>
          <div className={style.accountCompanyName}>
            <p>Company Name</p>
            <div>
              <input
                className={style.inputName}
                type="text"
                placeholder={companyName}
              />
            </div>
          </div>
        </div>
        <div className={style.Line}></div>
        <div className={style.containerEmail}>
          <div className={style.Email}>
            <h2>Email Address</h2>
            <p>Your email address is {email}</p>
          </div>
          <div className={style.btnChangeContainer}></div>
        </div>
        <div className={style.Line}></div>
        <div className={style.containerPassword}>
          <div className={style.Email}>
            <h2>Password</h2>
          </div>
          <div className={style.btnChangeContainer}>
            <button
              className={style.btnChange}
              onClick={handleOnChangePassword}
              type="button"
            >
              Change
            </button>
          </div>
        </div>
        <div className={style.containerSaveLogout}>
          <button className={style.btnChangelogout} type="button">
            Save
          </button>
          <button
            className={style.btnChangelogout}
            type="button"
            onClick={handleOnClick}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
