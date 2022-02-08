import Genre from './Genre';

const FilterPanel = ({genre}) => {

    const genres = ["all","disco", "metal", "pop", "country", "classical", "hits", "80", "latin"];
    
    return (
        <div className='filter-container'>
            <div className='filter-search'>  
                <div className="genre-container">
                    <p className='filter-title'>Genres</p>
                    <div className="genrebtn-container">
                        {genres.map((filteredgenre, index) => 
                            <Genre 
                                key={index} 
                                genre={genre}
                                filteredgenre={filteredgenre} 
                            />   
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;