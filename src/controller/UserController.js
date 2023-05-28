import config from "../config";
import { AUTHORIZED, GET, DELETE, ADD, LOGIN} from "../routes";
import axios from "axios";
// задание со звездочкой: в методах вынести в аргументы инфу о юзере и ответить на вопррос поч это надо сделать (в контролере)
const UserController = {
  login: async (userData) => {
    const url = config.url + LOGIN; // https://bookstore.demoqa.com/Account/v1/User
    const response = await axios.post(url, userData)
    return response.data;
  },
  // refactored
  add : async (userData) => {
    const url = config.url + ADD; // https://bookstore.demoqa.com/Account/v1/User
    const response = await axios.post(url, userData)
    return response.data;
  },
  get: async (UUID, token) => {
    const axiosInstance = axios.create({headers: {
      Authorization: 'Bearer ' + token
    }})
    const url = config.url + GET(UUID);
    const response = await axiosInstance.get(url)
    return response.data
  },
  // refactored
  authorized: async (userData,token) => {
    const axiosInstance = axios.create({headers: {
      Authorization: 'Bearer ' + token
    }})
    const url = config.url + AUTHORIZED; //'https://bookstore.demoqa.com/Account/v1/Authorized'
    const response = await axiosInstance.post(url, userData);
    return response.data;
  },

  delete: async (UUID, token) => {
    const axiosInstance = axios.create({headers: {
      Authorization: 'Bearer ' + token
    }})
    const url = config.url + DELETE(UUID);
    const response = await axiosInstance.delete(url);
    return response;
  }
};

export default UserController;
