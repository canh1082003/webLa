import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BannerImage from "../../img/main/pizzaLogo.jpg";

import UserInforHeader from "./UserInforHeader";
import CartHeader from "./CartHeader";

function Header() {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(prevScrollY > currentScrollY);
    setPrevScrollY(currentScrollY);
  };
  const controls = useAnimation();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);
  useEffect(() => {
    controls.start({ opacity: visible ? 1 : 0 });
  }, [visible, controls]);

  return (
    <>
      <header className="  pt-24 w-full bg-opacity-80  bg-mainColor-color_257866 text-mainColor-color_D9D9D9">
        <motion.div
          initial={{ opacity: 1 }}
          animate={controls}
          transition={{ opacity: { duration: 0.2 } }}
          className="group fixed top-0 right-0 left-0 z-50  bg-mainColor-color_257866 py-5"
        >
          <div className="flex w-full items-center pb-4 justify-between   px-10 h-[60px] ">
            <Link to={"/"}>
              <img src={BannerImage} alt="" className="w-full h-[115px]" />
            </Link>
            <div className="flex gap-10 ">
              <Link
                to={"/"}
                className="py-2 text-white text-[20px] font-bold hover:text-black"
              >
                Trang chủ
              </Link>
              <Link
                to={"/danhsach"}
                className="py-2 text-white text-[20px] font-bold hover:text-black"
              >
                Danh sách sản phẩm
              </Link>
              <input
                type="text"
                placeholder="Tìm kiếm pizza"
                className=" py-2 bg-mainColor-color_D9D9D9 text-black rounded-full px-3 outline-none"
              />
            </div>

            <div className="flex gap-5 text-white">
              <div className="flex gap-3 items-center">
                <div className=" bg-mainColor-color_D9D9D9  p-2 rounded-full"></div>
              </div>
              <UserInforHeader />
              <CartHeader />
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
