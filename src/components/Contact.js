import React from 'react';
import './Contact.css'; // Import the CSS for this component

const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <h2 className="section-title">Contact</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
