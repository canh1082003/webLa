import { useQuery } from "@tanstack/react-query";
import { Category, productApi } from "../../Api/Api.product";
import useQueryParams from "../../util/useQueryParams";
import { useState } from "react";
import { Link, createSearchParams } from "react-router-dom";
import { formatPrice } from "../../helper/formatPrice";

import { useAllProduct } from "../../hook/useAllProduct";

function Products() {
  const [showAll, setShowAll] = useState(false);

  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const queryParams = useQueryParams();
  const { data } = useAllProduct(queryParams);
  const { data: DataCategory } = useQuery({
    queryKey: ["Category"],
    queryFn: () => {
      return Category();
    },
  });
  const handleShowAllProducts = () => {
    setShowAll(true);
  };
  const handleCategoryClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <div className=" top-[100px]   left-0 right-0 py-5  w-full cursor-pointer font-bold text-xl">
      <div className=" flex gap-10 justify-center ml-14">
        {DataCategory &&
          DataCategory.data.map((Category) => {
            const isActive = Category.id === activeCategoryId;
            return (
              <Link
                to={{
                  pathname: "/danhsach",
                  search: createSearchParams({
                    ...queryParams,
                    category: Category.id,
                  }).toString(),
                }}
                className={` border rounded-full px-6 py-3 hover:text-mainColor-color_2D0000 hover:bg-mainColor-color_D9D9D9 ${isActive ? "bg-mainColor-color_D9D9D9 text-mainColor-color_2D0000" : "text-mainColor-color_D9D9D9"}`}
                onClick={() => handleCategoryClick(Category.id)}
                key={Category.id}
              >
                {Category.name}
              </Link>
            );
          })}
        ;
      </div>
      <div className="grid grid-cols-4 mx-32">
        <div className=" col-span-4  bg-opacity-50">
          <div className="my-10">
            <div className="grid grid-cols-3 gap-6 mx-10 pt-5">
              {data &&
                data.data.products
                  .slice(0, showAll ? data.data.products.length : 6)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="col-span-1 hover:scale-95 "
                    >
                      <Link to={`/${product.id}`}>
                        <div className="bg-mainColor-color_D9D9D9 flex-grow">
                          <div className="w-full  pt-[100%] relative  ">
                            <img
                              src={product.imgUrl}
                              alt=""
                              className="absolute  top-0 left-0 w-full h-full object-cover"
                            />
                          </div>
                          <div className="overflow-hidden p-2">
                            <div className="min-h-[2rem] text-lg font-bold line-clamp-2">
                              {product.name}
                            </div>
                            <div className="mt-3 flex justify-between">
                              <div className="ml-1 truncate text-orange">
                                <span className="text-sm">
                                  {formatPrice(product.price * 1)}
                                </span>
                              </div>
                              <div className="text-mainColor-color_2D0000 font-medium text-[13px]">
                                chi tiết sản phẩm
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
            </div>
            <div className="mt-20">
              <div className="text-center font-bold">
                <button
                  className="border border-white text-white px-5 py-3 rounded-full hover:bg-slate-500 hover:border-none"
                  onClick={handleShowAllProducts}
                >
                  Xem tất cả
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
