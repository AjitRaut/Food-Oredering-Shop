import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpBuoy } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { SiSwiggy } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const { normal_item, nested_items } = useSelector((store) => store.cart);

  const totalItems = (normal_item?.length || 0) + (nested_items?.length || 0);

  return (
    <>
      <header className="w-full bg-slate-50 h-20 fixed top-0 shadow-sm z-50">
        <div className="max-w-screen-xl m-auto h-full px-3 flex justify-between items-center">
          <div className="flex justify-center place-items-center">
            <Link to={"/"}>
              <SiSwiggy className="text-amber-600 w-12 h-14" />
            </Link>
            <div className="ml-9 font-bold border-b-2 text-sm border-emerald-950 text-hfont">
              <h2>Other</h2>
            </div>
            <div className="text-sm pt-[2px] truncate ml-3 w-44 h-6 font-medium text-hfont">
            Nagpur, Maharashtra, India
            </div>
            <div>
              <MdKeyboardArrowDown className="text-orange-500 h-10 w-6" />
            </div>
          </div>

          <div className="flex font-sans text-hfont text-base font-medium">
            <ul className="flex justify-center items-center gap-12 cursor-pointer">
              <li className="flex gap-1 items-center hover:text-orange-500">
                <span>
                  <svg
                    className="_1GTCc"
                    viewBox="0 0 20 20"
                    height="20"
                    width="24"
                    fill="none"
                  >
                    <rect
                      x="2.46094"
                      y="7.98145"
                      width="15.0784"
                      height="10.7765"
                      rx="1.52523"
                      stroke="#02060C"
                      strokeOpacity="0.75"
                      fill="none"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    ></rect>
                    <path
                      d="M6.17822 4.91866C6.17822 3.90782 6.99767 3.08838 8.0085 3.08838H11.9916C13.0024 3.08838 13.8219 3.90782 13.8219 4.91866V5.22965C13.8219 5.61625 13.5085 5.92965 13.1219 5.92965H6.87822C6.49162 5.92965 6.17822 5.61625 6.17822 5.22965V4.91866Z"
                      fill="#02060C"
                      fillOpacity="0.75"
                    ></path>
                  </svg>
                </span>
                Swiggy Corporate
              </li>
              <li className="flex gap-1 items-center hover:text-orange-500">
                <span>
                  <IoIosSearch className="h-5 w-6" />
                </span>
                Search
              </li>
              <li className="flex gap-1 items-center hover:text-orange-500">
                <span>
                  <BiSolidOffer className="h-5 w-6" />
                </span>
                Offers
              </li>
              <li className="flex gap-1 items-center hover:text-orange-500">
                <span>
                  <IoMdHelpBuoy className="h-5 w-6" />
                </span>
                <Link to="/help">Help</Link>
              </li>
              <li className="flex gap-1 items-center hover:text-orange-500">
                <span>
                  <FiUser className="h-5 w-6" />
                </span>
                <Link to="/Sign in">Sign In</Link>
              </li>
              <li className="flex gap-1 items-center relative hover:text-orange-500">
                <span >
                  <svg
                    className="fill-green-600 stroke-slate-600 stroke-2"
                    viewBox="-1 0 37 32"
                    height="20"
                    width="24"
                    fill="#686b78"
                  >
                    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute  text-white top-[2px] left-[6px] text-sm font-bold">
                      {totalItems || 0}
                    </span>
                  )}
                </span>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
