import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

function PersonCard({ person }) {
  return (
    <Link to={`/person/${person.id}`} key={person.id}>
      <div className="PersonCard">
        <img
          src="https://api.lorem.space/image/face?w=150&h=150"
          alt={person.name}
        />
      </div>
      <div className="PersonCard" key={person.id}>
        <FontAwesomeIcon icon={faCircleArrowRight} className="CircleArrow" />
        <div className="PersonDescription">
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
          <p>Status: {person.status}</p>
          <p>Last seen Area: {person.lastseen}</p>
        </div>
      </div>
    </Link>
  );
}

PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PersonCard;
