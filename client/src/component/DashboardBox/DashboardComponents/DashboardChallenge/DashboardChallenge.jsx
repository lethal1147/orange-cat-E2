import React from 'react';
import './DashboardChallenge.css';

export default function DashboardChallenge() {
    const friendsMockData = [
        {
            profileImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
            username: 'jane_smith'
        },
        {
            profileImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
            username: 'alex_jones'
        },
        {
            profileImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
            username: 'sarah_taylor'
        },
        {
            profileImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
            username: 'david_brown'
        },
        {
            profileImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
            username: 'emily_clark'
        },
        {
            profileImg: '../../../../../src/assets/images/muscleCat/head-logo.png',
            username: 'michael_wright'
        },
    ];

    return (
        <div>
            <h2 className="progress-text" id="progress-text-title">Challenge!</h2>
            <div className="friend-profile-container">
                {friendsMockData.map((friend, index) => (
                    <div key={index} className="friend-profile">
                        <div className="friend-image">
                            <img src={friend.profileImg} alt="Friend Profile" />
                        </div>
                        <h3>{friend.username}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}