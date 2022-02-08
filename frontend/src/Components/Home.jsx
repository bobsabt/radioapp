import React from 'react';
import FilterPanel from './FilterPanel';


const Home = ({ countries }) => {

    const [genre, setGenre] = React.useState("all");
    const [code, setCode] = React.useState("");

    const updateGenre = (newGenre) => { 
        setGenre(newGenre);
    };
    const updateCountryCode = (newCode) => {  
        setCode(newCode);
        
    };
  

  return( 
    <div className='home-container'>
      <FilterPanel 
        genre={genre}
        updateGenre={updateGenre}
        countries={countries}
        updateCountryCode = {updateCountryCode}
      />

     
    </div>
  );
};

export default Home;
