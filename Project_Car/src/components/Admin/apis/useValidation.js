import React from "react";

export default function useValidation() {
  const checkEmpty = (value) => {
    if (!value) {
      return false;
    }

    return true;
  };
  const checkNumber = (value) => {
    if (value) {
      const regex = /^[0-9]+$/;
      if (!regex.test(value)) {
        return false;
      }
      return true;
    }
    return false;
  };
  const checkEmail = (value) => {
    if (value) {
      const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        return false;
      }
      return true;
    }
    return false;
  };

  return { checkEmpty, checkNumber, checkEmail };
}
