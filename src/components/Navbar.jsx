import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaRocket } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed w-full z-50 ${isScrolled ? 'hidden' : ''}`}>
            <div>
                <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <span>
                            <FaRocket size={32} />
                        </span>
                        <h1 className='text-xl font-semibold'>Space X</h1>
                    </div>
                    <nav className={`md:flex flex:row items-center text-lg font-medium gap-8 ${isMenuOpen ? 'block' : 'hidden'}`} style={{ transition: 'all 0.3s ease' }}>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                            FALCON 9
                        </Link>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                            FALCON HEAVY
                        </Link>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                            DRAGON
                        </Link>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                            STARSHIP
                        </Link>
                        <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                            HUMAN SPACEFLIGHT
                        </Link>
                        
                    </nav>
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} style={{ transition: 'all 0.3s ease' }}>
                        <div className='fixed top-30 right-0 h-1/2 w-1/4 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                            <nav className='flex flex-col items-center justify-center h-full space-y-4 p-4 transition-all duration-300 ease-in-out transform translate-x-full md:translate-x-0'>
                                <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                                    FALCON 9
                                </Link>
                                <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                                    FALCON HEAVY
                                </Link>
                                <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                                    DRAGON
                                </Link>
                                <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                                    STARSHIP
                                </Link>
                                <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all cursor-pointer'>
                                    HUMAN SPACEFLIGHT
                                </Link>
                                
                            </nav>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
