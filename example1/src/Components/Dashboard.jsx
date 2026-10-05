
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/Login");
    };

    return (
        <div className="dashboard">
            <div className="dash-header">
                <h1>Lost & Found</h1>
                <button className="logout" onClick={handleLogout}>Logout</button>
            </div>

            <p className="welcome">Welcome back! What would you like to do today?</p>

            <div className="dash-cards">
                <div className="dash-card">
                    <span>📋</span>
                    <h2>Report an Item</h2>
                    <p>Lost or found something? Report it here.</p>
                    <button onClick={() => navigate("/report")}>Report Item</button>
                </div>

                <div className="dash-card">
                    <span>🔍</span>
                    <h2>Browse Items</h2>
                    <p>Search through all lost and found reports.</p>
                    <button onClick={() => navigate("/items")}>View All</button>
                </div>
            </div>
        </div>
    );
}