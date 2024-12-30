import React from "react";
import "./Footer.css"; // Add this file for styling the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>📞 +91 987654321</p>
          <p>✉️ Mithlanchalbhaw@gmail.com</p>
          <p>📍 Laxmisagar, Darbhanga, Bihar 846009</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="footer-section links">
          <h4>Important Links</h4>
          <ul>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Message Section */}
        <div className="footer-section message">
          <h4>Shivam Kumar</h4>
          <p>Professional web developer</p>
          <p>Give <strong>review</strong> or <strong>interesting ideas</strong> straight to my inbox.</p>
          <div className="message-box">
            <input type="text" placeholder="Enter your message" />
            <button>Send</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights are reserved ©</p>
        <div>
          <a href="#">Terms of Services</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
