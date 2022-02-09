import React from 'react';
import FilterPanel from './FilterPanel';
import StationsPanel from './StationsPanel';


const Home = ({ countries, stations, currentPage, setCurrentPage, stationsPerPage, total, api, setStations }) => {

    const [genre, setGenre] = React.useState("all");
    const [code, setCode] = React.useState("");
    const [name, setName] = React.useState("");

    const updateGenre = (newGenre) => { 
        setGenre(newGenre);
        getRadioStation(code, newGenre, name);
    };

    const updateCountryCode = (newCode) => {  
        setCode(newCode);
        getRadioStation(newCode, genre, name);
    };

    const updateName = (newName) => { 
        setName(newName);
        if(newName.length > 3){
            getRadioStation(code, genre, newName);
        }
    };

    const getRadioStation = async (newCode,  newGenre, newName) => {
        let filter = {limit: 30};
       
        if(newCode !== ""){
          filter={...filter, countryCode: newCode}
        }
        if(newGenre !== "all"){
          filter={...filter, tag: newGenre}
        }
        if(newName.length > 3){
          filter={...filter, name: newName}
        }
        const datas = await api.searchStations(filter)
        .then((data) => {
          setStations(data)
          setCurrentPage(1)
        });  
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
