import React, { useEffect, useState } from 'react';

const Search = () => {
    const [data, setData] = useState([]);
    const [filterData, setfilterData] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/rockets")
            .then(res => res.json())
            .then(data => {
                console.log(data.map(({ rocket_name }) => rocket_name)); // Display rocket_name in console
                const filteredData = data.map(({ active, rocket_name, description }) => ({ rocket_name, active, description }));
                setfilterData(filteredData);
                setData(filteredData); // Update the data state
            })
            .catch(err => console.log(err));
    }, []);

    const handleFilter = (value) => {
        const res = filterData.filter(f => f.rocket_name.toLowerCase().includes(value))
        setData(res);
        if(value === ""){
            setData([]);
        }
    }

    return (
        <div className='search-top w-30'>
            <div className='search w-100 m-10'>
                <input type="text" placeholder="Search Here...." onChange={e => handleFilter(e.target.value)} className="w-full px-6 py-4 text-xl" />
            </div>
            <div className='search-result w-100   bg-white'>
                {data.map((d, i)=> (
                    <div key={i}>
                        <h3>{d.rocket_name}</h3>
                        <p>Active: {d.active ? 'Yes' : 'No'}</p>
                        <p>{d.description}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
