/* eslint-disable react/no-unescaped-entities */
import card1 from "../assets/Cards/card1.jpg";
import card2 from "../assets/Cards/card2.jpg";
import card3 from "../assets/Cards/card3.jpg";
export default function Cards() {
  return (
    <div className="lg:mt-24 py-16 p-4 max-w-full mx-auto grid md:grid-cols-3 cursor-pointer lg:grid-cols-3 grid-1 gap-6">
      {/* Card */}
      <div className="rounded-xl relative cursor-pointer ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 cursor-pointer  rounded-xl text-white">
          <p className="font-bold text-2xl md:text-xl px-2 pt-4">
            Sun's Out, BOGO Out
          </p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white duration-[0.3s] hover:scale-[1.05] border-none shadow-md text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white">
            Over Now
          </button>
        </div>
        <img
          src={card1}
          alt="card1"
          className="rounded-xl  max-h-[160px] md:max-h-[200px] w-full object-cover"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold md:text-xl text-2xl px-2 pt-4">
            New Restarunts
          </p>
          <p className="px-2">Added Daily</p>
          <button className="border-white  duration-[0.3s] hover:scale-[1.05] border-none shadow-md bg-white text-black mx-2 absolute bottom-4">
            Over Now
          </button>
        </div>
        <img
          src={card2}
          alt="card2"
          className="rounded-xl  max-h-[160px] md:max-h-[200px] w-full object-cover"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl md:text-xl px-2 pt-4">
            We Deliver Deserts
          </p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white duration-[0.3s] hover:scale-[1.05] border-none shadow-md shadow-black bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          src={card3}
          alt="card3"
          className="rounded-xl  max-h-[160px] md:max-h-[200px] w-full object-cover"
        />
      </div>
    </div>
  );
}
