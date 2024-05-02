import { useState } from "react";
import { useUserInfo } from "../../hook/useUserInfo";
import { useMutation } from "@tanstack/react-query";
import { UpdateAccountUser } from "../../Api/Api.auth";

function UserInfor() {
  const userInfor = useUserInfo();
  const isVerifyEmailColor = userInfor.isVerifyEmail === "1" ? "green" : "";
  const [isUpdateProfile, setIsUpdateProfile] = useState(false);
  const [name, setUserName] = useState(
    `${userInfor.firstName} ${userInfor.lastName}`
  );
  const { mutate } = useMutation({
    mutationFn: ({ firstName, lastName, id }) => {
      return UpdateAccountUser({ firstName, lastName }, id);
    },
  });
  const saveDisplay = isUpdateProfile ? "flex" : "hidden";
  const handleUpdateUserInfor = () => {
    const [firstName, lastName] = name.split(" ");
    mutate(
      { firstName, lastName, id: userInfor.id },
      {
        onSuccess(data) {
          localStorage.setItem(
            "userInfo",
            JSON.stringify(data.data.updatedUser),
            window.location.reload()
          );
        },
      }
    );
  };

  return (
    <div>
      <div className="container mx-auto my-32">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt
                className="rounded-full  mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>
            <div className="mt-16">
              <div className="">
                <input
                  type="text"
                  className="w-full px-3 py-4 border  font-bold text-center text-3xl text-gray-900 "
                  value={name}
                  onChange={(e) => {
                    setIsUpdateProfile(true);
                    setUserName(e.target.value);
                  }}
                />
                <span
                  className={`${saveDisplay} justify-center  text-mainColor-color_767586 hover:text-mainColor-color_2D0000 pt-3 text-lg cursor-pointer`}
                  onClick={handleUpdateUserInfor}
                >
                  save
                </span>
              </div>

              <div className="my-5 px-6">
                <a
                  href="#"
                  className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  Kết nối với
                  <span className=" pl-1 font-bold">{userInfor.email}</span>
                </a>
              </div>
              <div className="w-full">
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  <div className="flex gap-2 border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full  hover:bg-gray-100 transition duration-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`text-${isVerifyEmailColor}-500 w-6 h-6`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    Xác thực Email
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserInfor;
