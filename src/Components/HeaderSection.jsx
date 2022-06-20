import React, {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOders = (props) => {
    return (<div>
        {props.orders.map(el => (
            <Order key={el.id} item={el} />
        ))}
    </div>
    )
}

const showNothing = () => {
    return (
        <div className="empty">
            <h2>The backet is empty</h2>
        </div>
    )
}
 
export default function Header(props) {
    let [cardOpen, setCardOpen] = useState(false);

    return (
        <header>
            <div>
                <span className="logo"> Fruits Shop </span>
                <ul className="nav">
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>User account</li>
                </ul>
                <FaShoppingCart onClick={() => setCardOpen(cardOpen = !cardOpen)} className={`shop-card-button ${cardOpen && 'active'}`} />
                {cardOpen && (
                    <div className="shop-card">
                        {props.orders.length > 0 ? 
                        showOders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    )
}