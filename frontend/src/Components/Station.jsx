import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Station = ({ icon, name, setDefaultSrc, audiosrc, togglePlay }) => {
  
    return (
        <div className='placement station-box'>
            <img src={icon} alt="logo" onError={setDefaultSrc}/>
            <div>
            <p>{name}</p>
            <button onClick={()=>togglePlay(audiosrc, name, icon)}>
                <FontAwesomeIcon className='play-btn' icon={faPlayCircle} />
            </button>
            
            </div>
        </div>
        );
};

export default Station;