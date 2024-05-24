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
            <section className="landingAboutContainer">
                <article className="landingAboutTextContainer">
                    <h3 className="landingAboutOverHeading">Unikt Fællesskab</h3>
                    <h2 className="landingAboutHeading">Velkommen til Lido Dartklub</h2>
                    <p className="landingAboutText">Alle er velkomne i Lido Dartklub, om du er ung, gammel, tyk, tynd, mand eller kvinde, det er helt underordnet, og vi tilbyder alle nye medlemmer den første måneds kontingent gratis, så der er ingen undskyldning for ikke at kigge ind til den hyggelige Lido familie, om ikke andet så bare for at se, om dart kan fange din interesse, som det har fanget vores.</p>
                    <p className="landingAboutText">Der er klubaften mandag og torsdag, hvor klubben er åben fra 19.00 til ca. 22.30, og derudover har vi en masse hyggelige arrangementer og spændende turneringskampe i løbet af ugen og weekenden.</p>
                    <p className="landingAboutText">Kom ind og mød vores fantastiske medlemmer, mød de dedikerede elitespillere, dem der mest spiller for hyggen, vores vidunderlige Paradart medlemmer og alle de andre der gør Lido Dartklub til noget helt specielt.</p>
                </article>
                <section className="landingAboutMediaContainer">
                    {showImage(image)}
                </section>
            </section>
        </section>
    )
}
