import React from "react";

const Genre = ({ genre, filteredgenre, updateGenre }) => {

  return (
    <>
      <button className={genre === filteredgenre ? "selected-genre" : "genre-btn"} onClick={() => updateGenre(filteredgenre)}>
        {filteredgenre}
      </button>
    </>
  );
};

export default Genre;