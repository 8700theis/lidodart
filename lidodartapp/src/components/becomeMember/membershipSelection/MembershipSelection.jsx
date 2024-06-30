import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                                    <section key={index} className={index === 1 ? "memberselectPlan activeMembership" : "memberselectPlan"}>
                                        <h3 className={index === 1 ? "memberselectPlanHeading activeMembership" : "memberselectPlanHeading"}>{member_ap_plans_heading}</h3>
                                        <div className='memberselectPlanBtnContainer'>
                                            <Link to={index === 1 ? '/bliv-medlem-af-lido-dartklub/aktiv' : '/bliv-medlem-af-lido-dartklub/passiv'} className={index === 1 ? "memberselectPlanBtn activeMembership" : "memberselectPlanBtn"}>{index === 1 ? 'Vælg Medlemsskab' : 'Bliv Medlem'}</Link>
                                        </div>
                                        <div className={index === 1 ? "memberselectPlanLine activeMembership" : "memberselectPlanLine"}></div>
                                        <div className="memberselectPlanFeatureContainer">
                                            {planText.map((item, textindex) => {
                                                const styleCheck = {color : "var(--greenColor)", fontSize: "var(--fontSizeNavbar)"}
                                                const styleMinus = {color : "var(--errorColor)", fontSize: "var(--fontSizeNavbar)"}
                                                return (
                                                    <div key={textindex} className="memberselectPlanFeatureIconContainer">
                                                        <div className="memberselectPlanFeatureIconWrapper">
                                                            {item.value[0] == 'true' ? <IoCheckmarkCircle style={styleCheck} /> : <IoAddCircleSharp style={styleMinus} />}
                                                        </div>
                                                        <p className={index === 1 ? "memberselectPlanFeatureText activeMembership" : "memberselectPlanFeatureText"}>{item.text}</p>
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
