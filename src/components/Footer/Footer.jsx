import React, { useEffect } from 'react';
import './Footer.css';
import video1 from '../../asset/video/video0.mp4';
import { FiSend } from "react-icons/fi";
import { FaHotel } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";


import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  //  create react hook to add a scroll animation......
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted typeof='video0/mp4'></video>
      </div>

      <div data-aos="fade-up" className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Book with us</h2>
          </div>

          <div className="InputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND<FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <FaHotel className='icon' /> Hotel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In voluptate
              iusto nisi quae cum. Iure a aut incidunt quam quidem, vero, numquam
              dicta soluta porro voluptas consectetur cum. Perferendis, adipisci.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className='icon' />
              <FaYoutube className='icon' />
              <FaInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">

            {/* Group-one */}
            <div data-aos="fade-up" data-aos-duration="3000"
              className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Payment
              </li>
            </div>

            {/* Group-two */}
            <div data-aos="fade-up" data-aos-duration="4000"
              className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                TripAdvisor
              </li>
            </div>

            {/* Group-three */}
            <div data-aos="fade-up" data-aos-duration="5000"
              className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                London
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                California
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Indoesia
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronLeft className='icon' />
                Nigeria
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
            <small>BEST HOTEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED . INTIMACYTECH 2024</small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer