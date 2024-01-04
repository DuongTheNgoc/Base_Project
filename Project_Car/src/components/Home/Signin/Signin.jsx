import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../../modules/Auth/slices/authSlices";
import { Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onSubmit",
  });

  const { currentUser, isLoading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignin = async (values) => {
    try {
      await dispatch(signin(values)).unwrap();
      toast.success("Đăng nhập thành công");
    } catch (error) {
      toast.error("Đăng nhập thất bại");
    }
  };
  const handleError = (errors) => {
    toast.error("Đăng nhập thất bại");
  };

  if (currentUser) {
    // nếu có thông tin đăng nhập => chuyển hướng về user bẳng component Navigate(nó chuyển hướng ngay luôn không cần tác động)
    return <Navigate to="/" />;
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-primary vh-100"
      style={{
        backgroundImage: `url(
      "https://sohanews.sohacdn.com/2020/4/25/dsc9157-1587790663914971258389.jpg"
    )`,
      }}
    >
      <div className="bg-info p-3 rounded w-25">
        <h1 className="text-center">Signin</h1>
        <form onSubmit={handleSubmit(handleSignin, handleError)}>
          <div>
            <label className="fs-6 fw-bold">Tài khoản</label>
            <input
              className="form-control rounded-0"
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "Tài khoản không được để trống",
                },
              })}
            />
            {errors.taiKhoan && (
              <span style={{ fontSize: "16px", fontWeight: "bold", color: "red" }}>
                {errors.taiKhoan.message}
              </span>
            )}
          </div>
          <div>
            <label className="fs-6 fw-bold">Mật khẩu</label>
            <input
              className="form-control rounded-0"
              type="password"
              {...register("matKhau", {
                required: { value: true, message: "Mật khẩu không được để trống" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message:
                    "Mật khẩu phải có ít nhất 8 kí tự, gồm 1 kí tự hoa, 1 kí tự thường và 1 kí tự sớ",
                },
              })}
            />
            {errors.matKhau && (
              <span style={{ fontSize: "16px", fontWeight: "bold", color: "red" }}>
                {errors.matKhau.message}
              </span>
            )}
          </div>
          {error && <p>{error}</p>}
          <button className="btn btn-success mt-3" disabled={isLoading}>
            Đăng Nhập
          </button>
        </form>
        <Toaster position="top-center" />
      </div>
    </div>
  );
}
