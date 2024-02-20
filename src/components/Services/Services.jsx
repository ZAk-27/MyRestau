/* eslint-disable no-unused-vars */
import React from "react";
import Img from "../../assets/BBQ-Bacon-Burger.png";
import Img2 from "../../assets/Classic-Cheeseburger1.png";
import Img3 from "../../assets/burger2-.png";
import StarRatings from "react-star-ratings";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    price:"23$",
    name: "Classic Cheeseburger",
    description:
      "The Classic Cheeseburger,combines seasoned beef,cheddar,fresh veggies,and pickles between toasted buns.",
  },
  {
    id: 2,
    img: Img,
    name: "BBQ Bacon Burger",
    description:
      "The BBQ Bacon Burger, with its succulent beef, smoky bacon, and tangy BBQ sauce, offers a symphony of flavors.",
  },
  {
    id: 3,
    img: Img3,
    name: "Veggie Delight Burger",
    description:
      "The Veggie Delight Burger offers a hearty veggie patty, fresh toppings, and house sauce, blending nutrition and taste.",
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
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {<StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    />}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm">
                    {service.description}
                  </p>
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
