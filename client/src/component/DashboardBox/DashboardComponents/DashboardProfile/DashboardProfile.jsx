import './DashboardProfile.css';

export default function DashboardProfile() {
    const profileData = {
        profilePicture: '../../../../../src/assets/images/muscleCat/head-logo.png',
        username: 'john_doe'
    };

    return (
        <div className="dashboard-profile">
            <div className="profile-picture">
                <img src={profileData.profilePicture} alt="Profile" />
            </div>
            <h3>{profileData.username}</h3>
        </div>
    );
}