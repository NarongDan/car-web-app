import axios from "../config/axios";

const authApi = {};

authApi.login = (body) => axios.post("auth/login", body);

authApi.getAuthUser = () => axios.get("auth/info");

export default authApi;
