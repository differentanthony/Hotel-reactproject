import React, { useEffect } from 'react';
import './Main.css';

// ICONS----------------====
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

// images=-=-=-=-=-=-=-=-=-=--=
import img from '../../asset/image/HOTEL-PIC.avif';
import img2 from '../../asset/image/HOTEL-PIC2.avif';
import img3 from '../../asset/image/HOTEL-PIC3.avif';
import img4 from '../../asset/image/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg';
import img5 from '../../asset/image/HOTEL-PIC5.webp';
import img6 from '../../asset/image/HOTEL-PIC6.webp';


import Aos from 'aos'
import 'aos/dist/aos.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Array data =======================

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Intimacy Hotel',
    location: 'Luxembourg',
    grade: 'CULTURAL RELAX',
    fees: '$2000',
    description: 'The epitome of romance, Intimacy Hotel is one of the best Hotel destination in the world. This place is known for its luxurious stays and fun activities. '
  },


  {
    id: 2,
    imgSrc: img2,
    destTitle: 'BTM Hotel',
    location: 'China',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: 'BTM Hotel is a quality hotel in China, rising over Conrad Shanghai the so-called top 1 hotel in China. This place is popular among business men as the owner is also spectacular business personality.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Original Hotel',
    location: 'Switzerland',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'One of the most remarkabel Switzerland natural hotel is the Original Hotel. The hallmark of this place is "Lavish" and "beauty". Always interesting to be in this place.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'STEPH Hotel',
    location: ' Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$1500',
    description: ' According to the world Hotel Ranking, 45 milion people visit Turkey each year, and from that about 2 milion come to visit SETPH. this place is known for its luxurious stays and adventurous activities.'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Daxc Hotel',
    location: ' Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'A Hotel in central Mexico, Daxc is known for its history of well maintained facilities. It is a place for fun activities and it is also known for its beatiful weather climate.'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Ogali Hotel',
    location: ' Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the lobbies are its benechmark and explain the beaty of this place. Also, if you are foodie and love seafood, you will be exhilarated with the choice you are about to get here.'
  },
]

const Main = () => {
  //  create react hook to add a scroll animation......
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };



  return (
    <section className="main container Section">

      <div data-aos="fade-right" className="secTitle">
        <h3 className="title">
          Featured Popular Hotels
        </h3>
      </div>

      <Slider {...settings} className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-left" key={id} className="singleDestination">
                {/* Here it will return single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="desTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small> </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <LuClipboardCheck className='icon' />
                  </button>
                </div>
              </div>

            )
          })
        }
      </Slider>

    </section>
  )
}

export default Main