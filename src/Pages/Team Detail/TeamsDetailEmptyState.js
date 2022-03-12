import saly6 from "../../Assets/Images/Saly-6.png";

import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";
import style from "../../Styling/Pages/Team Detail/TeamsDetailEmpty.module.css";

export default function TeamsDetail() {
  return (
    <>
      <UserNavbar />
      <div className={style.main_container}>
        <SidebarStatic />
        <div className={style.content_wrapper}>
          <div className={style.empty_state}>
            <img src={saly6} alt="icon for add new Board" />
            <p className={style.empty_state_p1}>No List Created</p>
            <p className={style.empty_state_p2}>Let's Make One For Your Team</p>
            <button className={style.create_board_button}>Create List</button>
          </div>
        </div>
      </div>
    </>
  );
}
