import React, { useEffect } from 'react'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import './Home.css'
import videobg from '../../asset/video/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  //  create react hook to add a scroll animation......
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])






  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={videobg} muted autoPlay loop type="video1/"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up"
            className='smallText'>
            Our Packages
          </span>

          <h1 data-aos="fade-up"
            className="homeTitle">
            Once a year go someplace <br/> you've never been before.
          </h1>

        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">
              Search your destination
            </label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">
              Select your date
            </label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label-total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max={5000} min={1000} />
            </div>

          </div>

          <div className="searchOptions flex">
            <HiFilter className='' />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTripadvisor className='icon' />
          </div>

          <div className="leftIcons">
            <BsListTask className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home