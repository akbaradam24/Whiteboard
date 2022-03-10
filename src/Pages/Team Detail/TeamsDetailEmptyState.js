import { Overlay, Popover } from "react-bootstrap";
import saly6 from "../../Assets/Images/Saly-6.png";
import pp1 from "../../Assets/Icons/pp1.png";
import pp2 from "../../Assets/Icons/pp2.png";
import pp3 from "../../Assets/Icons/pp3.png";
import pp4 from "../../Assets/Icons/pp4.png";
import pp5 from "../../Assets/Icons/pp5.png";
import teampict from "../../Assets/Icons/team.png";


import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";

import { useState, useRef } from "react";
import style from "../../Styling/Pages/Team Detail/TeamsDetailEmpty.module.css";

export default function TeamsDetail() {
  //FOR POPOVER INVITE
  const [showInvite, setShowInvite] = useState(false);
  const [targetInvite, setTargetInvite] = useState(null);
  const ref = useRef(null);

  const handleClickInvite = (event) => {
    setShowInvite(!showInvite);
    setTargetInvite(event.target);
  };
  return (
    <>
       <UserNavbar />
      <div className={style.main_container}>
        <SidebarStatic />
        <div className={style.content_wrapper}>
          {/* CONTAINER FOR CARD */}
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
