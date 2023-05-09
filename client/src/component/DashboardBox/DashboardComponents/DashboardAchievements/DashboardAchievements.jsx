import React from 'react';
import './DashboardAchievements.css';

export default function DashboardAchievements() {
    const achievementsMockData = [
        {
            achievementImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            achievementImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            achievementImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            achievementImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            achievementImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
        {
            achievementImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
        },
    ];

    return (
        <div>
            <h2 className="achievements-text">Achievements</h2>
            <div className="achievements-container">
                {achievementsMockData.map((achievement, index) => (
                    <div key={index} className="achievement-image">
                        <img src={achievement.achievementImg} alt="Profile" />
                    </div>
                ))}
            </div>
        </div>
    );
}