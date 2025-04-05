import React from 'react';
import './WebsiteLinks.css'
const websites = [
  {
    name: "Microsoft 365",
    icon: "https://img.icons8.com/color/48/000000/microsoft-office-2019.png",
    url: "https://www.microsoft.com"
  },
  {
    name: "Flipkart",
    icon: "https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg",
    url: "https://www.flipkart.com"
  },
  {
    name: "LinkedIn",
    icon: "https://img.icons8.com/color/48/linkedin.png",
    url: "https://www.linkedin.com"
  },
  {
    name: "Facebook",
    icon: "https://img.icons8.com/color/48/facebook.png",
    url: "https://www.facebook.com"
  },
  {
    name: "Booking.com",
    icon: "https://img.icons8.com/color/48/booking.png",
    url: "https://www.booking.com"
  },
  {
    name: "Nykaa",
    icon: "https://digitalscholar.in/wp-content/uploads/2022/05/nykaa-1024x1024.png",
    url: "https://www.nykaa.com"
  },
  {
    name: "Ajio",
    icon: "https://img.utdstc.com/icon/b7e/c6b/b7ec6bcad19a722c6f27fb3297d7ae074982d7915c421d541f5e07072fe654a9:200",
    url: "https://www.ajio.com"
  },
  {
    name: "Add Shortcut",
    icon: "https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png"
  }
];

function WebsiteLinks() {
  return (
    <div className="website-links">
      {websites.map((site, index) => (
        <a key={index} href={site.url} target="_blank" className="link-item">
          <img src={site.icon} alt={site.name} />
          <p>{site.name}</p>
        </a>
      ))}
    </div>
  );
}

export default WebsiteLinks;
