/* eslint-disable @next/next/no-img-element */
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
                        <img src="/image/w.png" alt="img" />
                        <img src="/image/e.png" alt="img" />
                    </div>
                    <div className={css["contact-container"]}>
                        <ul>
                            <li>Customer service : 0343 798 3687</li>
                            <li>Sales : 0190 240 5535</li>
                        </ul>
                    </div>
                    <div className={css["account-container"]}>
                        <ul>
                            <li>
                                <span>
                                    <PhoneIcon size={14} />
                                </span>
                                <span className={css["text"]}>Contact Us</span>
                            </li>
                            <li>
                                <span>
                                    <UserIcon size={14} />
                                </span>
                                <span
                                    className={css["text"]}
                                    onClick={() => Router.push("/account")}
                                >
                                    My account
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
