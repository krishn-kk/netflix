import React from "react";
import "./Footer.css";
import {
    AiFillInstagram,
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <AiFillInstagram className="icon" />
                <AiFillFacebook className="icon" />
                <AiFillTwitterCircle className="icon" />
                <AiFillYoutube className="icon" />
            </div>
            <div className="list">
                <ul>
                    <li>Audio and Subtitles</li>
                    <li>Media</li>
                    <li>Contact Us</li>
                    <li>Privacy</li>
                </ul>

                <ul className="vanish">
                    <li>Audio Description</li>
                    <li>Investors Relation</li>
                    <li>Legal Notices</li>
                </ul>

                <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                </ul>

                <ul>
                    <li>Gift Cards</li>
                    <li>Terms of use</li>
                    <li>Corporate information</li>
                </ul>
            </div>
            <p>1997 - 2021 Netflix, Inc</p>
        </div>
    );
};

export default Footer;
