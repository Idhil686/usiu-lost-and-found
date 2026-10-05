export default function ContactUs() {
    const contacts = [
        { name: "Idhil Hassan", role: "Team Lead", email: "hassanidhil@gmail.com", initials: "IH", color: { bg: "#E1F5EE", text: "#0F6E56" } },
        { name: "Jane Smith", role: "Support", email: "jane@gmail.com", initials: "JS", color: { bg: "#EEEDFE", text: "#534AB7" } },
        { name: "Tom Holland", role: "Developer", email: "holland52@gmail.com", initials: "TH", color: { bg: "#FAECE7", text: "#993C1D" } },
    ];

    return (
        <div className="contacts-section">
            <div className="contacts-header">
                <p className="contacts-eyebrow">Get in touch</p>
                <h2 className="contacts-title">Meet the team</h2>
            </div>

            <div className="contacts-grid">
                {contacts.map((c) => (
                    <div className="contact-card" key={c.email}>
                        <div
                            className="contact-avatar"
                            style={{ background: c.color.bg, color: c.color.text }}
                        >
                            {c.initials}
                        </div>
                        <p className="contact-name">{c.name}</p>
                        <p className="contact-role">{c.role}</p>
                        <div className="contact-divider" />
                        <p className="contact-email" style={{ color: c.color.text }}>
                            {c.email}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}