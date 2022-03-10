import React, { useEffect } from "react";
import style from "../../../Styling/Components/card.module.css";
import Icon from "../../../Components/ShareComponent/Sidebar/Icons";
import { useDispatch, useSelector } from "react-redux";
// import { getBoard } from "../../../Redux/Action/BoardAction";
import { getBoards } from "../../../Redux/Action/BoardsAction";
export default function Card() {
  const assignedToMe = useSelector((state) => state.getTasks.task);
  const boardsResult = useSelector((state) => state.Boards.result);
  console.log(boardsResult);
  // const getTeam = useSelector((state) => state.teamReducer.teams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {boardsResult.map((board, index) => (
        <section className={style.Card}>
          <div className={style.stripedCard}></div>
          <div className={style.Icons}>
            <Icon variant="blue" />
          </div>
          <div className={style.containerTeam}>
            <h2 className={style.projectTitle}>{board.title}</h2>
            <p className={style.teamProject}>on {board.teams.teamName} </p>
            <h2 className={style.projectShortcut}>QUICK LINKS</h2>
            <div className={style.projectTask}>
              <a href="/" className={style.teamTask}>
                My open tasks
              </a>
              <p className={style.counter}>{assignedToMe.length}</p>
            </div>
            <div className={style.projectTask}>
              <a href="/" className={style.taskDone}>
                Done
              </a>
              <p className={style.counter}>2</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
