import React from "react";

const Genre = ({ genre, filteredgenre}) => {

  return (
    <>
      <button className="genre-btn" >
        {filteredgenre}
      </button>
    </>
  );
};

export default Genre;