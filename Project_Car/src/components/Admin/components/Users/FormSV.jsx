import { useEffect, useRef, useState } from "react";
import useValidation from "../../apis/useValidation";
export default function FormSV({
  onAddUser,
  selectedUser,
  isUpdating,
  cancelUpdate,
  handleUpdateUser,
}) {
  const [user, setUser] = useState({
    id: "",
    fullname: "",
    phone: "",
    email: "",
  });
  const emptyValidation = useRef({
    id: "",
    fullname: "",
    phone: "",
    email: "",
  });
  const [validation, setValidation] = useState(emptyValidation.current);

  const { checkEmpty, checkEmail, checkNumber } = useValidation();
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
      fullname: {
        status: checkEmpty(user.fullname),
        messageError: "Họ tên không được bỏ trống",
      },
      phone: {
        status: checkNumber(user.phone) && checkEmpty(user.phone),
        messageError: "Phone trống hoặc không hợp lệ",
      },

      email: {
        status: checkEmail(user.email) && checkEmpty(user.email),
        messageError: "Email trống hoặc không hợp lệ",
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
      setUser({ id: "", fullname: "", phone: "", email: "" });
      cancelUpdate();
      return;
    }
    onAddUser(user);
    setUser({ id: "", fullname: "", phone: "", email: "" });
  };

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
      setValidation(emptyValidation.current);
      return;
    }
    setUser({ id: "", fullname: "", phone: "", email: "" });
  }, [selectedUser]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Mã SV</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập mã sv"
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
              <label>Họ và tên</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập họ và tên"
                name="fullname"
                onChange={handleChange}
                value={user.fullname}
              />
              {validation.fullname && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.fullname}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập Số điện thoại"
                name="phone"
                onChange={handleChange}
                value={user.phone}
              />
              {validation.phone && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.phone}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập Email"
                name="email"
                onChange={handleChange}
                value={user.email}
              />
              {validation.email && (
                <div className="alert alert-danger mt-2 " role="alert">
                  {validation.email}
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
                setUser({ id: "", fullname: "", phone: "", email: "" });
                cancelUpdate();
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button className="btn btn-success mt-4">Thêm người dùng</button>
        )}
      </form>
    </div>
  );
}
