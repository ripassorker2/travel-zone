import React from "react";

const HotelDetails = ({ hotel }) => {
  console.log(hotel);
  const { title, picture, about, rating, total } = hotel;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={picture} alt="Album" className="w-full md:w-48 h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gray-700">{title}</h2>
          <p className="text-gray-700"> {about}</p>
          <div className="text-gray-700">
            <p>Price: {total} taka per night .</p>
            <p>Ratting: {rating}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary btn-outline">
              Book Hotel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
