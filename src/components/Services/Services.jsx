/* eslint-disable no-unused-vars */
import React from "react";
import Img1 from "../../assets/BBQ-Bacon-Burger.png";
import Img2 from "../../assets/Classic-Cheeseburger1.png";
import Img3 from "../../assets/veggie-dlight-burger.png";
import Img4 from "../../assets/chicken-burger.png";
import Img5 from "../../assets/fish-burger.png";
import Img6 from "../../assets/Mushroom-Swiss-Burger1.png";
import StarRatings from "react-star-ratings";
import { FaCartPlus } from 'react-icons/fa6';

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Classic Cheeseburger",
    description:
      "The Classic Cheeseburger,combines seasoned beef,cheddar,fresh veggies,and pickles between toasted buns.",
    price: "$9.99",
  },
  {
    id: 2,
    img: Img1,
    name: "BBQ Bacon Burger",
    description:
      "The BBQ Bacon Burger, with its succulent beef, smoky bacon, and tangy BBQ sauce, offers a symphony of flavors.",
    price: "$12.99",
  },
  {
    id: 3,
    img: Img3,
    name: "Veggie Delight Burger",
    description:
      "The Veggie Delight Burger offers a hearty veggie patty, fresh toppings, and house sauce, blending nutrition and taste.",
    price: "$8.99",
  },
  {
    id: 4,
    img: Img4,
    name: "Chicken Burger",
    description: "The Chicken Burger features a juicy chicken patty, fresh lettuce, and creamy mayo, all served on a soft bun.",
    price: "$10.99",
  },
  {
    id: 5,
    img: Img5,
    name: "Fish Burger",
    description: "The Fish Burger offers a crispy breaded fish patty, tartar sauce, and fresh lettuce on a toasted bun for you.",
    price: "$11.99",
  },
  {
    id: 6,
    img: Img6,
    name: "Mushroom-Swi Burger",
    description:
     "The Mushroom Swiss Burger features a beef patty topped with sautéed mushrooms and melted Swiss cheese.",
    price: "$13.99",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
            At our burger restaurant, we’re not just about serving food, we’re about creating an unforgettable dining experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service, id) => (
              <div key={id}
              data-aos="zoom-in"
              data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[170px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-10 text-center service-item mb-10">
                  <div className="w-full ">
                    {<StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={true}
                      starHoverColor="yellow"
                      starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    />}
                  </div>
                  <h1 className="text-xl font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm mb-8">
                    {service.description}
                  </p>
                  <p className="text-xl font-bold mb-5">{service.price}</p> {/* Display price */}
                  <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold hover:scale-105 duration-200 py-2 px-4 rounded-full">
                    <FaCartPlus className="text-xl text-white drop-shadow-sm cursor-pointer"/> {/* Add to Cart icon */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
