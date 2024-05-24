import React, { useState } from 'react';
import Landingpage from '../components/frontpage/landingpage/Landingpage';
import SponsorLine from '../components/frontpage/sponsorLine/SponsorLine';
import LandingAbout from '../components/frontpage/about/About';

export default function Home({ frontpageData }) {
    const [frontpage, setFrontpage] = useState(frontpageData);

    return (
        <>
            <Landingpage landingpageData={frontpage} />
            <SponsorLine sponsorLineData={frontpage} />
            <LandingAbout aboutData={frontpage} />
        </>
    )
}