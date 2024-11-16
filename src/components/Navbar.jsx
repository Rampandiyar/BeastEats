import { useState } from "react";
import ham from "../assets/ham.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import xmark from "../assets/xmark.svg";
import order from "../assets/order.svg";
import favorite from "../assets/favorite.svg";
import wallet from "../assets/wallet.svg";
import help from "../assets/help.svg";
import promotion from "../assets/promotion.svg";
import bestone from "../assets/bestone.svg";
import invite from "../assets/invite.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-full mx-auto flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-50">
      {/* Left Side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer mr-4">
          <img src={ham} alt="Hamburger" className="sm:h-8 lg:h-10 h-6" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Best<span className="text-orange-500">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 p-1 rounded-full ml-4">
          <p className="p-2 bg-black text-white rounded-full cursor-pointer">Deliver</p>
          <p className="p-2 cursor-pointer">Pickup</p>
        </div>
      </div>
      {/* Search Bar */}
      <div className="flex items-center bg-gray-200 px-2 rounded-full w-[200px] sm:w-[400px] lg:w-[500px]">
        <img src={search} alt="search" className="h-5" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none p-2 w-full"
        />
      </div>
      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
        <img src={cart} alt="Cart" className="h-5 mr-2" />
        Cart
      </button>
      
      {/* Mobile Menu Overlay */}
      {nav && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-20 transition-transform duration-300 ${nav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl">
            Best <span className="font-bold text-orange-500">Eats</span>
          </h1>
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <img src={xmark} alt="Close" className="h-8" />
          </div>
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 cursor-pointer">
            <li className="text-xl py-4 flex items-center hover:bg-gray-100 rounded-full px-2">
              <img src={order} alt="Orders" className="mr-4 h-6" />
              Orders
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-100 rounded-full px-2">
              <img src={favorite} alt="Favorites" className="mr-4 h-6" />
              Favorites
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-100 rounded-full px-2">
              <img src={wallet} alt="Wallets" className="mr-4 h-6" />
              Wallets
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-100 rounded-full px-2">
              <img src={help} alt="Help" className="mr-4 h-6" />
              Help
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-100 rounded-full px-2">
              <img src={promotion} alt="Promotions" className="mr-4 h-6" />
              Promotions
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-100 rounded-full px-2">
              <img src={bestone} alt="Best One" className="mr-4 h-6" />
              Best One
            </li>
            <li className="text-xl py-4 flex items-center hover:bg-gray-100 rounded-full px-2">
              <img src={invite} alt="Invite Friends" className="mr-4 h-6" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
