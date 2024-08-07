import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductItemsCrad from "./ProductItemsCrad";
import ProductNestedCategories from "./ProductNestedCategories";

const ProductCategories = ({ categories, show, setshow }) => {
  const handleshow = () => {
    setshow();
  };

  return (
    <>
      <div>
        <div key={categories.title}>
          <div
            className={`flex justify-between place-items-center border-t-[12px] bg-white ${
              categories.itemCards && categories.itemCards.length > 0
                ? "cursor-pointer"
                : ""
            }`}
            onClick={handleshow}
          >
            <div className="text-lg font-bold p-[10px]">
              {categories.title}
              {categories.itemCards && ` (${categories.itemCards.length})`}
            </div>
            <div
              className={`transition-transform duration-300 ${
                show ? "rotate-180" : ""
              }`}
            >
              {categories.itemCards && categories.itemCards.length > 0 && (
                <MdKeyboardArrowDown className="h-6 w-6" />
              )}
            </div>
          </div>
          {show && <ProductItemsCrad itemCards={categories.itemCards} />}

          <ProductNestedCategories nestedCategories={categories.categories} />
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
