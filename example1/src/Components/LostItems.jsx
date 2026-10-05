import { useState, useEffect } from "react";
import axios from "axios";

export default function LostItems() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/items");
                setItems(res.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []);

    if (loading) return <p style={{ padding: "40px" }}>Loading items...</p>;

    return (
        <div className="items-page">
            <h1>Lost & Found Items</h1>
            <p className="items-sub">Browse all reported items</p>

            {items.length === 0 ? (
                <p style={{ textAlign: "center", color: "#888" }}>No items reported yet.</p>
            ) : (
                <div className="items-grid">
                    {items.map(item => (
                        <div key={item._id} className={`item-card ${item.type}`}>
                            <span className="item-tag">{item.type === "lost" ? "🔴 Lost" : "🟢 Found"}</span>
                            <h2>{item.itemName}</h2>
                            <p>{item.description}</p>
                            <p>📍 {item.location}</p>
                            <p>📅 {item.date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}