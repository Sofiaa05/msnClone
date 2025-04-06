import React, { useState } from 'react';
import './WebsiteLinks.css';
//Definng array of website objects
const WebsiteLinks = () => {
  const [websites, setWebsites] = useState([
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
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4d3tRjWStr7nI-0IV-0QHVhf0tZxrICif8g&s"
    }
  ]);

  return (  //returns JSX (what to display)
    <div className="website-links">
      {websites.map((site, index) => { //.map() loops through website array
      //site is current object, index is position number
        return ( 
            //code for what will be displayed on the screen
          <a key={index} href={site.url} target="_blank" className="link-item">
              {/* <a>: anchor tag — used to create a clickable link.
              key={index}: React wants a unique key for every element when we use .map(). Here, we just use the index.
              href={site.url}: This is the link where the user will go when they click.
              target="_blank": Opens the link in a new tab.
              */}
            <img src={site.icon} alt={site.name} />
            <p>{site.name}</p>
          </a>
        );
      })}
    </div>
  );
}

export default WebsiteLinks;
