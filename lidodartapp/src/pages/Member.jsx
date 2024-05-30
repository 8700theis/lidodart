import React, { useState } from 'react';
import MembershipSelection from '../components/becomeMember/membershipSelection/MembershipSelection';

export default function Member({ frontpageData }) {
    const [memberdata, setMemberdata] = useState(frontpageData);

    return (
        <>
            <MembershipSelection membershipData={memberdata} />
        </>
    )
}
