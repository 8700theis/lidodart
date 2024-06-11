import React, { useState } from 'react';
import MembershipSelection from '../components/becomeMember/membershipSelection/MembershipSelection';

export default function Member({ memberpageData }) {
    const [memberdata, setMemberdata] = useState(memberpageData);

    return (
        <>
            <MembershipSelection membershipData={memberdata} />
        </>
    )
}
