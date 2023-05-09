import React, { useEffect } from 'react';
import './DashboardBox.css';

import DashboardProfile from './DashboardComponents/DashboardProfile/dashboardProfile';
import DashboardProgress from './DashboardComponents/DashboardProgress/DashboardProgress';
import DashboardChallenge from './DashboardComponents/DashboardChallenge/DashboardChallenge';
import DashboardAchievements from './DashboardComponents/DashboardAchievements/DashboardAchievements';
import DashboardCards from './DashboardComponents/DashboardCards/DashboardCards';
import DashboardGoals from './DashboardComponents/DashboardGoals/DashboardGoals';

export default function DashboardBox() {
    useEffect(() => {
        document.body.classList.add('dashboard-body');
        return () => {
            document.body.classList.remove('dashboard-body');
        };
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-column" id="column-1">
                <div className="dashboard-card">
                    <DashboardProfile />
                </div>
                <div className="dashboard-card">
                    <DashboardProgress />
                </div>
                <div className="dashboard-card">
                    <DashboardChallenge />
                </div>
            </div>
            <div className="dashboard-column" id="column-2">
                <div className="dashboard-card">
                    <DashboardAchievements />
                </div>
                <div className="dashboard-card">
                    <DashboardCards />
                </div>
                <div className="dashboard-card">
                    <DashboardGoals />
                </div>
            </div>
        </div>
    );
};