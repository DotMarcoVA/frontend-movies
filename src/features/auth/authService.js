import axios from "axios"

const API_URL = "https://red-beautiful-lobster.cyclic.app/api/users"
// const API_URL = "http://localhost:5000/api/users"

// Registrar usuario

const register = async(userData)=> {
    const response = await axios.post(API_URL, userData);
    return response.data;
}

// Login 

const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData)
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    register,
    logout,
    login,
};

export default authService;