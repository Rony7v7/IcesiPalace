import { jwtDecode } from "jwt-decode";
import axios from "../api/axios";

const register = (username, password, email) => {
    return axios.post("/auth/register", {
        username,
        email,
        password,
    }).then((response) => {
        if (response.data.status === false) {
            throw new Error("Error al registrar usuario")
        }
    }).catch((error) => { throw new Error("Error al registrar usuario") })
};


const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
        return
    }else{

        const token = user.token;
        const userDecoded = jwtDecode(token);
        return userDecoded;
    }
};

const login = (email, password) => {
    return axios.post("auth/login", {
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