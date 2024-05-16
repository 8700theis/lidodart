import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';

export default function Landingpage({ landingpageData }) {
    const [landingpage, setLandingpage] = useState([landingpageData]);

    return (
        <section id='landingpage'>
            Home
        </section>
    )
}
