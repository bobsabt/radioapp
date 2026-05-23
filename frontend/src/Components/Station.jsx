import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "../Style/Station.css";

const Station = ({ icon, name, setDefaultSrc, audiosrc, togglePlay }) => {
  
    return (
        <div className='station-card'>
            <img src={icon} className="station-logo" alt="logo" onError={setDefaultSrc}/>
            <div className="station-info">
                <p className="station-name">{name}</p>
            </div>
            <button  onClick={()=>togglePlay(audiosrc, name, icon)}>
                <FontAwesomeIcon className='play-btn' icon={faPlayCircle} />
            </button>
        </div>
        );
};

export default Station;