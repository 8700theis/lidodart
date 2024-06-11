import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sponsorLine.css';

export default function SponsorLine({ sponsorLineData }) {
    const [sponsorline, setSponsorline] = useState([sponsorLineData]);

    const showImage = (src) => {
        return (
            <img src={src} alt="Logo" className="sponsorlineLogo" />
        )
    }

    return (
        <section id='sponsorline'>
            {sponsorline.map((data, index) => {
                const {sponsor_heading, sponsor_images} = data;

                return (
                    <section key={index} className="sponsorlineContainer">
                        <h2 className="sponsorlineHeading">{sponsor_heading}</h2>
                        <div className="sponsorlineContentContainer">
                            {sponsor_images.map((sponsor, index) => {
                                const {sponsor_images_image, sponsor_images_link} = sponsor;

                                return (
                                    <a key={index} href={sponsor_images_link} target='_blank'>{showImage(sponsor_images_image)}</a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </section>
    )
}
