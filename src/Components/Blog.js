import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Col, Container, Row, } from 'react-bootstrap';
import { deleteBlog } from '../Redux/Actions'

import { useDispatch } from "react-redux";
import UpdateBlog from './UpdateBlog'
import './Blog.css'


function Blog(props) {

  useEffect(() => {

  }, [])

  const dispatch = useDispatch();

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{props.blog.title}</Card.Title>
        <Card.Text>
          {props.blog.body}
        </Card.Text>
        <Card.Link href="#">Read More</Card.Link>
      </Card.Body>
      <Container>
        <Row>
          <Col md={6} xs={6} className="bttUpdate" >
            <UpdateBlog blog={props.blog} ></UpdateBlog>
          </Col>
          <Col md={6} xs={6} className="bttDelete">
          <a class="btn btn-default btn-block" style={{color:"white"}} onClick={() => dispatch(deleteBlog(props.blog.id))}>Delete</a>
          </Col>
        </Row>
      </Container>
    </Card>
  )

}


export default Blog