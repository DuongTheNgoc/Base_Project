import React from "react";

export default function IteamSV({ user, onDelete, onGetUser, cancelUpdate }) {
  const { email, phone, fullname, id } = user;
  return (
    <tr className>
      <td scope="row">{id}</td>
      <td>{fullname}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <button
          className="btn btn-primary me-3"
          onClick={() => {
            onGetUser(id);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(id);
            cancelUpdate();
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
