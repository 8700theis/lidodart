import React, { useState } from 'react';
import './membershipSelection.css';

export default function MembershipSelection({ membershipData }) {
    const [memberdata, setMemberdata] = useState([membershipData]);

    return (
        <section id='memberselect'>
            {memberdata.map((data, index) => {
                const {member_ap_heading, member_ap_text} = data;

                return (
                    <section key={index} className="memberselectContainer">
                        <section className="memberselectContent">
                            <h1 className="memberselectTitle">{member_ap_heading}</h1>
                            <div className="memberselectText" dangerouslySetInnerHTML={{__html: member_ap_text}}></div>
                        </section>
                    </section>
                )
            })} 
        </section>
    )
}
