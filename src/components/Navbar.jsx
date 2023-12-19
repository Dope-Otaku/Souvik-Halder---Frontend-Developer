import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaRocket } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1018 && window.innerHeight <= 1148);
        };

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        handleResize(); // Check initial window size

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full z-50 ${isScrolled ? 'hidden' : ''}`} style={{ top: 0 }}>
            <div>
                <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <span>
                            <FaRocket size={32} />
                        </span>
                        <h1 className='text-xl font-semibold'>Space X</h1>
                    </div>
                    {isMobile ? (
                        <>
                            <div>
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                    {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                                </button>
                            </div>
                            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} style={{ transition: 'all 0.3s ease' }}>
                                <div className='fixed top-30 right-0 h-1/2 w-1/4 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                                    <nav className='flex flex-col items-center justify-center h-full space-y-4 p-4 transition-all duration-300 ease-in-out transform translate-x-full md:translate-x-0'>
                                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                            <span className="hover:underline">FALCON 9</span>
                                            <div className="line-animation"></div>
                                        </Link>
                                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                            <span className="hover:underline">FALCON HEAVY</span>
                                            <div className="line-animation"></div>
                                        </Link>
                                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                            <span className="hover:underline">DRAGON</span>
                                            <div className="line-animation"></div>
                                        </Link>
                                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                            <span className="hover:underline">STARSHIP</span>
                                            <div className="line-animation"></div>
                                        </Link>
                                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                            <span className="hover:underline">HUMAN SPACEFLIGHT</span>
                                            <div className="line-animation"></div>
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </>
                    ) : (
                        <nav className={`md:flex flex:row items-center text-lg font-medium gap-8 ${isMenuOpen ? 'block' : 'hidden'}`} style={{ transition: 'all 0.3s ease' }}>
                            <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                <span className="hover:no-underline relative">FALCON 9</span>
                                <div className="line-animation"></div>
                            </Link>
                            <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                <span className="hover:no-underline relative">FALCON HEAVY</span>
                                <div className="line-animation"></div>
                            </Link>
                            <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                <span className="hover:no-underline relative">DRAGON</span>
                                <div className="line-animation"></div>
                            </Link>
                            <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                <span className="hover:no-underline relative">STARSHIP</span>
                                <div className="line-animation"></div>
                            </Link>
                            <Link to='home' spy={true} smooth={true} duration={500} className='hover:transition-all cursor-pointer'>
                                <span className="hover:no-underline relative">HUMAN SPACEFLIGHT</span>
                                <div className="line-animation"></div>
                            </Link>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
