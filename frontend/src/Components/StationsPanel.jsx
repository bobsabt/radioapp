import React from 'react';
import Station from './Station';
import Pagination from './Pagination';
import radio from "../Logo/radio.png";


const StationsPanel = ({ stations, currentPage, setCurrentPage, total, stationsPerPage, name, updateName }) => {

    const setDefaultSrc = event => {
        event.target.src = radio;
    };

    return (
        <div className='stationpanel'>

            <div className="station-search">
                <label htmlFor="name">Station name</label>
                <input id="name" type="text" placeholder='Search station...' value={name} onChange={e => updateName(e.target.value)}/>
            </div>
            <div className='placement stations-container'>
                {stations.map((station)=>
                    <Station key={station.id}
                        audiosrc={station.urlResolved}
                        stationId={station.id}
                        icon={station.favicon !== "" ? station.favicon: radio}
                        name={station.name.length > 20 ? 
                            station.name.substring(0,20) + "..." : station.name} 
                        setDefaultSrc={setDefaultSrc}     
                    />
                )}
            </div>
        <Pagination 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            stationsPerPage={stationsPerPage} 
            total={total} 
                
        />
        
</div>
  );
};

export default StationsPanel;
