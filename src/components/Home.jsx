import React from 'react';
import Button from '../layouts/Button';

const Home = () => {
    return (
        <div className="min-h-screen h-full flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/op.jpg')] bg-cover bg-no-repeat" style={{ marginTop: '20px' }}>
            <div className='w-full lg:w-2/3 space-y-5'>
                <h1 className='text-backgroundColor font-semibold text-5xl lg:text-7xl text-center lg:text-left'> SpaceX: Inspiring Tomorrow's Discoveries. </h1>
                <p className='text-backgroundColor text-sm text-center lg:text-left'>
                    Embark on a cosmic odyssey with SpaceX, leading the way in space exploration.<br/> Discover the wonders of tomorrow's possibilities as we push the boundaries of<br/> innovation. Search here for more on our extraordinary ventures and groundbreaking discoveries.
                </p>
            </div>
            <div className='lg:pl-44' style={{ marginLeft: '20px' }}>
                <Button/>
            </div>
            <div className="flex justify-center mt-3">
                <div className="animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Home