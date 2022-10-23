import React from "react";
import { useLoaderData } from "react-router-dom";
import PlaceCard from "./PlaceCard/PlaceCard";

const Service = () => {
  const places = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-5xl mt-7">Our Services</h1>
      <div class="p-10 w-11/12 m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Service;
