import React, { useEffect,useState } from 'react'

import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Blog from './Blog'
import Loader from './Loader'
import AddBlog from './AddBlog'
import { useDispatch, useSelector,shallowEqual } from "react-redux";
import {fetchBlogs} from '../Redux/Store'

import './BlogPage.css'


function BlogPage() {

    const [filterList, setFilterList] = useState([])
    const [filter,setFilter] = useState('')

    const { blogs, loading } = useSelector(state => ({
        blogs: state.reducer.blogs,
        loading: state.reducer.loading,
      }), shallowEqual);

    useEffect(() => {
        dispatch(fetchBlogs())
    }, [])
    

    useEffect(() => {
        const results = blogs.filter(o => o.title.includes(filter));
        setFilterList(results);
        console.log('filtering the list')
    }, [blogs,filter])

    const dispatch = useDispatch();

    const filterFieldHandler = (e) =>{
        setFilter(e.target.value)
       

    }



    return (
        <Container style={{paddingTop :"100px", paddingBottom:"100px"}}>
            <h1 className="pageTitle">My Blog</h1>
            {loading ? <Loader></Loader> : <div></div>}
            <Row className="add-space align-items-stretch">
                <Col md={10} xs={10}>
                    <FormControl
                        placeholder="Filter by Title"
                        onChange={filterFieldHandler}
                        className="search"
                    />
                </Col>
                <Col md={2} xs={2} className="add" >
                    <AddBlog></AddBlog>
                </Col>
            </Row>
            <Row>
                {filterList.map(blg => <Col md={3} className="d-flex align-items-stretch"><Blog key={blg.id} blog={blg}/></Col>)}

            </Row>
        </Container>
    )

}


export default BlogPage;
