import axios from "../api/axios";


const register = (username, email, password) => {
    return axios.post("/auth/register", {
        username,
        email,
        password,
    });
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const login = (username, password) => {
    return axios.post("/auth/login", {
        username,
        password
    }).then((response) => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data;
    })
}

const AuthService = {
    register,
    getCurrentUser,
    login
};

export default AuthService 