import axios from "axios";
import React, { useRef } from "react";

export default function useCarApi() {
  const baseURL = useRef("https://65743d90f941bda3f2af8183.mockapi.io/api/qlxe/cars");
  const addCar = async (user) => {
    const response = await axios.post(baseURL.current, user);
    return response.data;
  };
  const fetchUsers = async () => {
    const response = await axios.get(baseURL.current);
    return response.data;
  };
  const fetchUserById = async (id) => {
    const response = await axios.get(`${baseURL.current}/${id}`);
    return response.data;
  };
  const updateUser = async (id, user) => {
    const response = await axios.put(`${baseURL.current}/${id}`, user);
    return response.data;
  };
  const deleteUser = async (id) => {
    const response = await axios.delete(`${baseURL.current}/${id}`);
    return response.data;
  };

  return { fetchUsers, fetchUserById, deleteUser, addCar, updateUser };
}
