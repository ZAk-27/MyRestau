import React, { useState, useEffect } from 'react';
import BurgerImg1 from "../../assets/burger10-.png";
import BurgerImg2 from "../../assets/burger2-.png";
import BurgerImg3 from "../../assets/burger1-.png";
import Vector from "../../assets/hero-section.jpg";

const ImageList = [
  {
    id: 1,
    img: BurgerImg1,
  },
  {
    id: 2,
    img: BurgerImg2,
  },
  {
    id: 3,
    img: BurgerImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(BurgerImg1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageId;
    img.onload = () => setLoading(false);
  }, [imageId]);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px]  flex justify-center items-center dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to the{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                  MyRestau
                </span>{" "}
                Zone
              </h1>
              <p className="text-1xl text-white">
              Experience the joy of biting into our fresh, juicy burgers, crafted with love and passion , Your destination for gourmet burgers ! 🍔
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                {loading ? <div>Loading...</div> : <img
                  src={imageId}
                  alt="burger img"
                  className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto ping "
                />}
              </div>
              <div className="flex lg:flex-col lg:top-1/3 lg:-translate-y-1/3 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <img
                    src={item.img}
                    key={item.id}
                    onClick={() => {
                      setImageId(
                        item.id === 1
                          ? BurgerImg1
                          : item.id === 2
                          ? BurgerImg2
                          : BurgerImg3
                      );
                      setLoading(true);
                    }}
                    alt="burger img"
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 curso"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
