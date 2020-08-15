import axios from "axios";
const apiClient = axios.create({
    baseURL: "http://localhost:3000/categories",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    timeout: 10000
});

export default {
    getCats() {
        return apiClient.get();
    }
};
