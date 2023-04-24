import React, { useEffect } from 'react';
import './DashboardBox.css';
import DashboardProfile from './DashboardComponents/DashboardProfile/dashboardProfile';

export default function DashboardBox() {
    useEffect(() => {
        document.body.classList.add('dashboard-body');
        return () => {
            document.body.classList.remove('dashboard-body');
        };
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
            <DashboardProfile />
            </div>
        </div>
    );
};