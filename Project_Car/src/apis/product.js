import axios from "axios";
import { useRef } from "react";

export default function useProductApi() {
  const baseURL = useRef("https://650f9b1554d18aabfe9a2044.mockapi.io/api/users");
  const addCar = async (car) => {
    const response = await axios.post(baseURL.current, car);
    return response.data;
  };

  const fetchCars = async () => {
    const response = await axios.get(baseURL.current);
    return response.data;
  };
  return { addCar, fetchCars };
}
