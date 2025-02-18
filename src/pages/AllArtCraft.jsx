import React from "react";
import SingleCard from "../components/SingleCard";
import { useLoaderData } from "react-router-dom";
import AllHeaderArt from "../components/AllHeaderArt";
import Pagetitle from "../components/Pagetitle";

const AllArtCraft = () => {
  const allCards = useLoaderData();
  return (
    <div className="bg-blue-200 ">
       <Pagetitle title='All cart'></Pagetitle>
      <AllHeaderArt></AllHeaderArt>
      <div className=" max-w-6xl mx-auto  mt-10">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2  mx-auto">
          {allCards.map((singleCard) => (
            <SingleCard
              key={singleCard._id}
              singleCard={singleCard}
            ></SingleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArtCraft;
