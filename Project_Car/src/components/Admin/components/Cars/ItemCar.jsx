import React from "react";

export default function ItemCar({ user, onDelete, onGetUser, cancelUpdate }) {
  const { image, quanlity, shortdescription, description, hieuxe, name, id } = user;
  return (
    <tr className>
      <td scope="row">{id}</td>
      <td>{name}</td>
      <td>{hieuxe}</td>
      <td
        style={{
          maxWidth: "200px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {description}
      </td>
      <td>{shortdescription}</td>
      <td>{quanlity}</td>
      <td
        style={{
          maxWidth: "200px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {image}
      </td>
      <td>
        <button
          className="btn btn-primary me-5 mb-2 "
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
