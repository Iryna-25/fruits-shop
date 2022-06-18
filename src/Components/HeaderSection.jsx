import React from "react";

export default function Header() {
    return (
        <header>
            <div>
                <span className="logo"> Fruits Shop </span>
                <ul className="nav">
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>User account</li>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>
    )
}