import React from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const BookingPage = () => {
  const handleSubmitInfo = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const from = event.target.city1.value;
    const to = event.target.city2.value;
    const date = event.target.date.value;
    console.log(name, email, from, to, date);
  };

  const placeInfo = useLoaderData();
  // console.log(placeInfo);
  const { name, picture, id } = placeInfo;

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-cyan-50  rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-black">
                  <p className="font-medium text-3xl mb-4 ">{name}</p>
                  <img src={picture} alt="" />
                </div>
                <form onSubmit={handleSubmitInfo} className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="your name"
                        required
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                        required
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">From</label>
                      <input
                        type="city"
                        name="city1"
                        id="city1"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-100"
                        placeholder="from"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">To</label>
                      <input
                        type="city"
                        name="city2"
                        id="city2"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="to"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">Date</label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="to"
                        required
                      />
                    </div>

                    <div className="inline-flex items-end">
                      <Link to={`/hotels/${id}`}>
                        <button
                          // onClick={toast.success("Thanks for booking")}
                          className="bg-pink-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
