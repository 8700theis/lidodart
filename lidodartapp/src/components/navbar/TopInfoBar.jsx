import React from 'react'
import './topInfoBar.css'

import { FaPhone } from "react-icons/fa6";
import { FaClock, FaSnapchatSquare  } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";

export default function TopInfoBar() {
    return (
        <section id='infobar'>
            <article className="infobarContainer">
                <a href='tel:25534567' className="infobarPhoneTimeContainer link">
                    <FaPhone />
                    <p className='infobarPhone'>25534567</p>
                </a>
                <div className="infobarPhoneTimeContainer">
                    <FaClock />
                    <p className='infobarTime'>Mandag og Torsdag 19:00 - 22-30</p>
                </div>
            </article>
            <article className="infobarContainer">
                <div className="infoBarTextcontainer">
                    <p className="infobarText">Den største dartklub i Horsens</p>
                </div>
                <div className="infobarSocialsContainer">
                    <IoLogoFacebook />
                    <SlSocialInstagram />
                    <FaSnapchatSquare />
                </div>
            </article>
        </section>
    )
}
