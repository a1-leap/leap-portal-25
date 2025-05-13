import React, { useState } from "react";
import {
  Mail,
  Calendar,
  FileText,
  Play,
  Eye,
  Users,
  Globe,
  LifeBuoy,
  LucideClapperboard,
  ShieldQuestion,
  Clapperboard,
} from "lucide-react";
import "./SaasPortal.css";

const SaasPortal = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const apps = [
    {
      id: "outlook",
      name: "Outlook",
      description: "Email & Calendar",
      url: "https://outlook.office.com/mail/",
      icon: <Mail size={32} />,
      color: "#0078d4",
    },
    {
      id: "monday",
      name: "Monday.com",
      description: "Project Management",
      url: "https://leaplondon.monday.com",
      icon: <Calendar size={32} />,
      color: "#ff3d57",
    },
    {
      id: "sharefile",
      name: "Sharefile",
      description: "File Sharing",
      url: "https://leaplondon.sharefile.com",
      icon: <FileText size={32} />,
      color: "#00a1ff",
    },
    {
      id: "frame",
      name: "Frame.io",
      description: "Video Review",
      url: "https://app.frame.io",
      icon: <Play size={32} />,
      color: "#0057ff",
    },
    {
      id: "preview",
      name: "Preview.works",
      description: "Content Preview",
      url: "https://preview.works",
      icon: <Eye size={32} />,
      color: "#6e49cb",
    },
    {
      id: "staffology",
      name: "Staffology HR",
      description: "HR Portal",
      url: "https://app.staffologyhr.co.uk/portal/",
      icon: <Users size={32} />,
      color: "#27ae60",
    },
    {
      id: "website",
      name: "LEAP Website",
      description: "Company Homepage",
      url: "https://www.leaplondon.com",
      icon: <Globe size={32} />,
      color: "#3498db",
    },
    {
      id: "helpdesk",
      name: "IT Helpdesk Form",
      description: "IT Form",
      url: "#",
      icon: <LifeBuoy size={32} />,
      color: "#e74c3c",
    },
    {
      id: "newwork",
      name: "New Work Form",
      description: "New Work Form",
      url: "https://wkf.ms/44vro0K",
      icon: <Clapperboard size={32} />,
      color: "#cf9c3c",
    },
    {
      id: "feature",
      name: "Monday Feature Request",
      description: "Feature Request Form",
      url: "https://wkf.ms/3SmWnoF",
      icon: <ShieldQuestion size={32} />,
      color: "#e7bd12",
    },
  ];

  return (
    <div className="portal-container">
      {/* Header */}
      <header className="portal-header">
        <div className="header-content">
          <h1 className="header-title">LEAP London Portal</h1>
          <p className="header-subtitle">
            Quick access to your essential tools
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="portal-main">
        <div className="cards-grid">
          {apps.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
              onMouseEnter={() => setHoveredCard(app.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`app-card ${hoveredCard === app.id ? "card-hovered" : ""}`}
                style={{
                  borderTop: `4px solid ${app.color}`,
                  boxShadow:
                    hoveredCard === app.id
                      ? `0 10px 25px -5px ${app.color}40`
                      : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="card-content">
                  <div
                    className="card-icon-container"
                    style={{ backgroundColor: `${app.color}20` }}
                  >
                    <div style={{ color: app.color }}>{app.icon}</div>
                  </div>
                  <div className="card-text-container">
                    <h2 className="card-title" style={{ color: app.color }}>
                      {app.name}
                    </h2>
                    <p className="card-description">{app.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="portal-footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} LEAP London. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SaasPortal;
