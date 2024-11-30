import React from 'react'
import './Packages.css';
import { TbTrekking } from "react-icons/tb";
import { FaMapMarked } from "react-icons/fa";
import { PiTrolleySuitcaseFill } from "react-icons/pi";
import { GiIsland } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";
import { FaPlaneUp } from "react-icons/fa6";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'aos/dist/aos.css';

const Packages = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='main section container'>

            <div className='packageTitle'>
                <h3 className='title'>Our services</h3>
            </div>
            
            <Carousel responsive={responsive}>
                <div className='card'>
                    <TbTrekking className='icon'/>
                    <h2>Trekking</h2>
                    <p className="descTitlet">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.</p>

                    <a href="#" className='anchor'> Learn More</a>
                </div>

                <div className='card'>
                <FaMapMarked className='icon'/>
                    <h2>Trekking</h2>
                    <p className="descTitlet">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.</p>

                    <a href="#" className='anchor'> Learn More</a>
                </div>

                <div className='card'>
                < PiTrolleySuitcaseFill className='icon'/>
                    <h2>Trekking</h2>
                    <p className="descTitlet">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.</p>

                    <a href="#" className='anchor'> Learn More</a>
                </div>

                <div className='card'>
                <GiIsland className='icon'/>
                    <h2>Trekking</h2>
                    <p className="descTitlet">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.</p>

                    <a href="#" className='anchor'> Learn More</a>
                </div>

                <div className='card'>
                <TbWorldSearch className='icon'/>
                    <h2>Trekking</h2>
                    <p className="descTitlet">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.</p>

                    <a href="#" className='anchor'> Learn More</a>
                </div>

                <div className='card'>
                <FaPlaneUp className='icon'/>
                    <h2>Trekking</h2>
                    <p className="descTitlet">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.</p>

                    <a href="#" className='anchor'> Learn More</a>
                </div>

            </Carousel>
        </section>
    )
}

export default Packages