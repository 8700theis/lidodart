import React, { useState } from 'react';
import './membershipSelection.css';

export default function MembershipSelection({ membershipData }) {
    const [memberdata, setMemberdata] = useState(membershipData);

    return (
        <section id='memberselect'>
            <section className="memberselectContainer">
                <section className="memberselectContent">
                    <h1 className="memberselectTitle">Lido Dartklub glæder sig til at byde dig velkommen</h1>
                    <p className="memberselectText">Ung eller gammel, tyk eller tynd, kvinde eller mand? Alle kan blive medlem af Bakkelandets Dartklub uanset kendskab og erfaring.</p>
                    <p className="memberselectText">Indmelding sker her på her på siden eller ved at udfylde indmeldingsblanketten og aflevere den i kiosken/baren i klubbens åbningstid.</p>
                </section>
                <section className="memberselectImage">
                    <img src={memberdata.image} alt="Logo" className="memberselectLogo" />
                </section>
            </section>
        </section>
    )
}
