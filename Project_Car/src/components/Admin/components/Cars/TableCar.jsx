import React from "react";
import ItemCar from "./ItemCar";
export default function TableCar({ users, onDelete, onGetUser, onChangeSearchTerm, cancelUpdate }) {
  return (
    <div>
      <div className="table-responsive mt-4  ">
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
              <th scope="col">Tên xe</th>
              <th scope="col">Hiệu xe</th>
              <th scope="col">Description</th>
              <th scope="col">shortdescription</th>
              <th scope="col">Quanlity</th>
              <th scope="col">image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ItemCar
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
