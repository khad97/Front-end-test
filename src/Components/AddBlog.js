import React, {  useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useDispatch} from "react-redux";
import {addBlog} from '../Redux/Actions'


function AddBlog() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();


  const textFieldHandler =  (e) =>{
    if(e.target.name === "title"){
      setTitle(e.target.value)
    }else{
      setBody(e.target.value)
    }
    
  }
  return (
    <>
      <div class="btn btn-default btn-block test" style={{color:"white"}} onClick={handleShow}>New Post</div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Post Title</Form.Label>
              <Form.Control type="text" placeholder="" name="title" onChange={textFieldHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBody">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" placeholder="" name="body" onChange={textFieldHandler} />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            {
              title && body ? <Button variant="primary" onClick={()=>{ dispatch(addBlog({title: title, body: body})); handleClose() }}>
              Save 
              </Button> : <></>
            }
          
            
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}



export default AddBlog