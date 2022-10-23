import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelDetails from "../HotelDetails/HotelDetails";

const Hotels = () => {
  const hotels = useLoaderData();
  //   console.log(hotels);
  return (
    <div className="w-10/12 m-auto grid  md:grid-cols-2 gap-5 my-11">
      {hotels?.map((hotel) => (
        <HotelDetails key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default Hotels;
