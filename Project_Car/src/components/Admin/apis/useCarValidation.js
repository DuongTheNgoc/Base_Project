import React from "react";

export default function useCarValidation() {
  const checkEmpty = (value) => {
    if (!value) {
      return false;
    }

    return true;
  };

  return { checkEmpty };
}
