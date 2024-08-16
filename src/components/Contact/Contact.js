import React from 'react';
import './Contact.css'


const Contact = () => {
  return (
    <section id='contact' className="contact-form-container">
      <div className='contact-form-card'>
        <h2>Let's work together!</h2>
        <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
        <form className="contact-form">
          <div className="form-group name-group">
            <div className="form-group-inline">
              <input type="text" id="firstName" name="firstName" placeholder="First name" />
            </div>
            <div className="form-group-inline">
              <input type="text" id="lastName" name="lastName" placeholder="Last name" />
            </div>
          </div>
          <div className="form-group contact-group">
            <div className="form-group-inline">
              <input type="email" id="email" name="email" placeholder="Email address" />
            </div>
            <div className="form-group-inline">
              <input type="tel" id="phone" name="phone" placeholder="Phone number" />
            </div>
          </div>
          <div className="form-group">
            <select id="subject" name="subject" placeholder="Subject">
              <option value="" disabled selected>Select a subject</option>
              <option value="feedback">Feedback</option>
              <option value="inquiry">Inquiry</option>
              <option value="support">Support</option>
            </select>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" placeholder="Message" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>


      <div className="contact-info">
        <div className="info-item">
          <span className="icon"><i className="fas fa-phone"></i></span>
          <div>
            <h3>Phone</h3>
            <p>+92 301 2533883</p>
          </div>
        </div>
        <div className="info-item">
          <span className="icon"><i className="fas fa-envelope"></i></span>
          <div>
            <h3>Email</h3>
            <p>hatimhaiderali786@gmail.com</p>
          </div>
        </div>
        <div className="info-item">
          <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
          <div>
            <h3>Address</h3>
            <p>Block-E, North-Nazimabad, Karachi</p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;
