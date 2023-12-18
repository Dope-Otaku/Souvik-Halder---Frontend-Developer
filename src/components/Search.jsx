    import React, { useEffect, useState } from 'react';

    const Search = () => {
        const [data, setData] = useState([]);
        const [filterData, setFilterData] = useState([]);
        const [searchValue, setSearchValue] = useState('');
        const [filterType, setFilterType] = useState('');
        const [filterCountry, setFilterCountry] = useState('');
        const [filterActive, setFilterActive] = useState('');
        const [selectedCard, setSelectedCard] = useState(null);

        useEffect(() => {
            fetch("https://api.spacexdata.com/v3/rockets")
                .then(res => res.json())
                .then(data => {
                    const filteredData = data.map(({ rocket_name, active, description, flickr_images, country, type, wikipedia }) => ({ rocket_name, active, description, flickr_images, country, type, wikipedia }));
                    setFilterData(filteredData);
                    setData(filteredData);
                })
                .catch(err => console.log(err));
        }, []);

        useEffect(() => {
            const filteredData = filterData.filter(f =>
                f.rocket_name.toLowerCase().includes(searchValue.toLowerCase()) &&
                (filterType === '' || f.type.toLowerCase().includes(filterType.toLowerCase())) &&
                (filterCountry === '' || f.country.toLowerCase().includes(filterCountry.toLowerCase())) &&
                (filterActive === '' || (filterActive === 'true' && f.active) || (filterActive === 'false' && !f.active))
            );
            setData(filteredData);
        }, [searchValue, filterType, filterCountry, filterActive, filterData]);

        const handleCardClick = (index) => {
            setSelectedCard(data[index]);
        };

        const handleCloseClick = () => {
            setSelectedCard(null);
        };

        return (
            <div className='search-top w-full'>
                <div className='search w-100 m-10'>
                    <input type="text" placeholder="Search Here...." onChange={e => setSearchValue(e.target.value)} className="w-full px-6 py-4 text-xl" />
                </div>
                <div className='filters w-100 m-10'>
                    <input type="text" placeholder="Type" onChange={e => setFilterType(e.target.value)} className="w-full px-6 py-4 text-xl" />
                    <input type="text" placeholder="Country" onChange={e => setFilterCountry(e.target.value)} className="w-full px-6 py-4 text-xl" />
                    <select onChange={e => setFilterActive(e.target.value)} className="w-full px-6 py-4 text-xl">
                        <option value="">Active</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                {searchValue && (
                    <div className="search-result w-full bg-white">
                        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.map((d, i) => (
                                <div key={i} className="card bg-gray-100 p-4 rounded-lg shadow-md hover:cursor-pointer hover:scale-105" onClick={() => handleCardClick(i)}>
                                    <h3 className="text-xl font-bold mb-2">{d.rocket_name}</h3>
                                    <p className="mb-2">Active: {d.active ? 'Yes' : 'No'}</p>
                                    <p>{d.description}</p>
                                    <img src={d.flickr_images[0]} alt="rocket" className="w-full object-cover mb-2" />
                                    <button className="read-more-button" onClick={() => handleCardClick(i)}>
                                        Read More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {selectedCard && (
                    <div className="image-modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                        <div className="modal-content bg-white p-8 rounded-md relative overflow-y-auto max-h-full">
                            <button className="close-button absolute top-2 right-2 hover:cursor-pointer" onClick={handleCloseClick}>
                                Close
                            </button>
                            <img src={selectedCard.flickr_images[0]} alt="modal card" className="w-1/2  object-cover mb-2" />
                            <h3 className="text-xl font-bold mb-2">{selectedCard.rocket_name}</h3>
                            <p className="mb-2">Active: {selectedCard.active ? 'Yes' : 'No'}</p>
                            <p>{selectedCard.description}</p>
                            <a href={selectedCard.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia</a>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    export default Search;