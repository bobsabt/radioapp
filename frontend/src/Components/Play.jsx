import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import "../Style/Play.css"
const Play = ({ actualRadio, togglePlayerbtn, handleClose, isshowPlay, isBtnPlay }) => {
  
  return(
       <div className={isshowPlay ? "play-container play-box" : "play-container no-play-box"}>
            {isshowPlay && 
                <>
                    <p>{actualRadio}</p>          
                    <button onClick={togglePlayerbtn}>
                        {isBtnPlay ? 
                            <FontAwesomeIcon className='toggle-btn' icon={faPauseCircle} />
                        : 
                            <FontAwesomeIcon className='toggle-btn' icon={faPlayCircle} />
                        }
                    </button> 
                    <div className='css_animation'>
                        {isBtnPlay && <div className='wrapper'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>}
                    </div>
                    <button><FontAwesomeIcon className='close-icon-btn' icon={faTimesCircle} onClick={handleClose}/></button>
                </>
            }
      </div>
  );
};

export default Play;