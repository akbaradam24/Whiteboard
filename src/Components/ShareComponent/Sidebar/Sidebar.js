import React, { useEffect, useState } from "react";
import style from "../../../Styling/ShareComponent/Sidebar.module.css";
import Home from "../../../Assets/Icons/home default.png";
import Clipboard from "../../../Assets/Icons/clipboard.png";
import Tasks from "../../../Assets/Icons/checklist.png";
import Plus from "../../../Assets/Icons/plus.png";
import Right from "../../../Assets/Icons/Sidebar left.png";
import Icons from "./Icons";
import { Modal, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTeam, postTeam } from "../../../Redux/Action/TeamAction";

export default function Sidebar() {
  const { teams } = useSelector((state) => state.teamReducer);
  const randomColor = [
    "red",
    "blue",
    "green",
    "purple",
    "red",
    "blue",
    "green",
    "red",
    "blue",
    "green",
    "purple",
    "red",
    "blue",
    "green",
  ];
  const [show, setShow] = useState(false);
  const [newTeam, setNewTeam] = useState("");
  const [sidebarLogic, setSidebarLogic] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeam());
    // eslint-disable-next-line
  }, []);

  const handleSidebarClick = () => {
    setSidebarLogic(!sidebarLogic);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      teamName: newTeam,
      createdAt: new Date(),
    };
    dispatch(postTeam(data));
    setNewTeam("");
    setShow(false);
  };
  return (
    <>
      <aside className={[sidebarLogic ? style.sidebar : style.offSidebar]}>
        <button className={style.btn_iconSidebar} onClick={handleSidebarClick}>
          <img src={Right} alt="SidebarImages" />
        </button>
        <div className={style.hideSidebar}>
          <ul className={style.unListSidebar}>
            <li className={style.listSidebar}>
              <a className={style.anchorSidebar} href="/home">
                <img src={Home} alt="Home" />
                Home
              </a>
            </li>
            <li className={style.listSidebar}>
              <a className={style.anchorSidebar} href="/boards">
                <img src={Clipboard} alt="Clipboard" />
                Boards
              </a>
            </li>
            <li className={style.listSidebar}>
              <a className={style.anchorSidebar} href="/tasks">
                <img src={Tasks} alt="Tasks" />
                Tasks
              </a>
            </li>
          </ul>
          <div className={style.line}></div>
          <div className={style.team_sidebar}>
            <p className={style.team_sidebarText}>TEAM</p>
            <button className={style.plus_button} onClick={handleShow}>
              <img src={Plus} alt="icon for add new Board" />
            </button>
          </div>
          <div className={style.team_section}>
            <ul className={style.unListSidebar}>
              {teams.map((evt, index) => (
                <li className={style.listSidebar} key={index}>
                  <a className={style.anchorSidebar} href={`/team/${evt._id}`}>
                    <Icons variant={randomColor[index]} />
                    {evt.teamName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className={style.modal_header} closeButton>
          <p className={style.modal_title}>Create Team</p>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Team Name"
            aria-label="Team Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setNewTeam(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className={style.cancel_button} onClick={handleClose}>
            Cancel
          </button>
          <button
            className={style.save_button}
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
