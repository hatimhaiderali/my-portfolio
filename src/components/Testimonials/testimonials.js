import React, { useState, useEffect } from 'react';
import './testimonials.css'; // Import CSS for styling

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchTestimonials = async () => {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwq8rWf_01zJHsI12LREXeWvQEiHv7qsxxoE3E2UFbwwt5h8mPYRjPy8SzcsccP85H6/exec');
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        const getTestimonials = async () => {
            const data = await fetchTestimonials();
            setTestimonials(data);
        };

        getTestimonials();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % (testimonials.length));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section">
            <div className='testimonials-container'>
                <div>
                    <h2 className='gradient-text'>My Client's Stories</h2>
                    <p>Empowering people in new a digital journey with my super services</p>
                </div>
                <div className='carousel-div'>
                    <div className="testimonials-list">
                        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <p className="testimonial-message">"{testimonial.feedback}"</p>
                                <p className="testimonial-author">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <div className="arrow" onClick={handlePrev} aria-label="Previous">
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div className="arrow" onClick={handleNext} aria-label="Next">
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
