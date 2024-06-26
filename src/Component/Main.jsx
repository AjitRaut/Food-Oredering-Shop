import { info } from "autoprefixer";
import Card from "./Card";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ShimmerUi from "./ShimmerUi";

const Main = () => {
  const [newdata, setnewdata] = useState([]);
  const [filtersearch, setfiltersearch] = useState([]);
  const [search, setsearch] = useState("");

  // Serch
  const Handle_Search = () => {
    if (search) {
      let searchfilter = newdata.filter((nam) =>
        nam.info.name.includes(search)
      );

      setfiltersearch(searchfilter);
    } else {
      setfiltersearch(newdata);
    }
  };

  useEffect(() => {
    Handle_Search();
  }, [search]);

  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      .then((res) => {
        setnewdata(
          res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setfiltersearch(
          res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      });
  }, []);

  return newdata.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className=" w-full ">
        <div className="my-24 ">
          <div className="max-w-6xl m-auto flex">
            <div className="max-w-6xl">
              <button
                className=" mx-8 bg-slate-100  px-3 py-2 cursor-pointer rounded-2xl font-semibold text-center text-base text-black  border-solid border-gray-400"
                onClick={() => {
                  let filterdata = newdata.filter(
                    (res) => res.info.avgRating > 4
                  );

                  setfiltersearch(filterdata);
                }}
              >
                Top Rated
              </button>
            </div>
            <div className="">
              <input
                className=" bg-slate-100 rounded-2xl px-3 py-2 w-96 outline-none text-black font-semibold text-base  border-solid border-gray-400"
                placeholder="Search for Restaront And Food"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                onClick={() => Handle_Search()}
                className=" mx-2 bg-slate-100  px-3 py-2 cursor-pointer rounded-2xl font-semibold text-center text-base text-black  border-solid border-gray-400"
              >
                Search
              </button>
            </div>
          </div>

          <div className="max-w-6xl  m-auto grid grid-cols-4 gap-7 px-4">
            {filtersearch.length > 0 ? (
              filtersearch.map((datt) => <Card key={info.id} datt={datt} />)
            ) : (
              <div className="flex justify-center items-center">
                <h2 className=" text-center font-black  ">
                  There is no match data
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
