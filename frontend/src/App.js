import React from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './index.css';


function App() {

  // The array which contains the radio stations
  const [stations, setStations] = React.useState([]);
  // The array which contains the countries objects
  const [countries, setCountries] = React.useState([]);
  // The time when we are waiting the loading data
  const [isLoading, setIsLoading] = React.useState(false);

  const [stationsPerPage, setStationsPerPage] = React.useState(9);
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastPost = currentPage*stationsPerPage;
  const indexOfFirstPots = indexOfLastPost- stationsPerPage;
  const currentStations = stations.slice(indexOfFirstPots,indexOfLastPost);  
  
  const api = new RadioBrowserApi('My Radio App');

  // Get data from radio api
  const getData = async () => {
    const datas = await api.searchStations({limit: 30})
    .then((data) => {
      let myCountryArr=[];
      
      for(let i=0; i<data.length; i++){
        let tempCountryName=data[i].country;
        let tempCountryCode=data[i].countryCode;   
    
        // Save the countries and their code from the aPI 
        if((tempCountryName !== "") && (tempCountryCode !== "")){
          if(!(myCountryArr.some(country => country.code === tempCountryCode))){          
            myCountryArr.push({code: tempCountryCode, country:tempCountryName});
          }           
        }
      }

    myCountryArr.sort((a, b) => (a.country > b.country) ? 1 : (b.country > a.country) ? -1 : 0);
    setCountries([{code: "", country:"All"}, ...myCountryArr]);
    setStations(data);
    setIsLoading(true); 
    
    })      
  };

  React.useEffect(() => {
      getData()
    }, 
    []
  );

  return (
    <div className="App">
      <div>
        <Navbar/>
        <Home 
          countries={countries}
          stations={currentStations}
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          stationsPerPage={stationsPerPage}
          total={stations.length}
        />
      </div>
    </div>
  );
}

export default App;
