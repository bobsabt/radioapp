import React from 'react';
import Station from './Station';
import Pagination from './Pagination';
import Play from './Play';
import radio from "../Logo/radio.png";


const StationsPanel = ({ stations, currentPage, setCurrentPage, total, stationsPerPage, name, updateName }) => {

    const [isshowPlay, setIsshowPlay] = React.useState(false);
    const [isBtnPlay, setIsBtnPlay] = React.useState(false);
    const [actualRadio, setActualRadio] = React.useState();
    const [currentSong, setCurrentSong] = React.useState(null);

    const audio = React.useRef(currentSong);

    const setDefaultSrc = event => {
        event.target.src = radio;
    };

    const togglePlay = (url, currentRadio, currentIcon) => {
        const song = url;
        setActualRadio(currentRadio);

        if (currentSong === song) {
            audio.current.play();
        
        } else {
            if (audio.current) {
                audio.current.pause();
            }
        }
        audio.current = new Audio(song);
        audio.current.play();
        setIsshowPlay(true)
        setIsBtnPlay(true)
    };

    const togglePlayerbtn = () => {
        if(isBtnPlay){
            audio.current.pause()
            setIsBtnPlay(false)  
        }
        else{
            audio.current.play()
            setIsBtnPlay(true)   
        }   
    };

    const handleClose = () => {
        audio.current.pause()
        setIsshowPlay(false)
    };

    return (
        <div className='stationpanel'>
            <Play
                isshowPlay={isshowPlay}
                isBtnPlay={isBtnPlay}
                actualRadio={actualRadio}
                togglePlayerbtn={togglePlayerbtn}
                handleClose={handleClose}
            />
            <div className=" station-search">

            
            
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
                        togglePlay={togglePlay}       
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
