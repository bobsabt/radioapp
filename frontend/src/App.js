import React from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './index.css';
import './loadingmask.css';


function App() {

  // The array which contains the radio stations
  const [stations, setStations] = React.useState([]);
  // The array which contains the countries objects
  const [countries, setCountries] = React.useState([]);
  // The time when we are waiting the loading data
  const [isLoading, setIsLoading] = React.useState(true);

  const stationsPerPage = 9;
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastPost = currentPage*stationsPerPage;
  const indexOfFirstPots = indexOfLastPost- stationsPerPage;
  const currentStations = stations.slice(indexOfFirstPots,indexOfLastPost);  

  const api = React.useMemo(() => {return new RadioBrowserApi('My Radio App')}, []);
  api.setBaseUrl('https://at1.api.radio-browser.info')

  React.useEffect(() => {
    // Get data from radio api
    const getData = async () => {
      await api.searchStations({limit: 100})
      .then((data) => {
        let myCountryArr=[];
        let myStations = [];
      
        for(let i=0; i<data.length; i++){
          
          const stringPattern = /[a-zA-Z]/;
          if(stringPattern.test(data[i].name)) {
            myStations.push(data[i])
          }

          let tempCountryName=data[i].country;
          let tempCountryCode=data[i].countryCode;   
      
          // Save the countries and their code from the aPI 
          if((tempCountryName !== "") && (tempCountryCode !== "")){
            if(!(myCountryArr.some(country => country.code === tempCountryCode))){          
              myCountryArr.push({code: tempCountryCode, country:tempCountryName});
            }           
          }
        };

      myCountryArr.sort((a, b) => (a.country > b.country) ? 1 : (b.country > a.country) ? -1 : 0);
      setCountries([{code: "", country:"All"}, ...myCountryArr]);
      setStations(myStations);
      setIsLoading(false); 
    })      
  };
      getData();
      document.title="RadioApp"
    }, 
    [api]
  );

  return (
    <div className="App placement">
      <div className='radio-content'>
        <Navbar/>
        {isLoading ? 
        <div className='lmask'></div>
        :
          <Home 
            countries={countries}
            stations={currentStations}
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            stationsPerPage={stationsPerPage}
            total={stations.length}
            api={api}
            setStations={setStations}
          />
        }
      </div>
    </div>
  );
}

export default App;
