import React from 'react';
import { Instagram, Facebook, MessageCircle, Globe, ExternalLink } from 'lucide-react';
import './App.css';

const message = encodeURIComponent("مرحبا كيف حالك؟");
const phoneNumber = "96176118290";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

const profileData = {
  name: "@3dstl961",
  bio: "3D printing | Engineer projects",
  avatar: "./Logo.png", // Replace with your photo URL
  links: [
    { name: 'Instagram', url: 'https://www.instagram.com/3dstl961?igsh=MTFpamM4eHc3MGhvYQ==', icon: <Instagram />, color: '#E1306C' },
    { name: 'Facebook', url: 'https://facebook.com/your', icon: <Facebook />, color: '#1877F2' },
    { name: 'WhatsApp', url: whatsappUrl, icon: <MessageCircle />, color: '#25D366' },
    { name: 'Website', url: '/', icon: <Globe />, color: '#6366F1' },
  ]
};

function App() {
  return (
    <div className="app-wrapper">
      <div className="glass-card">
        <img src={profileData.avatar} alt="Profile" className="profile-img" />
        <h1>{profileData.name}</h1>
        <p className="bio">{profileData.bio}</p>

        <div className="links-container">
          {profileData.links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noreferrer" className="link-item">
              <span className="icon-wrapper" style={{ color: link.color }}>{link.icon}</span>
              <span className="link-text">{link.name}</span>
              {
                link.name === 'Website' && <small className='c-red mr-1'> Under coding </small>
              }
              <ExternalLink size={16} className="arrow" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;