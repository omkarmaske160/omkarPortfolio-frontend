import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './SideBar';


const MainComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {windowWidth <= 768 ? ( // Show Sidebar on screens less than or equal to 768px (mobile)
                <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
            ) : ( // Show Navbar on screens greater than 768px (desktop and tablet)
                <Navbar isOpen={isOpen} toggle={toggleSidebar} />
            )}
        </>
    );
};

export default MainComponent;
