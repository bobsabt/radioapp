import React from 'react';

const Country = ({code, countryname}) => {
  return(
      <>
        <option value={code}>{countryname}</option>
      </>
  );
};

export default Country;