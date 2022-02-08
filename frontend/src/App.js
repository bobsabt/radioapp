import React from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import Navbar from './Components/Navbar';
import './index.css';

function App() {
  
  const api = new RadioBrowserApi('My Radio App');

  // Get data from radio api
  const setupApi = async () => {
    const datas = await api.searchStations({limit: 30})
    .then((data) => {
      console.log(data)
    
    })      
  };

  React.useEffect(() => {
      setupApi()
    }, 
    []
  );

  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
