import React, { useState } from 'react';
import Landingpage from '../components/frontpage/Landingpage';

export default function Home({ frontpageData }) {
    const [frontpage, setFrontpage] = useState(frontpageData);

    return (
        <>
            <Landingpage landingpageData={frontpage} />
        </>
    )
}