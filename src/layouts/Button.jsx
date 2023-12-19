import React from 'react';

const Button = () => {
    const handleClick = () => {
        const searchBar = document.getElementById('search');
        searchBar.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <button
            className="bg-transparent text-white font-bold py-2 px-4 rounded border border-white hover:border-transparent transition-all duration-300 relative focus:outline-none"
            style={{
                backgroundImage: "url('space-background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer',
            }}
            onClick={handleClick}
        >
            Explore
            <span
                className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-300 ease-in-out"
            />
        </button>
    );
};

export default Button;
