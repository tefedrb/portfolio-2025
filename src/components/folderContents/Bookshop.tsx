import { useState } from 'react';
import bookshopImg from '../../assets/Bookshop-Crutch.png';
import './folderContents.css';

const Bookshop = () => {
  const [demo, showDemo] = useState(false);
  
  const handleClick = () => {
    showDemo(!demo);
  };

  return (
    <>
      <div className="proj-link-wrap">
        <a className="proj-link"
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://github.com/tefedrb/bookshop-crutch"
        >
          [ GitHub ]
        </a>
        <a className="proj-link" onClick={handleClick}>[ Demo ]</a>
      </div>

      <h1 style={{ marginTop: "0" }}>Bookshop-Crutch</h1>

      {demo ? (
        <iframe
          width="100%"
          style={{ maxWidth: "500px" }}
          height="300px"
          src="https://www.youtube.com/embed/ToyXG-Ym67c"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <img className="app-ui" src={bookshopImg} />
      )}

      <div className="text-wrap">
        <p style={{ textAlign: "center" }}>
          [NAMES, ADDRESSES AND NUMBERS HAVE BEEN MODIFIED TO PROTECT PRIVACY]
        </p>

        <p className="text">
          Bookshop-Crutch is a customer service assistance tool that aggregates a customer's order information and displays 
          it in one place. I decided to build this for myself while working as a contractor for Bookshop, 
          after realizing how cumbersome the process was to get the information I needed. The data was not only spread out accross different 
          websites, but also required navigating through a dated customer portal and parsing through a PDF file in order to 
          find the relavent information. This app cuts a 6+ step process down to one.
        </p>
      </div>
    </>
  );
};

export default Bookshop;