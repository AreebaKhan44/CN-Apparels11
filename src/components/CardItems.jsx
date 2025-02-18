import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useLoaderData } from "react-router-dom";

const CardItems = () => {
  const [products, setProducts] = useState([]);

const crafts = useLoaderData()

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 bg-gray-100 mx-auto">
        {crafts.slice(0, 6).map((cardItem) => (
          <CartItem key={cardItem._id} cardItem={cardItem}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default CardItems;

