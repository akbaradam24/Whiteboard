import { Popover, PopoverBody, PopoverHeader } from "react-bootstrap";
import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";

import pp1 from "../../Assets/Icons/pp1.png";
import pp2 from "../../Assets/Icons/pp2.png";
import pp3 from "../../Assets/Icons/pp3.png";
import pp4 from "../../Assets/Icons/pp4.png";
import pp5 from "../../Assets/Icons/pp5.png";

export default function PopoverCardAssign() {
  return (
    <Popover id="popover-basic" className={style.popover_asign}>
      <PopoverHeader className={style.popover_asign_header}>
        <span className={style.asign_name}>Hamdani</span>
        <span className={style.asign_name}>Hamdani</span>
        <span className={style.asign_name}>Hamdani</span>
      </PopoverHeader>
      <PopoverBody className={style.popover_assign_body}>
        <div className={style.popover_label_body_top}>
          Select an Option or Create One
        </div>
        <ol className={style.asign_pp_container}>
          <li className={style.pp_wrapper}>
            <img
              className={style.profile_picture_asign}
              src={pp1}
              alt="profile"
            />
            <span>Hamdani</span>
          </li>
          <li className={style.pp_wrapper}>
            <img
              className={style.profile_picture_asign}
              src={pp2}
              alt="profile"
            />
            <span>Adam</span>
          </li>
          <li className={style.pp_wrapper}>
            <img
              className={style.profile_picture_asign}
              src={pp3}
              alt="profile"
            />
            <span>Fakhri</span>
          </li>
          <li className={style.pp_wrapper}>
            <img
              className={style.profile_picture_asign}
              src={pp4}
              alt="profile"
            />
            <span>Juan</span>
          </li>
          <li className={style.pp_wrapper}>
            <img
              className={style.profile_picture_asign}
              src={pp5}
              alt="profile"
            />
            <span>Khalid</span>
          </li>
        </ol>
      </PopoverBody>
    </Popover>
  );
}
