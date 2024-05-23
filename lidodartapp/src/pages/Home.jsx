import React, { useState } from 'react';
import Landingpage from '../components/frontpage/landingpage/Landingpage';
import SponsorLine from '../components/frontpage/sponsorLine/SponsorLine';

export default function Home({ frontpageData }) {
    const [frontpage, setFrontpage] = useState(frontpageData);

    return (
        <>
            <Landingpage landingpageData={frontpage} />
            <SponsorLine sponsorLineData={frontpage} />
        </>
    )
}