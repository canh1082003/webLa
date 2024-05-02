import { useQuery } from "@tanstack/react-query";
import { PRODUCT_DETAIL_QUERY } from "../../../util/constants";
import { ProductDetailApi } from "../../../Api/Api.product";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
function ProductDetail() {
  const { addItem } = useCart();
  const { id } = useParams();

  const { data: DataDetail } = useQuery({
    queryKey: [PRODUCT_DETAIL_QUERY, id],
    queryFn: () => {
      return ProductDetailApi(id);
    },
  });
  const product = DataDetail?.data;

  return (
    <div className="pt-[60px] ">
      <div className="grid grid-cols-2 mx-20" key={product?.id}>
        <div className="col-span-1 mb-10">
          <img src={product?.imgUrl} alt="" width={500} />
        </div>
        <div className="col-span-1">
          <h1 className="text-[30px] pb-3 font-bold text-mainColor-color_D9D9D9 capitalize">
            {product?.name}
          </h1>
          <div className="flex justify-between">
            <p className="py-5 text-[24px] font-bold text-mainColor-color_D9D9D9">
              Giá : {product?.price}
            </p>
          </div>
          <div className="w-full h-[1px] bg-white my-3"></div>
          <div className="py-5 text-[24px] font-bold text-mainColor-color_D9D9D9">
            Mô tả
          </div>
          <p className="pb-2 text-[18px]  text-mainColor-color_D9D9D9">
            {product?.description}
          </p>
          <div className="w-full h-[1px] bg-white my-5"></div>
          <div className="grid grid-cols-4 gap-1 py-5">
            <button
              className=" col-span-2 border w-full px-5 py-4 text-mainColor-color_D9D9D9 hover:bg-mainColor-color_D9D9D9 hover:text-mainColor-color_2D0000"
              onClick={() => addItem(product)}
            >
              Thêm vào giỏ hàng
            </button>
            <Link
              to={"/pay"}
              onClick={() => addItem(product)}
              className="col-span-2 border w-full text-center px-5 py-4 text-mainColor-color_D9D9D9 hover:bg-mainColor-color_D9D9D9 hover:text-mainColor-color_2D0000"
            >
              Mua ngay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
