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

export default { createPost };
