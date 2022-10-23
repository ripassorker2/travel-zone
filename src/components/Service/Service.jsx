import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      <h1 className="text-center text-5xl mt-7">Our Services</h1>
      <div class="p-10 w-11/12 m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div class="rounded overflow-hidden shadow-lg p-4 border">
          <img
            class="w-full h-80"
            src="https://dailyasianage.com/library/1582060099_9.jpg"
            alt="Mountain"
          />
          <div class=" py-4">
            <div class="font-bold text-xl mb-2">Sundarban</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <Link to="/booking">
            <button className="btn btn-outline btn-secondary w-full">
              Booking Now
            </button>
          </Link>
        </div>
        <div class="rounded overflow-hidden shadow-lg p-4 border">
          <img
            class="w-full h-80"
            src="https://media.istockphoto.com/photos/marigot-saint-martin-skyline-picture-id637491930?k=20&m=637491930&s=612x612&w=0&h=tDU5gksoBIAd40N9mSM1b6H_HrCwlQtVmEQPyKRxnfQ="
            alt="Mountain"
          />
          <div class=" py-4">
            <div class="font-bold text-xl mb-2">Sent Martin</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <Link to="/booking">
            <button className="btn btn-outline btn-secondary w-full">
              Booking Now
            </button>
          </Link>
        </div>
        <div class="rounded overflow-hidden shadow-lg p-4 border">
          <img
            class="w-full h-80"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=700&h=-1&s=1"
            alt="Mountain"
          />
          <div class=" py-4">
            <div class="font-bold text-xl mb-2">Cox's Bajar</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <Link to="/booking">
            <button className="btn btn-outline btn-secondary w-full">
              Booking Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
