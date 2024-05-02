import { Link, useNavigate } from "react-router-dom";
import Input from "../../../Components/Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getRule } from "../../../util/rule";
import Image from "../../../assets/ImageAuth.png";
import { registerAccount } from "../../../Api/Api.auth";
import { useState } from "react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const eye = () => {
    setShowPassword(!showPassword);
  };
  const rule = getRule();
  const navigate = useNavigate();
  const registerMutation = useMutation({
    mutationFn: (body) => registerAccount(body),
  });
  const onSubmit = handleSubmit((data) => {
    const body = data;
    registerMutation.mutate(body, {
      onSuccess: () => {
        navigate("/");
      },
    });
  });
  return (
    <div className="grid grid-cols-2">
      <div className="lg:col-span-1 col-span-2 w-full mb-10">
        <form
          className="mx-32 pt-[230px] text-mainColor-color_D9D9D9"
          onSubmit={onSubmit}
          noValidate
        >
          <div className=" w-full relative flex justify-between items-center  ">
            <span className="text-3xl font-text  font-semibold capitalize ">
              Đăng ký
            </span>
            <p className="mt-2">
              Bạn đã có tài khoản?
              <Link
                to={"/login"}
                className=" pl-1 text-red-500 cursor-pointer  hover:opacity-50"
              >
                Đăng nhập
              </Link>
            </p>
          </div>
          <div className="mt-7 ">
            <div className="flex gap-3">
              <Input
                name="firstName"
                type="text"
                placeholder="Họ"
                rules={rule.firstName}
                register={register}
                errorMessage={errors.firstName?.message}
              />
              <Input
                name="lastName"
                type="text"
                placeholder="Tên"
                rules={rule.lastName}
                register={register}
                errorMessage={errors.lastName?.message}
              />
            </div>
            <Input
              name="email"
              type="Email"
              placeholder="Email"
              rules={rule.email}
              register={register}
              errorMessage={errors.email?.message}
            />
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="on"
              rules={rule.password}
              register={register}
              errorMessage={errors.password?.message}
            />

            <div>
              <Input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="confirm password"
                autoComplete="on"
                rules={rule.confirmPassword}
                register={register}
                errorMessage={errors.confirmPassword?.message}
              />
              <div className="flex items-center gap-2 mb-3">
                <input type="checkbox" className="w-4 h-4" onClick={eye} />
                Hiển thị mật khẩu
              </div>
            </div>
          </div>

          <button className="w-full border py-3 my-2 hover:bg-mainColor-color_D9D9D9 hover:text-mainColor-color_2D0000 uppercase">
            đăng ký
          </button>
        </form>
      </div>
      <div className="col-span-1 hidden lg:block">
        <img src={Image} alt="" className="w-[100%]" />
      </div>
    </div>
  );
}

export default Register;
