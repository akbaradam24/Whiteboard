import {
  Overlay,
  Popover,
  OverlayTrigger,
  PopoverBody,
  PopoverHeader,
} from "react-bootstrap";

import profile from "../../Assets/Icons/default pofile picture.png";
import lowest from "../../Assets/Icons/lowest.png";
import archive from "../../Assets/Icons/archive.png";
import changePriority from "../../Assets/Icons/change priority.png";
import label from "../../Assets/Icons/label.png";
import assignTo from "../../Assets/Icons/arrow right.png";
import pp1 from "../../Assets/Icons/pp1.png";
import pp2 from "../../Assets/Icons/pp2.png";
import pp3 from "../../Assets/Icons/pp3.png";
import attach from "../../Assets/Icons/attach.png";
import check from "../../Assets/Icons/check.png";
import greenCheck from "../../Assets/Icons/green check.png";
import low from "../../Assets/Icons/low.png";
import high from "../../Assets/Icons/high.png";
import highest from "../../Assets/Icons/highest.png";

import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../Redux/Action/CardAction";
import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";

export const ListCard = ({ props }) => {
  const { cards, loading, error } = useSelector((state) => state.cardReducer);
  const ref = useRef(null);
  const [showCard, setShowCard] = useState(false);
  const [targetCard, setTargetCard] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards(props));
  }, []);

  const handleClickCard = (event) => {
    setShowCard(!showCard);
    setTargetCard(event.target);
  };
  //Popover
  //1. Popover CardPriority
  const [priority, setPriority] = useState("");
  const popoverCardPriority = (
    <Popover id="popover-basic" className={style.popover_card_priority}>
      <PopoverHeader className={style.popover_priority_header}>
        Select an Option
      </PopoverHeader>
      <PopoverBody className={style.popover_priority_body}>
        <div className={style.form_group}>
          <div
            onClick={() => setPriority("highest")}
            className={style.priority_wrapper}
          >
            <div className={style.priority_container}>
              <img
                className={style.priority_image_check}
                src={highest}
                alt="Highest"
              />
              <span>Highest</span>
            </div>
            <div className={style.check_container}>
              {priority === "highest" ? (
                <img
                  src={greenCheck}
                  className={style.priority_image_check}
                  alt="checklist"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            onClick={() => setPriority("high")}
            className={style.priority_wrapper}
          >
            <div className={style.priority_container}>
              <img
                className={style.priority_image_check}
                src={high}
                alt="High"
              />
              <span>High</span>
            </div>
            <div className={style.check_container}>
              {priority === "high" ? (
                <img
                  src={greenCheck}
                  className={style.priority_image_check}
                  alt="checklist"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            onClick={() => setPriority("low")}
            className={style.priority_wrapper}
          >
            <div className={style.priority_container}>
              <img className={style.priority_image_check} src={low} alt="Low" />
              <span>Low</span>
            </div>
            <div className={style.check_container}>
              {priority === "low" ? (
                <img
                  src={greenCheck}
                  className={style.priority_image_check}
                  alt="checklist"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div
            onClick={() => setPriority("lowest")}
            className={style.priority_wrapper}
          >
            <div className={style.priority_container}>
              <img
                className={style.priority_image_check}
                src={lowest}
                alt="Lowest"
              />
              <span>Lowest</span>
            </div>
            <div className={style.check_container}>
              {priority === "lowest" ? (
                <img
                  src={greenCheck}
                  className={style.priority_image_check}
                  alt="checklist"
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </PopoverBody>
    </Popover>
  );

  //4. Popover CardAsign
  const popoverCardAsign = (
    <Popover id="popover-basic" className={style.popover_asign}>
      <PopoverHeader className={style.popover_asign_header}>
        <span className={style.asign_name}>Khalid</span>
        <span className={style.asign_name}>Juan</span>
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
        </ol>
      </PopoverBody>
    </Popover>
  );

  //3. Popover CardLabel
  const popoverCardLabel = (
    <Popover id="popover-basic" className={style.popover_label}>
      <PopoverHeader className={style.popover_label_header}>
        <div className={style.label_category_popover}>
          <div className={style.label_category}>Development</div>
        </div>
      </PopoverHeader>
      <PopoverBody className={style.popover_label_body}>
        <div className={style.popover_label_body_top}>
          Select an Option or Create One
        </div>
        <div className={style.label_all_category_container}>
          <div className={style.label_category_popover}>
            <div className={style.label_category}>Design</div>
          </div>
          <div className={style.label_category_popover}>
            <div className={style.label_category}>Development</div>
          </div>
          <div className={style.label_category_popover}>
            <div className={style.label_category}>UI/UX</div>
          </div>
        </div>
      </PopoverBody>
    </Popover>
  );

  return (
    <>
      {cards.map((card, index) => {
        <div className={style.detail_box} key={index}>
          <div className={style.box_header}>
            <div className={style.box_header_content}>
              <div className={style.category_container}>
                <div className={style.box_category}>{card.title}</div>
              </div>
              {/* POPOVER FOR CARD */}
              <Overlay
                show={showCard}
                target={targetCard}
                placement="bottom-end"
                container={ref}
                containerPadding={20}
              >
                <Popover id="popover-basic">
                  <Popover.Body className={style.popover_card_body}>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popoverCardLabel}
                    >
                      <button className={style.card_button_container}>
                        <img
                          className={style.card_hovered_img}
                          src={label}
                          alt="label button"
                        />
                        <div className={style.card_hovered_button}>
                          Add Label
                        </div>
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popoverCardPriority}
                    >
                      <button className={style.card_button_container}>
                        <img
                          className={style.card_hovered_img}
                          src={changePriority}
                          alt="change Prioritybutton"
                        />
                        <div className={style.card_hovered_button}>
                          Change Priority
                        </div>
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="right"
                      overlay={popoverCardAsign}
                    >
                      <button className={style.card_button_container}>
                        <img
                          className={style.card_hovered_img}
                          src={assignTo}
                          alt="button"
                        />
                        <div className={style.card_hovered_button}>
                          Assign to
                        </div>
                      </button>
                    </OverlayTrigger>
                    <button className={style.card_button_container}>
                      <img
                        className={style.card_hovered_img}
                        src={archive}
                        alt="button"
                      />
                      <div className={style.card_hovered_button}>Archieve</div>
                    </button>
                  </Popover.Body>
                </Popover>
              </Overlay>
              <button
                className={style.box_hover_button}
                onClick={handleClickCard}
              >
                ...
              </button>
            </div>
            <div className={style.title_container}>
              <div className={style.box_title}>{card.desc}</div>
            </div>
          </div>
          <div className={style.box_footer}>
            <div className={style.left_footer}>
              <img className={style.todo_attach} src={attach} alt="attacment" />
              <img
                className={style.todo_checklist}
                src={check}
                alt="checklist"
              />
              <span className={style.finish_todo}>3/6</span>
            </div>
            <div className={style.right_footer}>
              <img className={style.todo_priority} src={high} alt="priority" />
              <img
                className={style.todo_profile_picture}
                src={profile}
                alt="profile"
              />
            </div>
          </div>
        </div>;
      })}
    </>
  );
};
