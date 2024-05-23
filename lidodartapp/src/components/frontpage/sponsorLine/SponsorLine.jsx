import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sponsorLine.css';
import PerformLogo from './assets/sponsorLogo1_black.png';

export default function SponsorLine({ sponsorLineData }) {
    const [sponsorline, setSponsorline] = useState([sponsorLineData]);

    const showImage = (src) => {
        return (
            <img src={src} alt="Logo" className="sponsorlineLogo" />
        )
    }

    return (
        <section id='sponsorline'>
            <section className="sponsorlineContainer">
                <h2 className="sponsorlineHeading">Lido Dartklub sponsor</h2>
                <div className="sponsorlineContentContainer">
                    <a href="https://perform.dk/dk/">{showImage(PerformLogo)}</a>
                </div>
            </section>
        </section>
    )
}
