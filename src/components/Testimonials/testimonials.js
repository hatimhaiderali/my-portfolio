import React, { useState, useEffect } from 'react';
import './testimonials.css'; // Import CSS for styling
import defaultImg from '../../assets/default.png'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationState, setAnimationState] = useState('slide-enter');

    /*  const fetchTestimonials = async () => {
         const response = await fetch('https://script.google.com/macros/s/AKfycbwq8rWf_01zJHsI12LREXeWvQEiHv7qsxxoE3E2UFbwwt5h8mPYRjPy8SzcsccP85H6/exec');
         const data = await response.json();
         return data;
     }; */

    const fetchTestimonials = async () => {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxNHBIVqXh3TsLxqtMJemSEfhPYr-V_eBd0LJjwyUId13sH383_0GQo7xmbOqGzGCfR/exec');
        const data = await response.json();
        return data.map(item => ({
            name: item.name,
            position: item.position,
            feedback: item.feedback,
            profilePicture: item.profilePictureURL, // Ensure this matches the column name
        }));
    };

    useEffect(() => {
        const getTestimonials = async () => {
            const data = await fetchTestimonials();
            setTestimonials(data);
        };

        getTestimonials();
    }, []);

    const handleNext = () => {
        setAnimationState('slide-exit');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
            setAnimationState('slide-enter');
        }, 300); // Match the CSS transition duration
    };

    const handlePrev = () => {
        setAnimationState('slide-exit');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length);
            setAnimationState('slide-enter');
        }, 300); // Match the CSS transition duration
    };

    return (
        <section className="testimonials-section" id='testimonials'>
            <div className='testimonials-container'>
                <div>
                    <h2 className='gradient-text'>My Client's Stories</h2>
                    <p>Empowering people in new a digital journey with my super services</p>
                </div>
                <div className='carousel-div'>
                    <div className="arrow" onClick={handlePrev} aria-label="Previous">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="testimonials-list">
                        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-card ${animationState}`}
                            >
                                <div className="testimonial-header">
                                    <img
                                        src={testimonial.profilePicture || defaultImg}
                                        alt={`${testimonial.name}'s profile`}
                                        className="profile-picture"
                                    />

                                    <div className="testimonial-author-info">
                                        <p className="testimonial-author">{testimonial.name}</p>
                                        <p className="testimonial-position">{testimonial.position}</p>
                                    </div>
                                </div>
                                <div className="testimonial-message">
                                    <p>"{testimonial.feedback}"</p>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div className="arrow" onClick={handleNext} aria-label="Next">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
