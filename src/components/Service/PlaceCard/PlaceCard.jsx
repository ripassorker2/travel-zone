import React from "react";
import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
  //   console.log(place);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure></figure>
        <img src={place.picture} alt="Shoes" className="h-80 font-serif" />
        <div className="card-body flex flex-col justify-center items-center align-middle">
          <h2 className="card-title text-5xl text-center">{place.name}</h2>
          <div className="card-actions justify-center mt-6">
            <Link to={`/booking/${place.id}`}>
              <button className="btn btn-secondary">Booking Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
