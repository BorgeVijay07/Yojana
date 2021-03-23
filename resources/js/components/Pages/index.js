import React, {useState} from 'react'
import ContactUs from '../ContactUs';
import Hero from '../Hero';
import About from '../InfoSection';
import Navbar from '../Navbar'
import Services from '../Services';
import Sidebar from '../Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <About />
            <Services />
            <ContactUs />
        </>
    )
}

export default Home
