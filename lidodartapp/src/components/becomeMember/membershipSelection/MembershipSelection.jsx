import React, { useState } from 'react';
import { IoCheckmarkCircle, IoAddCircleSharp } from "react-icons/io5";
import './membershipSelection.css';

export default function MembershipSelection({ membershipData }) {
    const [memberdata, setMemberdata] = useState([membershipData]);

    return (
        <section id='memberselect'>
            {memberdata.map((data, index) => {
                const {member_ap_heading, member_ap_text, member_ap_plans} = data;

                return (
                    <section key={index} className="memberselectContainer">
                        <section className="memberselectContent">
                            <h1 className="memberselectTitle">{member_ap_heading}</h1>
                            <div className="memberselectText" dangerouslySetInnerHTML={{__html: member_ap_text}}></div>
                        </section>
                        <section className='memberselectPlanContainer'>
                            {member_ap_plans.map((plan, index) => {
                                const {member_ap_plans_heading, member_ap_plans_speaking, member_ap_plans_participating, member_ap_plans_licence, member_ap_plans_team, member_ap_plans_teamjersey, member_ap_plans_driving, member_ap_plans_paied, member_ap_plans_voting } = plan;
                                const planText = [
                                    {
                                        text: 'Taleret ved Generalforsamlingen',
                                        value: member_ap_plans_speaking
                                    }, {
                                        text: 'Deltagelse ved interne arrangementer',
                                        value: member_ap_plans_participating
                                    }, {
                                        text: 'Spillerlicens',
                                        value: member_ap_plans_licence
                                    }, {
                                        text: 'Deltagelse på hold',
                                        value: member_ap_plans_team
                                    }, {
                                        text: 'Spilletøj',
                                        value: member_ap_plans_teamjersey
                                    }, {
                                        text: 'Kørselsgodtgørelse ved udekampe',
                                        value: member_ap_plans_driving
                                    }, {
                                        text: 'Betalt tilmelding til JFM og DM',
                                        value: member_ap_plans_paied
                                    }, {
                                        text: 'Stemmeret ved Generalforsamlingen',
                                        value: member_ap_plans_voting
                                    }];
                                
                                return (
                                    <section key={index} className="memberselectPlan">
                                        <h3 className="memberselectPlanHeading">{member_ap_plans_heading}</h3>
                                        <div className="memberselectPlanFeatureContainer">
                                            {planText.map((item, index) => {
                                                return (
                                                    <div key={index} className="memberselectPlanFeatureIconContainer">
                                                        {item.value[0] == 'true' ? <IoCheckmarkCircle /> : <IoAddCircleSharp />}
                                                        <p className="memberselectPlanFeatureText">{item.text}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </section>
                                )
                            })}
                        </section>
                    </section>
                )
            })} 
        </section>
    )
}
