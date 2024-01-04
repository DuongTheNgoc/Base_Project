import React, { useEffect, useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import useApi from "../../apis/useApi";
import In4SV from "./In4SV";
import FormSV from "./FormSV";
import TableSinhVien from "./TableSinhVien";

export default function Layout() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { fetchUsers, deleteUser, addUser, fetchUserById, updateUser } = useApi();

  const usersFull = useRef();
  const getUsers = async () => {
    try {
      const response = await fetchUsers();
      usersFull.current = response;
      await setUsers(response);
      toast.success("Lấy danh sách thành công");
    } catch (error) {
      toast.error("Đã có lõi xảy ra");
    }
  };
  const handleAddUser = async (user) => {
    try {
      await addUser(user);
      getUsers();
      toast.success("Thêm Sinh Viên thành công");
    } catch (error) {
      toast.error("Đã có lõi xảy ra");
    }
  };
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      getUsers();
      toast.success("Xóa thành công");
    } catch (error) {
      toast.error("Đã có lõi xảy ra");
    }
  };
  const handleUpdateUser = async (id, user) => {
    try {
      await updateUser(id, user);
      getUsers();
      toast.success("Cập nhật thành công");
    } catch (error) {
      toast.error("Đã có lõi xảy ra");
    }
  };

  const getInfoSVById = async (id) => {
    try {
      const selected = await fetchUserById(id);
      setSelectedUser(selected);
      setIsUpdating(true);
    } catch (error) {
      toast.error("Đã có lõi xảy ra");
    }
  };

  const cancelUpdate = () => {
    try {
      setSelectedUser(null);
      setIsUpdating(false);
    } catch (error) {
      toast.error("Đã có lõi xảy ra");
    }
  };

  const handleChangeSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    if (searchTerm) {
      const usersFilter = usersFull.current.filter((user) =>
        user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
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
      <In4SV />
      <FormSV
        onAddUser={handleAddUser}
        selectedUser={selectedUser}
        isUpdating={isUpdating}
        cancelUpdate={cancelUpdate}
        handleUpdateUser={handleUpdateUser}
      />
      <TableSinhVien
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
