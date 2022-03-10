import { Popover, PopoverBody, PopoverHeader } from "react-bootstrap";
import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";

export default function PopoverCardLabel() {
  return (
    <Popover id="popover-basic" className={style.popover_label}>
      <PopoverHeader className={style.popover_label_header}>
        <div className={style.label_category_popover}>
          <div className={style.label_category}>Category</div>
        </div>
      </PopoverHeader>
      <PopoverBody className={style.popover_label_body}>
        <div className={style.popover_label_body_top}>
          Select an Option or Create One
        </div>
        <div className={style.label_all_category_container}>
          <div className={style.label_category_popover}>
            <div className={style.label_category}>Category</div>
          </div>
          <div className={style.label_category_popover}>
            <div className={style.label_category}>Category</div>
          </div>
          <div className={style.label_category_popover}>
            <div className={style.label_category}>Category</div>
          </div>
        </div>
      </PopoverBody>
    </Popover>
  );
}
