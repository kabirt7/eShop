import React from "react";
import { Link } from "react-router-dom";

const HomeFeaturedItem = ({ name, id }) => {
  return (
    <div>
      <h1>{name}</h1>
      <Link to={`/catalogue/${id}`}>More Info</Link>
    </div>
  );
};

export default HomeFeaturedItem;
