import React from "react";
import download from "../../Assets/Icons/download.png";
import share from "../../Assets/Icons/share.png";
import profile from "../../Assets/Icons/default pofile picture.png";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import InputMember from "./InputMember";
import InputPriority from "./InputPriority";
import InputDate from "./InputDate";
import InputLabels from "./InputLabels";
import InputDescription from "./InputDescription";

import style from "../../Styling/Components/Modals/Modals.module.css";

function Modals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Modals
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className={style.modal_title}>
            <div className={style.title}>
              <p>Design Tasks | One by Meja Putih</p>
            </div>
            <div className={style.btn_header}>
              <a href="/">
                <img
                  className={style.btn_download}
                  alt="button download"
                  src={download}
                />
              </a>
              <a href="/">
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
                  <p className={style.description_title}>Description</p>
                  <InputDescription />
                  <Button variant="light" className={style.btn_cancel}>
                    Cancel
                  </Button>
                  <Button variant="light" className={style.btn_save}>
                    Save
                  </Button>
                </div>
                <div className={style.comment_section}>
                  <p className={style.comment_title}>Comments</p>
                  <div className={style.comment}>
                    <a href="/" className={style.profile_wrapper}>
                      <img
                        className={style.image_profile}
                        src={profile}
                        alt="myprofile"
                      />
                    </a>
                    <Form.Group
                      className={style.input_comment}
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </div>
                  <Button size="" variant="light" className={style.btn_cancel}>
                    Cancel
                  </Button>
                  <Button variant="light" className={style.btn_save}>
                    Save
                  </Button>
                  <div className={style.comment_wrapper}>
                    <a href="/">
                      <img
                        className={style.image_profile}
                        src={profile}
                        alt="profile"
                      />
                    </a>
                    <p className={style.name_profile}>Susi Susanti</p>
                    <p className={style.date_comment}>
                      Wed, 27 Jan 2022 | 5:03 PM
                    </p>
                  </div>
                  <p className={style.this_comment}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    corrupti ex facere quam animi, suscipit voluptatem obcaecati
                    similique optio maxime illum natus
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
                  <Dropdown.Item href="#/action-1">TO DO 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">TO DO 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">TO DO 3</Dropdown.Item>
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
                  <Button variant="light" className={style.btn_save_card}>
                    Save
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;
