import {
  Overlay,
  Popover,
  Modal,
  FormControl,
  OverlayTrigger,
  PopoverBody,
  PopoverHeader,
} from "react-bootstrap";

import teampict from "../../Assets/Icons/team.png";
import pp1 from "../../Assets/Icons/pp1.png";
import pp4 from "../../Assets/Icons/pp4.png";
import pp5 from "../../Assets/Icons/pp5.png";
import plus from "../../Assets/Icons/plus blue.png";
import todoPlus from "../../Assets/Icons/plus.png";
import profile from "../../Assets/Icons/default pofile picture.png";
import lowest from "../../Assets/Icons/lowest.png";
import archive2 from "../../Assets/Icons/archive.png";
import changePriority from "../../Assets/Icons/change priority.png";
import label from "../../Assets/Icons/label.png";
import assignTo from "../../Assets/Icons/arrow right.png";
import pp2 from "../../Assets/Icons/pp2.png";
import pp3 from "../../Assets/Icons/pp3.png";
import attach from "../../Assets/Icons/attach.png";
import check from "../../Assets/Icons/check.png";
import greenCheck from "../../Assets/Icons/green check.png";
import low from "../../Assets/Icons/low.png";
import high from "../../Assets/Icons/high.png";
import highest from "../../Assets/Icons/highest.png";

import UserNavbar from "../../Components/ShareComponent/Navbar/NavbarIsLogin";
import SidebarStatic from "../../Components/ShareComponent/Sidebar/SidebarStatic";

import style from "../../Styling/Pages/Team Detail/TeamsDetail.module.css";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import {
  getMembers,
  getMember,
  putArchiveList,
  putInviteMember,
} from "../../Redux/Action/BoardAction";
import {
  getList,
  postList,
  archiveList,
  copyList,
} from "../../Redux/Action/ListAction";
import { ListCard } from "./ListCard";

// For Modals Addcard
import React from "react";
import download from "../../Assets/Icons/download.png";
import share from "../../Assets/Icons/share.png";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import InputMember from "../../Components/Modals/InputMember";
import InputPriority from "../../Components/Modals/InputPriority";
import InputDate from "../../Components/Modals/InputDate";
import InputLabels from "../../Components/Modals/InputLabels";
import InputDescription from "../../Components/Modals/InputDescription";

export default function TeamsDetail() {
  //MOCKUP BUAT DRAG AND DROP
  const itemsFromBackend = [
    { id: uuidv4(), content: "First task" },
    { id: uuidv4(), content: "Second task" },
    { id: uuidv4(), content: "Third task" },
  ];

  const mockupCategory = [
    { text: "UI/UX", id: uuidv4() },
    { text: "Design", id: uuidv4() },
    { text: "Marketing", id: uuidv4() },
    { text: "UI/UX", id: uuidv4() },
    { text: "Design", id: uuidv4() },
    { text: "API", id: uuidv4() },
  ];
  const mockupDescription = [
    { desc: "RESTFull API", id: uuidv4() },
    { desc: "Profil API", id: uuidv4() },
    { desc: "Homepage API", id: uuidv4() },
    { desc: "Drag and Drop API", id: uuidv4() },
    { desc: "Boards API", id: uuidv4() },
    { desc: "Postman Documentation", id: uuidv4() },
  ];

  const columnsFromBackend = {
    [uuidv4()]: {
      name: "Kucing List",
      items: itemsFromBackend,
    },
    [uuidv4()]: {
      name: "Kucing List 2",
      items: itemsFromBackend,
    },
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  const [columns, setColumns] = useState(columnsFromBackend);
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

  const { loading, error, boardMembers } = useSelector(
    (state) => state.boardReducer
  );
  var { list } = useSelector((state) => state.listReducer);
  const { oneTeam } = useSelector((state) => state.teamReducer);

  // FOR MODALS ADD CARD
  const [showAddCard, setShowAddCard] = useState(false);
  const handleCloseAddCard = () => setShowAddCard(false);
  const handleShowAddCard = () => setShowAddCard(true);
  const [addCard, setAddCard] = useState("");

  //CONSOLE FOR TESTING
  console.log(list);
  console.log(boardMembers);

  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    dispatch(getList(boardId));
    dispatch(getMembers(boardId));
  }, []);

  // For invite Email
  const [inviteEmail, setInviteEmail] = useState("");

  const handleClickInviteEmail = (e) => {
    e.preventDefault();

    const data = {
      email: [inviteEmail],
    };

    dispatch(putInviteMember(data, boardId));
    setInviteEmail("");
    setShowInvite(!showInvite);
  };
  //for Archive List
  const [archive, setArchive] = useState(false);

  //For New List
  const [newList, setNewList] = useState("");

  //FOR MODALS
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //FOR POPOVER INVIE
  const [showInvite, setShowInvite] = useState(false);
  const [targetInvite, setTargetInvite] = useState(null);
  const ref = useRef(null);

  const handleClickInvite = (event) => {
    setShowInvite(!showInvite);
    setTargetInvite(event.target);
  };

  const handleClickNewList = (e) => {
    e.preventDefault();

    const data = {
      title: newList,
    };
    dispatch(postList(data, boardId));
    setNewList("");
    setShow(false);
  };

  //FOR POPOVER
  const [showCard, setShowCard] = useState(false);
  const [targetCard, setTargetCard] = useState(null);

  //Popover todo
  const addCardClick = () => {
    alert("Fungsi Card Fakhri");
  };
  const copyListClick = () => {
    alert("Copy List Click");
    //dispatch(copyList(data, boardId, ListId))
  };
  const moveAllCardClick = () => {
    alert("Move all card");
  };
  const archiveAllCardClick = () => {
    alert("Archive Card");
  };
  const archiveListClick = () => {
    alert("List have been Archived");
    // if (archive === false) {
    //   setArchive(true);
    // } else {
    //   setArchive(false);
    // }
    // const data = {
    //    isArchieved = archive
    // }
    // dispatch(archiveList(data, listId));
    // Tentuin dulu listIdnya, buatin di click
  };

  // Popover Todo
  const popoverTodo = (
    <Popover id="popover-basic" className={style.popover_todo}>
      <PopoverHeader className={style.todo_popover_header}>
        Action List
      </PopoverHeader>
      <PopoverBody className={style.popover_todo_body}>
        <div className={style.popover_todo_body_container1}>
          <button onClick={addCardClick} className={style.todo1_button}>
            Add Card
          </button>
          <button onClick={copyListClick} className={style.todo2_button}>
            Copy List
          </button>
        </div>
        <div className={style.popover_todo_body_container2}>
          <button onClick={moveAllCardClick} className={style.todo3_button}>
            Move All Card in This List
          </button>
          <button onClick={archiveAllCardClick} className={style.todo4_button}>
            Archive All Card in This List
          </button>
        </div>
        <div className={style.popover_todo_body_container3}>
          <button onClick={archiveListClick} className={style.todo5_button}>
            Archive This List
          </button>
        </div>
      </PopoverBody>
    </Popover>
  );

  return (
    <>
      <UserNavbar />
      <div className={style.main_container}>
        <SidebarStatic />
        <div className={style.content_wrapper}>
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {/* MOCKUP DRAG AND DROP */}
            {/* {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={columnId}
                >
                  <h2>{column.name}</h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 250,
                              minHeight: 500,
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#263B4A"
                                            : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style,
                                        }}
                                      >
                                        {item.content}
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })} */}
            <div className={style.title3}>
              <span>{boardMembers?.title}</span>
              <div className={style.team_icon_container}>
                <img
                  className={style.team_icon}
                  src={teampict}
                  alt="icon teams"
                />
              </div>
            </div>
            <div className={style.team_name}>
              <div className={style.left_container}>
                <div className={style.link_container}>
                  <a href="/" className={style.link4}>
                    Boards
                  </a>
                  <span> / </span>
                  <a href="/teams-boards" className={style.link4}>
                    {oneTeam?.teamName}
                  </a>
                  <span> / </span>
                  <a href="/teams-boards" className={style.link3}>
                    {boardMembers?.title}
                  </a>
                </div>
              </div>
              <div className={style.header_right_container}>
                <div className={style.team_member_container}>
                  <img
                    className={style.todo_profile_picture_top}
                    style={{
                      right: "1px",
                      zIndex: 10,
                    }}
                    src={pp4}
                    alt="profile"
                  />
                  {/* {loading && error ? (
                    <div> Loading Foto </div>
                  ) : (
                    boardUser.map((user, index) =>
                      index < 3 ? (
                        <img
                          className={style.todo_profile_picture_top}
                          style={{
                            right: `${index * 20}px`,
                            zIndex: 10 + index,
                          }}
                          key={index}
                          src={user?.profileId?.image}
                          alt="profile"
                        />
                      ) : index == 4 ? (
                        <span
                          className={style.todo_profile_picture_top}
                          style={{
                            right: "0px",
                            zIndex: 10,
                            backgroundImage: `url(${pp5})`,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {boardMembers.length - 3}
                        </span>
                      ) : (
                        <> </>
                      )
                    )
                  )} */}
                </div>
                <div ref={ref} className={style.invite_button_wrapper}>
                  <button
                    className={style.invite_button}
                    onClick={handleClickInvite}
                  >
                    Invite
                  </button>
                  <Overlay
                    show={showInvite}
                    target={targetInvite}
                    placement="bottom-end"
                    container={ref}
                    containerPadding={20}
                  >
                    <Popover
                      id="popover-contained"
                      className={style.popover_invite}
                    >
                      <Popover.Header
                        as="h3"
                        className={style.invite_popover_header}
                      >
                        Invite to Board
                      </Popover.Header>
                      <Popover.Body className={style.invite_popover_body}>
                        <div className={style.invite_input_container}>
                          <input
                            className={`${style.invite_input} form-control`}
                            required
                            type="text"
                            placeholder="Email Adress"
                            onChange={(e) => setInviteEmail(e.target.value)}
                          />
                        </div>
                        <div className={style.invite_popover_text}>
                          <div className={style.invite_with_link}>
                            <strong>Invite with Link</strong>
                          </div>
                          <div className={style.invite_body3}>
                            Anyone with link can join as board member
                          </div>
                          <div className={style.create_link_invite_container}>
                            <a className={style.create_link_invite} href="/">
                              Create Link
                            </a>
                          </div>
                        </div>
                        <button
                          className={style.send_invitation_button}
                          onClick={(e) => handleClickInviteEmail(e)}
                        >
                          Send Invitation
                        </button>
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </div>
                <Modal
                  show={showAddCard}
                  onHide={handleCloseAddCard}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className={style.modal_title}>
                      <div className={style.title}>
                        <p>Design Tasks | One by Meja Putih</p>
                      </div>
                      <div className={style.btn_header}>
                        <a>
                          <img
                            className={style.btn_download}
                            alt="button download"
                            src={download}
                          />
                        </a>
                        <a>
                          <img
                            className={style.btn_share}
                            alt="button share"
                            src={share}
                          />
                        </a>
                      </div>
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Container>
                      <Row>
                        <Col xs={11} md={7}>
                          <InputGroup
                            className={style.input_title}
                            placeholder="Card Title"
                          >
                            <FormControl
                              aria-label="Large"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="Card Title"
                            />
                          </InputGroup>
                          <div className={style.description_section}>
                            <p className={style.description_title}>
                              Description
                            </p>
                            <InputDescription />
                            <div className={style.button_modal_wrapper}>
                              <Button
                                variant="light"
                                className={style.btn_cancel}
                              >
                                Cancel
                              </Button>
                              <Button
                                variant="light"
                                className={style.btn_save}
                              >
                                Save
                              </Button>
                            </div>
                          </div>
                          <div className={style.comment_section}>
                            <p className={style.comment_title}>Comments</p>
                            <div className={style.comment}>
                              <a className={style.profile_wrapper}>
                                <img
                                  className={style.image_profile}
                                  src={profile}
                                />
                              </a>
                              <Form.Group
                                className={style.input_comment}
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Control as="textarea" rows={3} />
                              </Form.Group>
                            </div>
                            <div className={style.button_modal_wrapper}>
                              <Button
                                size=""
                                variant="light"
                                className={style.btn_cancel}
                              >
                                Cancel
                              </Button>
                              <Button
                                variant="light"
                                className={style.btn_save}
                              >
                                Save
                              </Button>
                            </div>
                            <div className={style.comment_wrapper}>
                              <a>
                                <img
                                  className={style.image_profile}
                                  src={profile}
                                  alt="image-profile"
                                />
                              </a>
                              <p className={style.name_profile}>Susi Susanti</p>
                              <p className={style.date_comment}>
                                Wed, 27 Jan 2022 | 5:03 PM
                              </p>
                            </div>
                            <p className={style.this_comment}>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. At corrupti ex facere quam animi, suscipit
                              voluptatem obcaecati similique optio maxime illum
                              natus
                            </p>
                          </div>
                        </Col>

                        <Col xs={7} md={5}>
                          <DropdownButton
                            className={style.dropdown_button}
                            color="grey"
                            title="TO DO "
                            size="sm"
                            variant="light"
                          >
                            <Dropdown.Item href="#/action-1">
                              TO DO 1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              TO DO 2
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              TO DO 3
                            </Dropdown.Item>
                          </DropdownButton>
                          <div className={style.assign_member}>
                            <p>Assign To</p>
                            <InputMember className={style.input_member} />
                          </div>
                          <div className={style.add_priority}>
                            <p>Priority</p>
                            <InputPriority className={style.label} />
                          </div>
                          <div className={style.add_date}>
                            <p>Due Date</p>
                            <InputDate />
                          </div>
                          <div className={style.add_labels}>
                            <p>labels</p>
                            <InputLabels />
                          </div>
                          <div className={style.save_card}>
                            <Button
                              size=""
                              variant="light"
                              className={style.btn_cancel_card}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="light"
                              className={style.btn_save_card}
                            >
                              Save
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            {/* CONTAINER FOR CARD */}
            <div className={style.multiple_container}>
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div
                    className={style.content_column}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    key={columnId}
                  >
                    <div className={style.todo_header}>
                      <div className={style.todo_container}>
                        <p className={style.todo}>{column.name}</p>
                      </div>
                      <div className={style.total_todo}>
                        <button className={style.todo_button}>3</button>
                      </div>
                      <div className={style.todo_button_cotaniner}>
                        <OverlayTrigger
                          trigger="click"
                          placement="bottom-end"
                          overlay={popoverTodo}
                        >
                          <button className={style.todo_hover_button}>
                            ...
                          </button>
                        </OverlayTrigger>
                      </div>
                    </div>
                    {/* <div className={style.box_header}>
                      <div className={style.box_header_content}>
                        <div className={style.category_container}>
                          <div className={style.box_category}>
                            {column.name}
                          </div>
                        </div>
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
                                <div className={style.card_hovered_button}>
                                  Archieve
                                </div>
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
                        <div className={style.box_title}>
                          Description for List
                        </div>
                      </div>
                    </div> */}
                    <div style={{ margin: 8 }}>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              className={style.detail_box_container}
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          className={style.detail_box}
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                        >
                                          <div className={style.box_header}>
                                            <div
                                              className={
                                                style.box_header_content
                                              }
                                            >
                                              <div
                                                className={
                                                  style.category_container
                                                }
                                              >
                                                <div
                                                  className={style.box_category}
                                                >
                                                  {column.name}
                                                </div>
                                              </div>
                                              <Overlay
                                                show={showCard}
                                                target={targetCard}
                                                placement="bottom-end"
                                                container={ref}
                                                containerPadding={20}
                                              >
                                                <Popover id="popover-basic">
                                                  <Popover.Body
                                                    className={
                                                      style.popover_card_body
                                                    }
                                                  >
                                                    <OverlayTrigger
                                                      trigger="click"
                                                      placement="right"
                                                      overlay={popoverCardLabel}
                                                    >
                                                      <button
                                                        className={
                                                          style.card_button_container
                                                        }
                                                      >
                                                        <img
                                                          className={
                                                            style.card_hovered_img
                                                          }
                                                          src={label}
                                                          alt="label button"
                                                        />
                                                        <div
                                                          className={
                                                            style.card_hovered_button
                                                          }
                                                        >
                                                          Add Label
                                                        </div>
                                                      </button>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                      trigger="click"
                                                      placement="right"
                                                      overlay={
                                                        popoverCardPriority
                                                      }
                                                    >
                                                      <button
                                                        className={
                                                          style.card_button_container
                                                        }
                                                      >
                                                        <img
                                                          className={
                                                            style.card_hovered_img
                                                          }
                                                          src={changePriority}
                                                          alt="change Prioritybutton"
                                                        />
                                                        <div
                                                          className={
                                                            style.card_hovered_button
                                                          }
                                                        >
                                                          Change Priority
                                                        </div>
                                                      </button>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                      trigger="click"
                                                      placement="right"
                                                      overlay={popoverCardAsign}
                                                    >
                                                      <button
                                                        className={
                                                          style.card_button_container
                                                        }
                                                      >
                                                        <img
                                                          className={
                                                            style.card_hovered_img
                                                          }
                                                          src={assignTo}
                                                          alt="button"
                                                        />
                                                        <div
                                                          className={
                                                            style.card_hovered_button
                                                          }
                                                        >
                                                          Assign to
                                                        </div>
                                                      </button>
                                                    </OverlayTrigger>
                                                    <button
                                                      className={
                                                        style.card_button_container
                                                      }
                                                    >
                                                      <img
                                                        className={
                                                          style.card_hovered_img
                                                        }
                                                        src={archive2}
                                                        alt="button"
                                                      />
                                                      <div
                                                        className={
                                                          style.card_hovered_button
                                                        }
                                                      >
                                                        Archieve
                                                      </div>
                                                    </button>
                                                  </Popover.Body>
                                                </Popover>
                                              </Overlay>
                                              <button
                                                className={
                                                  style.box_hover_button
                                                }
                                                onClick={handleClickCard}
                                              >
                                                ...
                                              </button>
                                            </div>
                                            <div
                                              className={style.title_container}
                                            >
                                              <div className={style.box_title}>
                                                Description for List
                                              </div>
                                            </div>
                                          </div>
                                          <div className={style.box_footer}>
                                            <div className={style.left_footer}>
                                              <img
                                                className={style.todo_attach}
                                                src={attach}
                                                alt="attacment"
                                              />
                                              <img
                                                className={style.todo_checklist}
                                                src={check}
                                                alt="checklist"
                                              />
                                              <span
                                                className={style.finish_todo}
                                              >
                                                {Math.floor(Math.random() * 4) +
                                                  1}
                                                /6
                                              </span>
                                            </div>
                                            <div className={style.right_footer}>
                                              <img
                                                className={style.todo_priority}
                                                src={high}
                                                alt="priority"
                                              />
                                              <img
                                                className={
                                                  style.todo_profile_picture
                                                }
                                                src={profile}
                                                alt="profile"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                              <button
                                className={style.add_todo}
                                onClick={handleShowAddCard}
                              >
                                <img
                                  className={style.todo_plus}
                                  src={todoPlus}
                                  alt="Plus"
                                />
                                <p className={style.add_todo_text}>
                                  Add New Card
                                </p>
                              </button>
                              ;
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </div>
                );
              })}
              {/* {list.map((userList, index) => (
                <div className={style.content_column} key={index}>
                  <div className={style.todo_header}>
                    <div className={style.todo_container}>
                      <p className={style.todo}>{userList?.title}</p>
                    </div>
                    <div className={style.total_todo}>
                      <button className={style.todo_button}>0</button>
                    </div>
                    <div className={style.todo_button_cotaniner}>
                      <OverlayTrigger
                        trigger="click"
                        placement="bottom-end"
                        overlay={popoverTodo}
                      >
                        <button className={style.todo_hover_button}>...</button>
                      </OverlayTrigger>
                    </div>
                  </div>
                  <div className={style.detail_box_container}>
                    <ListCard props={userList?._id} />
                  </div>
                  <button className={style.add_todo}>
                    <img
                      className={style.todo_plus}
                      src={todoPlus}
                      alt="Plus"
                    />
                    <p className={style.add_todo_text}>Add New Card</p>
                  </button>
                </div>
              ))} */}
              <div className={style.column_new_board}>
                <div className={style.image_container}>
                  <button className={style.plus_button} onClick={handleShow}>
                    <img src={plus} alt="icon for add new Board" />
                  </button>
                </div>
                <div className={style.text_container}>Add Another List</div>
              </div>
            </div>
          </DragDropContext>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className={style.modal_header} closeButton>
          <p className={style.modal_title}>Add Another List</p>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="List Name"
            aria-label="List Name"
            aria-describedby="basic-addon1"
            onChange={(e) => setNewList(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className={style.cancel_button} onClick={handleClose}>
            Cancel
          </button>
          <button
            className={style.save_button}
            onClick={(e) => handleClickNewList(e)}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
