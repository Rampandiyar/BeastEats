import { useState } from "react";
import { data } from "./data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  // Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => item.category === category)
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => item.price === price)
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center mb-8">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between mb-8">
        {/* Filter Type */}
        <div className="mb-4 lg:mb-0">
          <p className="font-bold text-gray-700 mb-2">Filter Type</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFoods(data)}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 mb-2">Filter Price</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => filterPrice("$")}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-3 py-1 rounded-full transition"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between p-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white py-1 px-2 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
