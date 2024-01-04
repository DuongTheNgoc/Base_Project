import React, { useEffect, useRef, useState } from "react";
import useCarValidation from "../../apis/useCarValidation";

export default function FormCar({
  onAddUser,
  selectedUser,
  isUpdating,
  cancelUpdate,
  handleUpdateUser,
}) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    hieuxe: "",
    description: "",
    shortdescription: "",
    quanlity: "",
    image: "",
  });
  const emptyValidation = useRef({
    id: "",
    name: "",
    hieuxe: "",
    description: "",
    shortdescription: "",
    quanlity: "",
    image: "",
  });
  const [validation, setValidation] = useState(emptyValidation.current);

  const { checkEmpty } = useCarValidation();
  const handleChange = (e) => {
    const { target } = e;
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValid = true;
    const valid = {
      id: {
        status: checkEmpty(user.id),
        messageError: "ID không được bỏ trống",
      },
      name: {
        status: checkEmpty(user.name),
        messageError: "Tên không được bỏ trống",
      },
      hieuxe: {
        status: checkEmpty(user.hieuxe),
        messageError: "Hiệu xe không được bỏ trống",
      },
      description: {
        status: checkEmpty(user.description),
        messageError: "Mô tả Không được bỏ trống",
      },
      shortdescription: {
        status: checkEmpty(user.shortdescription),
        messageError: "Mô tả ngắn không được bỏ trống",
      },
      quanlity: {
        status: checkEmpty(user.quanlity),
        messageError: "Số lượng không được bỏ trống",
      },
      image: {
        status: checkEmpty(user.image),
        messageError: "Link hình ảnh không được bỏ trống",
      },
    };
    for (const key in valid) {
      if (!valid[key].status) {
        setValidation((prev) => ({
          ...prev,
          [key]: valid[key].messageError,
        }));
      } else {
        setValidation((prev) => ({
          ...prev,
          [key]: "",
        }));
      }
      inputValid &= valid[key].status;
    }
    if (!inputValid) return;
    if (isUpdating) {
      handleUpdateUser(selectedUser.id, user);
      setUser({
        id: "",
        name: "",
        hieuxe: "",
        description: "",
        shortdescription: "",
        quanlity: "",
        image: "",
      });
      cancelUpdate();
      return;
    }
    onAddUser(user);
    setUser({
      id: "",
      name: "",
      hieuxe: "",
      description: "",
      shortdescription: "",
      quanlity: "",
      image: "",
    });
  };

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
      setValidation(emptyValidation.current);
      return;
    }
    setUser({
      id: "",
      name: "",
      hieuxe: "",
      description: "",
      shortdescription: "",
      quanlity: "",
      image: "",
    });
  }, [selectedUser]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Mã xe</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập mã xe"
                name="id"
                onChange={handleChange}
                value={user.id}
              />
              {validation.id && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.id}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Tên xe</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tên xe"
                name="name"
                onChange={handleChange}
                value={user.name}
              />
              {validation.name && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.name}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="form-group">
              <label>Hiệu xe</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập hiệu xe"
                name="hieuxe"
                onChange={handleChange}
                value={user.hieuxe}
              />
              {validation.hieuxe && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.hieuxe}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Viết mô tả"
                name="description"
                onChange={handleChange}
                value={user.description}
              />
              {validation.description && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.description}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <div className="form-group">
              <label>Short description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Viết mô tả ngắn"
                name="shortdescription"
                onChange={handleChange}
                value={user.shortdescription}
              />
              {validation.shortdescription && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.shortdescription}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6 mt-4">
            <div className="form-group">
              <label>Quanlity</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập số lượng xe còn ở bãi"
                name="quanlity"
                onChange={handleChange}
                value={user.quanlity}
              />
              {validation.quanlity && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.quanlity}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="form-group">
              <label>Hình ảnh</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập link hình"
                name="image"
                onChange={handleChange}
                value={user.image}
              />
              {validation.image && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.image}
                </div>
              )}
            </div>
          </div>
        </div>
        {isUpdating ? (
          <>
            <button className="btn btn-info mt-4" type="submit">
              Update
            </button>

            <button
              className="btn btn-danger mt-4 ms-2"
              onClick={() => {
                setUser({
                  id: "",
                  name: "",
                  hieuxe: "",
                  description: "",
                  shortdescription: "",
                  quanlity: "",
                  image: "",
                });
                cancelUpdate();
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button className="btn btn-success mt-4">Thêm xe</button>
        )}
      </form>
    </div>
  );
}
