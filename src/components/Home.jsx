import React from 'react';
import Button from '../layouts/Button';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/bg.jpg')] bg-cover bg-no-repeat">
            <div className='w-full lg:w-2/3 space-y-5'>
                <h1 className='text-backgroundColor font-semibold text-6xl lg:text-8xl text-center lg:text-left'> SpaceX: Inspiring Tomorrow's Discoveries. </h1>
                <p className='text-backgroundColor text-center lg:text-left'>
                    Embark on a cosmic odyssey with SpaceX, leading the way in space exploration.<br/> Discover the wonders of tomorrow's possibilities as we push the boundaries of<br/> innovation. Search here for more on our extraordinary ventures and groundbreaking discoveries.
                </p>
            </div>
            <div className='lg:pl-44' style={{ marginLeft: '20px' }}>
                <Button/>
            </div>
        </div>
    )
}

export default Home