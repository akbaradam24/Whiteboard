import logo from "../../../Assets/Logos/BlueLogo.png";
import search from "../../../Assets/Icons/search.png";
import notification from "../../../Assets/Icons/ringing bell.png";
import help from "../../../Assets/Icons/help.png";
import profile from "../../../Assets/Icons/default pofile picture.png";
import style from "../../../Styling/ShareComponent/navbarUser.module.css";
import { useSelector } from "react-redux";

export default function UserNavbar() {
  const { token } = useSelector((state) => state.getAuthRegister);
  const image = useSelector((state) => state.getProfile.image);

  return (
    <>
      <nav
        className={`${style.navbar} navbar fixed-top navbar-expand-lg navbar-expand-md navbar-expand-sm mx-auto`}
      >
        <div className={`${style.main_container} container`}>
          <a className={style.left_container} href="/">
            <img src={logo} alt="whiteboard" className={style.logo} />
          </a>
          {token ? (
            <div className={style.right_container}>
              <div
                className={`${style.search} d-flex align-items-center p-2 bg-light`}
              >
                <div className={style.logo_wrapper}>
                  <img
                    className={style.search_icon}
                    src={search}
                    alt="search-icon"
                  />
                </div>
                <div className={style.input_wrapper}>
                  <form className="form-input d-flex align-items-center">
                    <input
                      className={`${style.input} form-control mx-2 px-0 bg-light`}
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ border: "none" }}
                    />
                  </form>
                </div>
              </div>
              <button className={style.notification_wrapper}>
                <img
                  className={style.notification_pict}
                  src={notification}
                  alt="notification bell"
                />
              </button>
              <a className={style.help_wrapper} href="/">
                <img className={style.help_pict} src={help} alt="helpdesk" />
              </a>
              <a className={style.profile_wrapper} href="/profile">
                <img
                  src={
                    image ||
                    "https://res.cloudinary.com/dry2yqm3h/image/upload/v1644199101/image/whiteboard/no-profile-pic_zyup0u.png"
                  }
                  alt="sally11"
                  className={style.ImageNavbar}
                />
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
}
