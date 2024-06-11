import React, { useState } from 'react';
import './about.css';
import image from './assets/landingaboutimage.jpg';
export default function About({ aboutData}) {
    const [about, setAbout] = useState([aboutData]);

    const showImage = (url) => {
        return <img src={url} alt="Billede" />
    }

    const showVideo = (url) => {
        return <video src={url} autoPlay playsInline muted loop ></video>
    }

    return (
        <section id='landingAbout'>
            {about.map((data, index) => {
                const {about_showImage, about_video, about_heading, about_subheading, about_text, about_image} = data;

                return (
                    <section key={index} className="landingAboutContainer">
                        <article className="landingAboutTextContainer">
                            <h3 className="landingAboutOverHeading">{about_subheading}</h3>
                            <h2 className="landingAboutHeading">{about_heading}</h2>
                            <div className="landingAboutText" dangerouslySetInnerHTML={{__html: about_text}}></div>
                        </article>
                        <section className="landingAboutMediaContainer">
                            { about_showImage ? showImage(about_image) : showImage(about_video)}
                        </section>
                    </section>
                )
            })}
        </section>
    )
}
