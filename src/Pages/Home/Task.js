import React, { useEffect } from "react";
import Todo from "../../Components/Assets/Todo";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";
import style from "../../Styling/Pages/Home/Task.module.css";
import NavbarIsLogin from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../Redux/Action/TasksAction";
export default function Task() {
  const assignedToMe = useSelector((state) => state.getTasks.task);
  console.log(assignedToMe);
  const title = assignedToMe.map((e) => console.log(e));
  console.log(title);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <NavbarIsLogin />
      <div className={style.Task}>
        <div className={style.ContainerSidebar}>
          <SidebarStatic className={style.Sidebar} />
        </div>
        <div className={style.ContainerTodo}>
          <h1 className={style.TaskFont}>Tasks</h1>
          <div className={style.TaskAssigned}>
            <h5>Assigned to me</h5>
            <p className={style.TaskCounter}>{assignedToMe.length}</p>
          </div>
          <div className={style.Line}></div>
          <div className={style.Todos}>
            <Todo />

            {/* <button className={style.ButtonLoadMore} type="button">
              Load More
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
