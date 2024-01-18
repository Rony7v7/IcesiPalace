// DataAccess.js

import axios from "../api/axios";
import authHeader from "./AuthHeader";

const createPost = (title, description, price, category, image) => {
    const headers = authHeader();
    return axios.post("/api/v1/post/create", {
        title,
        description,
        price,
        category,
        image
    }, {
        headers: {
            ...headers,
            "Content-Type": "multipart/form-data"
        }
    })
        .catch((error) => { console.log(error) });
};

const queryPostsBasedOnName = async (name) => {
    const serverResponse = await axios.get(`/api/v1/post?name=${name}`)
        .catch((error) => { console.log(error) });


    return serverResponse.data.posts;
};

const queryPostsBasedOnCategory = async (category) => {
    try {
        const response = await axios.get(`/api/v1/post?category=${category}`);
        return response.data.posts;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const queryAllPosts = async () => {

    return await axios.get("/api/v1/post/list-all-post")
        .then((response) => {
            return response.data.posts;
        })
        .catch((err) => console.log(err));
}

export default { createPost, queryPostsBasedOnName, queryPostsBasedOnCategory, queryAllPosts };
