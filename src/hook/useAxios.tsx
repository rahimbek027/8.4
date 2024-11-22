import axios from "axios";
import { API } from "./useEnv";


export const Axios = () => axios.create({baseURL:API})