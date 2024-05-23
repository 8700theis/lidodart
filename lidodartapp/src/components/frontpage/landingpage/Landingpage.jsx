import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import landingimage from  './assets/lidodartLanding.jpg';

export default function Landingpage({ landingpageData }) {
    const [landingpage, setLandingpage] = useState([landingpageData]);
    
    const showImage = (src) => {
        return (
            <img src={src} alt="Baggrund" className="landingpageBgMedia" />
        )
    }
    const showVideo = (src) => {
        return (
            <video className="landingpageBgMedia" playsInline loop muted autoPlay>
                <source src={src} />
            </video>
        )
    }

    return (
        <section id='landingpage'>
            <section className="landingpageContainer">
                <div className="landingpageBgContainer">
                    {showImage(landingimage)}
                </div>
                <article className="landingpageTextContainer">
                    <div className="landingpageTextWrapper">
                        <h1 className="landingpageHeading">Velkommen til Lido</h1>
                        <p className="landingpageText">Klik ind for at se medlemspriserne eller tjek Lidos kommende arrangementer.</p>
                        <div className="landingpageCtaContainer">
                            <Link to='/medlemspriser' className="landingpageCta">Medlemspriser</Link>
                            <Link to='/kommende-arrangementer' className="landingpageCta">Kommende arrangementer</Link>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    )
}
