import React, { useEffect } from "react";
import NavbarIsLogin from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";
import style from "../../Styling/Pages/Home/Boards.module.css";
import Card from "../../Components/ShareComponent/Navbar/Card";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../Redux/Action/TasksAction";
import { getBoards } from "../../Redux/Action/BoardsAction";
// import { useParams } from "react-router";
export default function Boards() {
  const dispatch = useDispatch();
  // const { teamId } = useParams();
  // console.log(teamId);
  useEffect(() => {
    dispatch(getBoards());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getTasks());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const getTeam = useSelector((state) => state.teamReducer.teams);
  return (
    <>
      <NavbarIsLogin />
      <div className={style.boardsContainer}>
        <div className={style.SidebarStatic}>
          <SidebarStatic />
        </div>
        <div className={style.Boards}>
          <h1>Boards</h1>
          {getTeam.map((e, _id) => (
            <div key={_id} className={style.Board}>
              <h5>{e.teamName}</h5>
              <div className={style.cards}>
                <Card />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
