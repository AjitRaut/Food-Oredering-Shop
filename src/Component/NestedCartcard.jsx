import React, { useState } from "react";
import { Recomended_IMG_URL } from "../Utils/Url";
import { removenested_items } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const NestedCartcard = ({ nestedcards, index }) => {
  const dispatch = useDispatch();

  const { name, imageId, defaultPrice, price } = nestedcards;
  const initialPrice = defaultPrice / 100 || price / 100;

  const [quantity, setQuantity] = useState(1);
  const itemTotal = initialPrice * quantity;
  const deliveryFee = Math.floor(initialPrice / 14);
  const platformFee = Math.floor(initialPrice / 60);
  const gst = Math.floor(itemTotal * 0.07);
  const totalToPay = itemTotal + deliveryFee + platformFee + gst;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleRemove = (index) => {
    dispatch(removenested_items(index));
  };

  if (!nestedcards || nestedcards.length === 0) {
    return <div>No items in the cart</div>;
  }

  return (
    <div>
      <div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={Recomended_IMG_URL + imageId}
              alt="Restaurant"
              className="w-12 h-12 rounded"
            />
            <div>
              <h3 className="text-lg">{nestedcards?.name}</h3>
              <p>{name}</p>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-200 py-1 px-2"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="bg-gray-200 py-1 px-2"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </div>
            <span>₹{itemTotal.toFixed(2)}</span>
          </div>
          <div className="mb-4">
            <p>Opt in for No-contact Delivery</p>
            <input type="checkbox" className="mr-2" checked readOnly />
            Our delivery partner will call to confirm.
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Bill Details</h4>
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{itemTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹{platformFee}</span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>₹{gst}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>TO PAY</span>
              <span>₹{totalToPay.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-end gap-3">
              <div className="flex justify-end">
                <button
                  onClick={() => handleRemove(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Remove
                </button>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Buy Now
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NestedCartcard;
