import { createStore } from 'redux';
import blogReducer from './Reducer';
import * as blogActions from './Actions'
const redux = require('redux')



export const initialState = {
    loading: false,
    blogs: [],
    error: '',
    indexId: 0
}



const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

export const fetchBlogs = ( ) => {
    return (dispatch) => {
       dispatch(blogActions.fetchBlogRequest())
        const url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url,{
            params: {
              _limit: 16
             }
          })
        .then( response => {
            const blogs = response.data
            dispatch(blogActions.fetchBlogSuccess(blogs))
        })
        .catch( error => {
           dispatch(blogActions.fetchBlogFail(error.messages))
        })
    }
}

const rootReducer = combineReducers({
    reducer: blogReducer,
});

const Store = createStore(rootReducer,applyMiddleware(thunkMiddleware))


export default Store;