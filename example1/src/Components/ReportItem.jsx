import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ReportItem() {
    const navigate = useNavigate();
    const [type, setType] = useState("lost");
    const [formData, setFormData] = useState({ itemName: "", description: "", location: "", date: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/items", {
                type,
                ...formData
            });
            alert("Item reported successfully!");
            navigate("/dashboard");
        } catch (error) {
            alert("Something went wrong!");
        }
    };

    return (
        <div className="report-page">
            <h1>Report an Item</h1>

            <div className="toggle">
                <button className={type === "lost" ? "active-lost" : ""} onClick={() => setType("lost")}>Lost Item</button>
                <button className={type === "found" ? "active-found" : ""} onClick={() => setType("found")}>Found Item</button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Item Name</label>
                <input onChange={(e) => setFormData({...formData, itemName: e.target.value})} placeholder="e.g. Black wallet" required />
                <label>Description</label>
                <textarea onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Describe the item..." required rows={3} />
                <label>Location</label>
                <input onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="Where did you lose/find it?" required />
                <label>Date</label>
                <input type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} required />
                <button type="submit">Submit Report</button>
            </form>

            <p className="back" onClick={() => navigate("/dashboard")}>← Back to Dashboard</p>
        </div>
    );
}