    import React, { useEffect, useState } from 'react';
    import { MdOutlineClose } from "react-icons/md";
    import { FaSearch } from "react-icons/fa";

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
            <div className='search-top w-full bg-gray-100 py-4'>
                <div className='search flex justify-center items-center'>
                    <input type="text" placeholder="Search Here...." onChange={e => setSearchValue(e.target.value)} className="w-full px-6 py-4 text-xl bg-white rounded-full focus:outline-none pl-12" style={{ backgroundImage: `url(${FaSearch})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '20px' }} />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-5.5-5.5" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 10l5.5 5.5" />
                    </svg>
                </div>
                <div className='filters flex justify-center items-center mt-4'>
                    <input type="text" placeholder="Type" onChange={e => setFilterType(e.target.value)} className="w-full px-6 py-4 text-xl focus:outline-none hover:border-b-2 hover:border-blue-500" />
                    <input type="text" placeholder="Country" onChange={e => setFilterCountry(e.target.value)} className="w-full px-6 py-4 text-xl focus:outline-none hover:border-b-2 hover:border-blue-500" />
                    <select onChange={e => setFilterActive(e.target.value)} className="w-full px-6 py-4 text-xl focus:outline-none hover:border-b-2 hover:border-blue-500">
                        <option value="">Active</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                {searchValue && (
                    <div className="search-result w-full bg-white">
                        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data.map((d, i) => (
                                <div key={i} className="card bg-gray-100 p-4 rounded-lg shadow-md hover:cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleCardClick(i)}>
                                    <h3 className="text-xl font-bold mb-2">{d.rocket_name}</h3>
                                    {/* <p className="mb-2">Active: {d.active ? 'Yes' : 'No'}</p> */}
                                    {/* <p className="card-info opacity-0 transition-opacity duration-300">{d.description.length > 50 ? d.description.substring(0, 50) + '...' : d.description}</p> */}
                                    <img src={d.flickr_images[0]} alt="rocket" className="w-full object-cover mb-2" />
                                    <button className="read-more-button" onClick={() => handleCardClick(i)}>
                                        
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {selectedCard && (
                    <div className="image-modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                        <div className="modal-content bg-white p-8 rounded-md relative overflow-y-auto max-h-full flex">
                            <div className="image-container">
                                <img src={selectedCard.flickr_images[0]} alt="modal card" className="w-full object-cover mb-2" />
                            </div>
                            <div className="info-container ml-8">
                                <h3 className="text-2xl font-bold mb-2">{selectedCard.rocket_name}</h3>
                                <p className="mb-2">Active: {selectedCard.active ? 'Yes' : 'No'}</p>
                                <p>{selectedCard.description}</p>
                                <p className="mt-4">"Amazing fact about {selectedCard.rocket_name} info"</p>
                            </div>
                            <button className="close-button absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={handleCloseClick}>
                                <MdOutlineClose />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    export default Search;
