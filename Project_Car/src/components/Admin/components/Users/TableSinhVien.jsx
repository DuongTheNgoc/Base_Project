import React from "react";
import IteamSV from "./IteamSV";
export default function TableSinhVien({
  users,
  onDelete,
  onGetUser,
  onChangeSearchTerm,
  cancelUpdate,
}) {
  return (
    <div>
      <div className="table-responsive mt-4 ">
        <div className="form-group container">
          <div className="input-group">
            <input
              type="text"
              className="form-control mb-2"
              onChange={onChangeSearchTerm}
              placeholder="Tìm kiếm xe"
            />
            <div className="input-group-prepend">
              <span className="input-group-text pt-3">
                <i className="fa fa-search" />
              </span>
            </div>
          </div>
        </div>
        <table className="table table-dark container mt-3">
          <thead>
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Họ tên</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <IteamSV
                key={user.id}
                user={user}
                onDelete={onDelete}
                onGetUser={onGetUser}
                cancelUpdate={cancelUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
