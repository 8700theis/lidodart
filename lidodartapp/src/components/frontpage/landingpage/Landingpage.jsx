import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';

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
            {landingpage.map((data, index) => {
                const {fp_showImage, fp_bgImage, fp_bgVideo, fp_heading, fp_text, fp_ctas} = data;

                return (
                    <section key={index} className="landingpageContainer">
                        <div className="landingpageBgContainer">
                            {fp_showImage ? showImage(fp_bgImage) : showImage(fp_bgVideo)}
                        </div>
                        <article className="landingpageTextContainer">
                            <div className="landingpageTextWrapper">
                                <h1 className="landingpageHeading">{fp_heading}</h1>
                                <div className="landingpageText" dangerouslySetInnerHTML={{__html: fp_text}}></div>
                                <div className="landingpageCtaContainer">
                                    {fp_ctas.map((cta, index) => {
                                        const {fp_ctas_text, fp_ctas_link} = cta;
                                        return (
                                            <Link key={index} to={`/${fp_ctas_link}`} className="landingpageCta">{fp_ctas_text}</Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                    </section>
                )
            })}
        </section>
    )
}
