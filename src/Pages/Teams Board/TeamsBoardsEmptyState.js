import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";
import saly17 from "../../Assets/Images/Saly-17.png";
import style from "../../Styling/Pages/Teams Boards/TeamsBoards.module.css";

export default function TeamsBoardsEmptyState() {
  return (
    <>
      <UserNavbar />
      <div className={style.main_container}>
        <SidebarStatic />
        <div className={`${style.content_wrapper} container`}>
          <div className={style.empty_state}>
            <img src={saly17} alt="icon for add new Board" />
            <p className={style.empty_state_p1}>No Boards Created</p>
            <p className={style.empty_state_p2}>Let's Make One For Your Team</p>
            <button className={style.create_board_button}>Create Board</button>
          </div>
        </div>
      </div>
    </>
  );
}
