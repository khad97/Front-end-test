import * as blogTypes from './Types'


  
export const fetchBlogRequest = () => {
   return{  
       type: blogTypes.FETCH_BLOG_REQUEST ,
       info: 'lister les blogs',
   }
}

export const fetchBlogSuccess = (blogs) => {
   return{
       type: blogTypes.FETCH_BLOG_SUCCESS,
       info: 'lister les blogs avec succes',
       payload: blogs
   }
}

export const fetchBlogFail = (error) => {
   return{
       type: blogTypes.FETCH_BLOG_FAILURE,
       info: 'lister les blogs avec erreur',
       payload: error
   }
}

export const addBlog = (blog) => {
    
   return{
       type: blogTypes.ADD_BLOG,
       info: 'ajouter un blog',
       payload: blog
   }
}

export const updateBlog = (title,id) => {
    console.log('update action'+title+' '+id)
    return{
        type: blogTypes.UPDATE_BLOG,
        info: 'modifier un blog',
        payload: {title,id}
    }
 }

export const deleteBlog = (id) => {
   return{
       type: blogTypes.DELETE_BLOG,
       info: 'supprimer un blog',
       payload: id,
       id
   }
}









