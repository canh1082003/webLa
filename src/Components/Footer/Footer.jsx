import Face from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

function Footer() {
  return (
    <div className="bg-mainColor-color_257866 text-white ">
      <div className="container">
        <div className="grid grid-cols-12 mx-10 py-10 gap-7">
          <div className="col-span-4 text-mainColor-color_2D0000 ">
            <h1 className="font-bold text-lg pb-3">Về chúng tôi</h1>
            <p>
              Shop pizza Online chuyên cung cấp các dòng pizza cao cấp, pizza
              nhập khẩu
            </p>
          </div>
          <div className="col-span-3 text-mainColor-color_2D0000">
            <h1 className="font-bold text-lg pb-3">Hỗ Trợ Khách Hàng</h1>
            <ul>
              <li>Tra cứu đơn hàng</li>
              <li>Liên hệ</li>
              <li>Chính sách vận chuyển</li>
            </ul>
          </div>
          <div className="col-span-3">
            <h1 className="font-bold text-lg pb-3">Tìm Hiểu Thêm</h1>
            <ul>
              <li>Giới thiệu</li>
              <li>Sản phẩm</li>
              <li>Một số thành tích của quán</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h1 className="font-bold text-lg pb-3">Theo Dõi</h1>
            <div className="flex gap-3">
              <img src={Face} alt="" width={40} />
              <img src={Instagram} alt="" width={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
