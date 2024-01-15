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

const login = (email, password) => {
    return axios.post("http://localhost:8080/auth/login", {
        email,
        password
    }).then((response) => {
        if (response.status === 200) {

            if (response.data.token && response.data.status) {
                localStorage.setItem("user", JSON.stringify(response.data))
                return response.data;
            } else if (response.data.status === false) {
                throw new Error("Error al iniciar sesión")
            }

        } else if (response.status === 401) {
            throw new Error("Error al iniciar sesión")
        }
    })
}

const AuthService = {
    register,
    getCurrentUser,
    login
};

export default AuthService 