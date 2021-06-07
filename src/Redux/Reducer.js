import { initialState } from "./Store"
import * as blogTypes from './Types'


const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case blogTypes.FETCH_BLOG_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case blogTypes.FETCH_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.payload,
                error: '',
                indexId: action.payload.length
            }
        case blogTypes.FETCH_BLOG_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case blogTypes.ADD_BLOG:
            return Object.assign({}, state, {
                blogs: [{ id:state.indexId + 1,title: action.payload.title, body: action.payload.body }, ...state.blogs],
                indexId: state.indexId + 1
            })
        case blogTypes.UPDATE_BLOG:
            console.log('update in reducer '+  action.payload.id)
            return Object.assign({}, state, {
                blogs: [...state.blogs.map(
                    (content, i) => content.id === action.payload.id ? {...content, title: action.payload.title}
                                            : content
                )]
            })

        case blogTypes.DELETE_BLOG:
            return Object.assign({}, state, {
                blogs: [...state.blogs.filter(item => item.id !== action.id)]
            });
        default:
            return {
                ...state
            }
    }
}

export default blogReducer