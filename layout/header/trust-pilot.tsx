/* eslint-disable @next/next/no-img-element */
import MailIcon from "icons/MailIcon";
import PhoneIcon from "icons/PhoneIcon";
import UserIcon from "icons/UserIcon";
import Router from "next/router";
import React from "react";
import css from "styles/layout.module.scss";


const TrustPilotAndContact = () => {
    return (
        <section className={css.container}>
            <div className="container">
                <div className={css["row"]}>
                    <div className={css["image-container"]}>
                        <ul>
                            <li>ABOUT US</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                    <div className={css["contact-container"]}>
                        <ul>
                            <li>Trustpilot</li>
                            <li><img src="/image/trustpilot.webp" alt="logo" /></li>
                        </ul>
                    </div>
                    <div className={css["account-container"]}>
                        <ul>
                            <li>
                                <span>
                                    <MailIcon size={18} />
                                </span>
                                <span className={css["text"]}>info@bedsdivans.co.uk</span>
                            </li>
                            <li>
                                <span>
                                   <PhoneIcon size={14} />
                                </span>
                                <span
                                    className={css["text"]}
                                    onClick={() => Router.push("/account")}
                                >
                                    01902405535
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TrustPilotAndContact;
