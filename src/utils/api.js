import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const FIRE_BASE_URL = import.meta.env.VITE_FIRE_BASE_URL;

export async function getRooms() {
      const response = await axios.get(BASE_URL+"rooms?populate=*");
      return response.data.data;
}

export async function getRoom(id) {
      const response = await axios.get(`${BASE_URL}rooms/${id}?populate=*`);
      return response.data.data;
}

export async function getSlowPosts() {
      await timeout(Math.random() * 6000 + 500);
      const response = await axios.get(BASE_URL+"rooms?populate=*");
      return response.data.data;
}
export function timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getData(url){
  const response = axios.get(BASE_URL+url);
  return response;
}

export function postData(url,body){
  const response = axios.post(FIRE_BASE_URL+url,body);
  return response;
}