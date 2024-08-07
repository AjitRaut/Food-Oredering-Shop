import { useState, useEffect } from "react";
import axios from "axios";

const UseMain = () => {
  const [newdata, setNewData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      .then((res) => {
        setNewData(res?.data?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return newdata;
};

export default UseMain;
