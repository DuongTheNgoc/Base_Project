import React from "react";

import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // biến điều hướng
  const navigate = useNavigate();
  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}
