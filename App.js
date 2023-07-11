import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/lor.jpg'
import './index.css';
const heading = React.createElement('h1', {}, "Sharad New App");



const HeaderComponent = () => {
  return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src = {logo}/>
        </div>
        <div className="nav-conatiner">
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About us
                </li>
                <li>
                    Contact Us
                </li>
                <li>
                    Cart
                </li>
            </ul>
        </div>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
