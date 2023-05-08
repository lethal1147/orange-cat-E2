import React from 'react';
import './DashboardCards.css';

export default function DashboardCards() {
    const cardsMockData = [
        {
            cardImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            cardImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            cardImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            cardImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            cardImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            cardImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
    ];

    return (
        <div className="cards-container">
            {cardsMockData.map((card, index) => (
                <div key={index} className="card-image">
                    <img src={card.cardImg} alt="Profile" />
                </div>
            ))}
        </div>
    );
}