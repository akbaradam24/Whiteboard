import React from "react";
import download from "../../Assets/Icons/download.png"
import share from "../../Assets/Icons/share.png"
import profile from "../../Assets/Icons/default pofile picture.png";
import { useState } from "react";
import { Button, Col, Container, Dropdown, DropdownButton, FormControl, Form, InputGroup, Modal, Row} from "react-bootstrap";
import InputMember from "./InputMember"
import InputPriority from "./InputPriority";
import InputDate from "./InputDate";
import InputLabels from "./InputLabels";

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
          <Modal.Title className="modal_title">
            <div className="title">
              <p>Design Tasks | One by Meja Putih</p>
            </div>
            <div className="btn_header">  
              <a>
                <img className="btn_download" alt="button download" src={download} />
              </a>
              <a>
                <img className="btn_share" alt="button share" src={share} />
              </a>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Container>
          <Row>
            <Col xs={11} md={7}>
              <InputGroup className="input_title" placeholder="Card Title" >
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Card Title" />
              </InputGroup>
              <div className="description_section">
                <p className="description_title">Description</p>
                <Form.Group className="input_description" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Button variant="light" className="btn_description cancel">Cancel</Button>
                <Button variant="light" className="btn_description save">Save</Button>
              </div>
              <div className="comment_section">
                <p className="comment_title">Comments</p>
                <div className="comment">
                  <a className="profile_wrapper">
                    <img className="image_profile" src={profile} />
                  </a>
                  <Form.Group className="input_comment" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={2} />
                  </Form.Group>
                </div>
                <Button size="" variant="light" className="btn_description cancel">Cancel</Button>
                <Button variant="light" className="btn_description save">Save</Button>
                <div className="comment_wrapper">
                  <a>
                    <img className="image_profile" src={profile} alt="image-profile"/>
                  </a>
                  <p className="name_profile">Susi Susanti</p>
                  <p className="date_comment">Wed, 27 Jan 2022 | 5:03 PM</p>
                </div>
                <p className="this_comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti ex facere quam animi, suscipit voluptatem obcaecati similique optio maxime illum natus</p>
              </div>
            </Col>

            <Col xs={7} md={5}>
              <DropdownButton 
                color="grey" 
                className="dropdown_button" 
                title="TO DO "
                size="sm"
                variant="light" >
                  <Dropdown.Item href="#/action-1">TO DO 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">TO DO 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">TO DO 3</Dropdown.Item>
              </DropdownButton>
              <div className="assign_member"> 
                <p>Assign To</p>
                <InputMember/>
              </div>
              <div className="add_priority" >
                <p>Priority</p>
                <InputPriority className="label" />
              </div>
              <div className="add_date" >
                <p>Due Date</p>
                <InputDate />
              </div>
              <div className="add_labels" >
                <p>labels</p>
                <InputLabels />
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