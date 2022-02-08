import React from 'react';
import FilterPanel from './FilterPanel';
import StationsPanel from './StationsPanel';


const Home = ({ countries, stations, currentPage, setCurrentPage, stationsPerPage, total }) => {

    const [genre, setGenre] = React.useState("all");
    const [code, setCode] = React.useState("");
    const [name, setName] = React.useState("");

    const updateGenre = (newGenre) => { 
        setGenre(newGenre);
    };

    const updateCountryCode = (newCode) => {  
        setCode(newCode);
        
    };

    const updateName = (newName) => { 
        setName(newName)
    };
  

  return( 
    <div className='home-container'>
      <FilterPanel 
        genre={genre}
        updateGenre={updateGenre}
        countries={countries}
        updateCountryCode = {updateCountryCode}
      />
      <StationsPanel
        stations={stations}
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        stationsPerPage={stationsPerPage}
        total={total}
        name={name}
        updateName={updateName}

      />
    </div>
  );
};

export default Home;
