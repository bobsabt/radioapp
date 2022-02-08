import React from 'react';
import FilterPanel from './FilterPanel';


const Home = () => {

  const [genre, setGenre] = React.useState("all");
  

  return( 
    <div className='home-container'>
      <FilterPanel 
        genre={genre}
      />

     
    </div>
  );
};

export default Home;
