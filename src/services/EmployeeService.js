import axios from "axios";

const REST_BASE_URL = 'http://localhost:8080/api/empolyee';

export const listEmployee = ()=>  axios.get(REST_BASE_URL);
