import Genre from './Genre';
import Country from './Country';

const FilterPanel = ({genre, updateGenre, countries, updateCountryCode}) => {

    const genres = ["all","disco", "metal", "pop", "country", "classical", "hits", "80", "latin"];
    
    return (
        <div className='filter-container'>
            <div className='filter-search'> 
                <div className='filter-counry'>
                    <p className='filter-title'>Country</p> 
                        <select onChange={(e)=>updateCountryCode((e.target.value))}>
                            {countries.map((country,index) => 
                                <Country 
                                    key={index}
                                    code={country.code}
                                    countryname={
                                        country.country.length > 40 ?  
                                           country.country.substring(0,40)+"..." 
                                        : 
                                            country.country
                                    }
                                />
                            )}
                        </select>
                </div> 
                <div className="genre-container">
                    <p className='filter-title'>Genres</p>
                    <div className="genrebtn-container">
                        {genres.map((filteredgenre, index) => 
                            <Genre 
                                key={index} 
                                genre={genre}
                                filteredgenre={filteredgenre} 
                                updateGenre={updateGenre}
                            />   
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;