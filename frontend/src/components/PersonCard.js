import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function PersonCard({ person }) {
  return (
    <Link to={`/persons/${person._id}`} key={person._id}>
      <div className="PersonCard">
        <img
          src={`https://api.lorem.space/image/face?w=300&h=300&hash=${person._id}`}
          alt={person.name}
        />

        <div className="PersonDescription">
          <h3>{person.name}</h3>
          <p>Age: {person.age}</p>
          <p>
            Status:{" "}
            <span className={`${person.status.toLowerCase()}`}>
              {person.status}
            </span>
          </p>
          <p>Last seen: {person.lastseen}</p>
        </div>
      </div>
    </Link>
  );
}

PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PersonCard;
