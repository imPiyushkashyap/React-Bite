import React from "react";

interface CardProps {
  title: string;
  image: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText,  }) => {
  return (
    <div className=" w-300 h-300 m-16 rounded-md shadow-lg bg-color7">
      <div className=" flex text-black ">
        <img src={image} alt={title} className=" rounded-t-md " />
        <div className=" font-sans m-5 text-2xl">
          {title}

          <div className="text-sm m-2">{description}</div>
        </div>
        <div className=" self-end items-center justify-center ">
          <button className="  bg-color5 m-4 w-14 rounded-md shadow-md">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
