import React, { useEffect, useRef, useState } from "react";
import useCarApi from "../../apis/useCarAPI";
import toast, { Toaster } from "react-hot-toast";
import InfoCar from "./InfoCar";
import FormCar from "./FormCar";
import TableCar from "./TableCar";

export default function LayoutCar() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchUsers, deleteUser, addCar, fetchUserById, updateUser } = useCarApi();

  const usersFull = useRef();
  const getUsers = async () => {
    try {
      const response = await fetchUsers();
      usersFull.current = response;
      await setUsers(response);
      toast.success("Lấy danh sách xe thành công");
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };
  const handleAddUser = async (user) => {
    try {
      await addCar(user);
      getUsers();
      toast.success("Thêm xe thành công");
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      getUsers();
      toast.success("Xóa xe thành công");
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };
  const handleUpdateUser = async (id, user) => {
    try {
      await updateUser(id, user);
      getUsers();
      toast.success("Cập nhật xe thành công");
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };

  const getInfoSVById = async (id) => {
    try {
      const selected = await fetchUserById(id);
      setSelectedUser(selected);
      setIsUpdating(true);
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };

  const cancelUpdate = () => {
    try {
      setSelectedUser(null);
      setIsUpdating(false);
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  };

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    if (searchTerm) {
      const usersFilter = usersFull.current.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsers(usersFilter);
      return;
    } else if (usersFull.current) {
      setUsers(usersFull.current);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div>
      <InfoCar />
      <FormCar
        onAddUser={handleAddUser}
        selectedUser={selectedUser}
        isUpdating={isUpdating}
        cancelUpdate={cancelUpdate}
        handleUpdateUser={handleUpdateUser}
      />
      <TableCar
        users={users}
        onDelete={handleDeleteUser}
        onGetUser={getInfoSVById}
        onChangeSearchTerm={handleChangeSearchTerm}
        cancelUpdate={cancelUpdate}
      />
      <Toaster position="top-center" />
    </div>
  );
}
