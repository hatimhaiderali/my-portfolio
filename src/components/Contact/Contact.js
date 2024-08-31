
import React, { useState } from 'react';
import './Contact.css'


const Contact = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  /* const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyJq9IL1VMjYL1RQHSDqrN0PB3QDxmAs4K3671L1GN9SCyuU88_ZkfQ1UKCuoA7VUXp/exec', {
        method: 'POST',
        body: new URLSearchParams(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show success prompt immediately

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    e.target.reset();

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwq8rWf_01zJHsI12LREXeWvQEiHv7qsxxoE3E2UFbwwt5h8mPYRjPy8SzcsccP85H6/exec', {
        method: 'POST',
        body: new URLSearchParams(data),
      });
      // After the request is successful, clear the form
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id='contact' className="contact-form-container">
      <div className='contact-form-card'>
        <h2>Let's work together!</h2>
        <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
        <form onSubmit={handleSubmit} method='POST' className="contact-form" action='https://script.google.com/macros/s/AKfycbyJq9IL1VMjYL1RQHSDqrN0PB3QDxmAs4K3671L1GN9SCyuU88_ZkfQ1UKCuoA7VUXp/exec'>
          <div className="form-group name-group">
            <div className="form-group-inline">
              <input type="text" id="firstName" name="firstName" placeholder="First name" required />
            </div>
            <div className="form-group-inline">
              <input type="text" id="lastName" name="lastName" placeholder="Last name" required />
            </div>
          </div>
          <div className="form-group contact-group">
            <div className="form-group-inline">
              <input type="email" id="email" name="email" placeholder="Email address" required />
            </div>
            <div className="form-group-inline">
              <input type="tel" id="phone" name="phone" placeholder="Phone number" required />
            </div>
          </div>
          <div className="form-group">
            <select id="subject" name="subject" placeholder="Subject" required>
              <option value="" disabled selected>Select a subject</option>
              <option value="feedback">Feedback</option>
              <option value="inquiry">Inquiry</option>
              <option value="support">Support</option>
            </select>
          </div>
          <div className="form-group">
            <textarea id="message" name="message" placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className={`success-prompt ${isSubmitted ? 'show' : ''}`}>
          <i className="fas fa-check-circle success-icon"></i>
          <div className="success-message">
            <p>
              Thank You!
              <br />
              Your message has been received!
              <br />
              I'll get back to you shortly.
            </p>
          </div>
        </div>
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
