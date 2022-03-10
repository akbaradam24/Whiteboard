import React, { useEffect } from "react";
import styles from "../../Styling/Components/Todo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../Redux/Action/TasksAction";
export default function Todo() {
  const assignedToMe = useSelector((state) => state.getTasks.task);
  console.log(assignedToMe);
  assignedToMe.map((e) => console.log(e));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {assignedToMe.map((evt, _id) => (
        <div key={_id} className={styles.TodoContainer}>
          <input className={styles.input} type="checkbox" />
          <div className={styles.textTodo}>
            <div>
              <label>{evt.title}</label>
              <p>
                {evt.boards?.title} • {evt.teams?.teamName}
              </p>
            </div>
            <p>Due 2022-03-10</p>
          </div>
        </div>
      ))}
    </>

    // <div className={styles.containerTodo}>
    //   <form className={styles.form}>
    //     <div className={styles.formInput}>
    //       <input type="checkbox" />
    //     </div>
    //     <div className={styles.formLabel}>
    //       <label>makan nasi</label>
    //       <p>Due 10 Jan 2020</p>
    //     </div>
    //   </form>
    //   <p>Design Tasks • One by Meja Putih</p>
    // </div>
  );
}
