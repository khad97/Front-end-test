import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { useDispatch} from "react-redux";
import {updateBlog} from '../Redux/Actions'


function UpdateBlog(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();


  const textFieldHandler =  (e) =>{
    setTitle(e.target.value);
  }
  return (
    <>
      <a class="btn btn-default btn-block" style={{color:"white"}} onClick={handleShow}>Update</a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Post Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="" 
                name="title" 
                onChange={textFieldHandler} 
                defaultValue={props.blog.title}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBody">
              <Form.Label>Body</Form.Label>
              <Form.Control 
                as="textarea" 
                placeholder="" 
                name="body" 
                defaultValue={props.blog.body}
                readOnly />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          {
            title  ? <Button variant="primary" onClick={()=>{ dispatch(updateBlog(title,props.blog.id)); handleClose() }}>
            Save 
            </Button> : <></>
          }
            
          </Form>
        </Modal.Body>
     
      </Modal>
    </>
  );
}



export default UpdateBlog