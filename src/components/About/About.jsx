import React from 'react';
import "./About.css";
import aboutvid from '../../asset/video/istockphoto-1359115273-640_adpp_is.mp4'

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">

                <div className="about">
                    <h3 style={{ paddingLeft: 260 }}>ABOUT US</h3>

                    <p style={{ paddingLeft: 260 }}>"<span>Medicure</span>". It is the online deals site of medications
                        supported by a US pharmacy, situated at the edge of
                        control park and downtown in the 6th district of the
                        United States.

                        "<span>Medicure</span>" pharmacy is open Monday to Firday from 8.30 to 20th and Saturday from 9hrs to 20hrs.

                        "<span>Medicure</span>", the pionner in pharmacy and US pharmacy offers a world wide determination of pharmacy
                        items, natural drugs, fragrant healing, and medications(homeopathy, veterinary items, medicationsand
                        over the counter perscription) at the best costs.
                    </p>

                    <a href="#" className="about-btn">Read More</a>
                    <div className="about-form">
                    <video src={aboutvid} muted autoPlay loop type="video1/" className='videoimg'></video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About