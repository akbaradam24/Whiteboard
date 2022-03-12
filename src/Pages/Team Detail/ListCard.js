import {
  Overlay,
  Popover,
  OverlayTrigger,
  PopoverBody,
  PopoverHeader,
} from "react-bootstrap";
import {
  Group,
  Avatar,
  Text,
  MultiSelect,
  Box,
  CloseButton,
} from "@mantine/core";
import { forwardRef } from "react";
import profile from "../../Assets/Icons/default pofile picture.png";
import lowest from "../../Assets/Icons/lowest.png";
import archive from "../../Assets/Icons/archive.png";
import changePriority from "../../Assets/Icons/change priority.png";
import label from "../../Assets/Icons/label.png";
import assignTo from "../../Assets/Icons/arrow right.png";
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
  const { cards } = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();
  const ref = useRef(null);

  //FOR POPOVER
  const [showCard, setShowCard] = useState(false);
  const [targetCard, setTargetCard] = useState(null);

  useEffect(() => {
    dispatch(getCards(props));
    // eslint-disable-next-line
  }, []);

  const handleClickCard = (e) => {
    setShowCard(!showCard);
    setTargetCard(e.target);
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
  function Value({ image, value, label, onRemove, ...others }) {
    return (
      <div {...others}>
        <Box
          sx={(theme) => ({
            display: "flex",
            cursor: "default",
            alignItems: "center",
            paddingLeft: 10,
          })}
        >
          <div style={{ marginRight: 5 }}>
            <img src={image} alt="label icon" />
          </div>
          <CloseButton
            onMouseDown={onRemove}
            variant="transparent"
            size={22}
            iconSize={14}
            tabIndex={-1}
          />
        </Box>
      </div>
    );
  }
  const membersData = [
    {
      image: profile,
      label: "Adam Akbar",
      value: "Adam Akbar",
    },

    {
      image: profile,
      label: "Fakhri Al Fatah",
      value: "Fakhri Al Fatah",
    },
    {
      image: profile,
      label: "Hamdani Abdullah",
      value: "Hamdani Abdullah",
    },
    {
      image: profile,
      label: "John Doe",
      value: "John Doe",
    },
  ];
  // !important: Forwarding ref is required
  const SelectItem = forwardRef(({ image, label, ...others }, ref) => {
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
          <Avatar src={image} />
          <div>
            <Text>{label}</Text>
          </div>
        </Group>
      </div>
    );
  });
  const popoverCardAsign = (
    <Popover id="popover-basic" className={style.popover_asign}>
      <MultiSelect
        size="sm"
        zIndex={9999}
        placeholder="Pick member"
        data={membersData}
        itemComponent={SelectItem}
        searchable
        valueComponent={Value}
      />
    </Popover>
  );

  //3. Popover CardLabel
  const labelData = [
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
    { value: "copywriting", label: "Copy Writing" },
    { value: "ui/ux", label: "UI/UX" },
    { value: "frontend", label: "Front End" },
    { value: "backend", label: "Back End" },
    { value: "qa", label: "QA" },
  ];
  const popoverCardLabel = (
    <Popover id="popover-basic" className={style.popover_label}>
      <MultiSelect
        zIndex={9999}
        maxSelectedValues={3}
        data={labelData}
        placeholder="Pick label"
      />
    </Popover>
  );

  const displayCards = () => {
    const index = cards.findIndex((x) => x.listId === props);
    if (cards.length > 0 && index >= 0) {
      return cards[index].cards;
    } else {
      return [];
    }
  };
  // const displayLabel = (array) => {
  //   if (array === 0) {
  //     return <></>;
  //   } else {
  //     return array.map((x) => <div className={style.box_category}>{x}</div>);
  //   }
  // };

  return (
    <>
      {displayCards().map((card, index) => (
        <div className={style.detail_box} key={index}>
          <div className={style.box_header}>
            <div className={style.box_header_content}>
              <div className={style.category_container}>
                <div className={style.box_category}>{card.label}</div>
              </div>
              {/* POPOVER FOR CARD */}
              <Overlay
                show={showCard}
                target={targetCard}
                placement="bottom-end"
                ref={ref}
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
                onClick={(e) => handleClickCard(e)}
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
        </div>
      ))}
    </>
  );
};
