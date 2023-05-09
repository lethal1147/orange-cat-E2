import React, { useEffect } from 'react';
import './DashboardBox.css';
import DashboardProfile from './DashboardComponents/DashboardProfile/dashboardProfile';
import DashboardProgress from './DashboardComponents/DashboardProgress/DashboardProgress';

export default function DashboardBox() {
    useEffect(() => {
        document.body.classList.add('dashboard-body');
        return () => {
            document.body.classList.remove('dashboard-body');
        };
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-column">
                <div className="dashboard-card">
                    <DashboardProfile />
                </div>
                <div className="dashboard-card">
                    <DashboardProgress />
                </div>
            </div>
        </div>
    );
};