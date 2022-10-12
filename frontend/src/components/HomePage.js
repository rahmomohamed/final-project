import React, { useState } from "react";
import { useSelector } from "react-redux";
import PersonCard from "./PersonCard";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  const persons = useSelector((state) => state.logic);
  const filteredPersons = persons.filter((item) =>
    Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase())
    )
  );

  return (
    <div className="HomePage">
      <div className="InputContainer">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search by name..."
          className="SearchInput"
        />
      </div>
      <div className="PersonsContainer">
        {filteredPersons.map((person) => (
          <PersonCard key={person._id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
