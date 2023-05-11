import React from 'react';
import './DashboardGoals.css';

export default function DashboardGoals() {
    const goalsMockData = [
        {
            goalImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            goalImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
    ];

    return (
        <div>
            <h2 className="goals-text">Your Goals</h2>
            <div className="goals-container">
                {goalsMockData.map((goal, index) => (
                    <div key={index} className="goal-image">
                        <img src={goal.goalImg} alt="Profile" />
                    </div>
                ))}
            </div>
        </div>
    );
}