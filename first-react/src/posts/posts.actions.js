import axios from 'axios';
import {
    GET_POSTS,
    SET_POST,
    GET_TAG_POSTS,
} from './posts.typs';

// Get Posts
export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data.data,
        });
    } catch (err) {
    }
};

// Get Post
export const getPost = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/posts/${id}`);

        dispatch({
            type: GET_POSTS,
            payload: res.data.data,
        });
    } catch (err) {

    }
}

//GET TAG POSTS
export const getTagPosts = (tagName) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/posts/tag/${tagName}`);

        dispatch({
            type: GET_TAG_POSTS,
            payload: res.data.data,
        });
    } catch (err) {
    }
};
