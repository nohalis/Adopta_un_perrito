import React from "react";
import Tags from "./Tags";

const MyCard = ({ img, title, description, raza }) => {
  const getBadgeColor = (raza) => {
    switch (raza) {
      case "Dobermann":
        return "danger";
      case "Golden retriever":
        return "warning";
      case "Husky siberiano":
        return "primary";
      default:
        return "secondary";
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <Tags badgeColor={getBadgeColor(raza)} badgeText={raza} />
      </div>
    </div>
  );
};

export default MyCard;
