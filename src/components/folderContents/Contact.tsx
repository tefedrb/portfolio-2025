import './folderContents.css';
import gitHubImg from '../../assets/icons/github.png';
import linkedInImg from '../../assets/icons/linkedin.png';
import gmailImg from '../../assets/icons/gmail.png';
import twitterImg from '../../assets/icons/twitter.png';


const Contact = () => {
  return (
    <div className="contact-outer-wrap">
      <div className="window-top">
        <h1 style={{ margin: "0", fontSize: "inherit" }}>contact.js</h1>
      </div>
      <div className="contact-inner-wrap">
        <a className="contact-div" href="https://github.com/tefedrb" target="_blank" rel="noopener">
          <img className="contact-icon" src={gitHubImg} />
          <p>GitHub</p>
        </a>
        <a className="contact-div" href="https://www.linkedin.com/in/tefedrb/" target="_blank" rel="noopener">
          <img className="contact-icon" src={linkedInImg} />
          <p>LinkedIn</p>
        </a>
        <a className="contact-div">
          <img className="contact-icon" src={gmailImg} />
          tefebell@gmail.com
        </a>
        <a className="contact-div" href="https://twitter.com/HypedOnTofu" target="_blank" rel="noopener">
          <img className="contact-icon" src={twitterImg} />
          <p>Twitter</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;