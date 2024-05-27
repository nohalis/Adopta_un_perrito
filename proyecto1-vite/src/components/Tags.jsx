import React from "react";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

const Tags = ({ badgeColor, badgeText }) => {
  return (
    <Badge bg={badgeColor} className="m-1">
      {badgeText}
    </Badge>
  );
};

export default Tags;
