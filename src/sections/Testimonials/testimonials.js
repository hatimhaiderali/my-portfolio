import React, { useState, useEffect } from 'react';
import './testimonials.css'; // Import CSS for styling
import defaultImg from '../../assets/default.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';
import { useSwipeable } from 'react-swipeable';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationState, setAnimationState] = useState('slide-enter');

    const convertDriveLink = (url) => {
        const match = url.match(/id=([^&]+)/);
        return match ? `https://drive.google.com/thumbnail?id=${match[1]}` : defaultImg;
    };

    const fetchTestimonials = async () => {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwVMwGWipvrhTy7q04gErN_ovfj_tHV3NPNOaTVMZ7izOS-pcYmIOsNvPi8TP4a_Ewl/exec');
        const data = await response.json();
        return data.map(item => ({
            name: item.name,
            position: item.position,
            feedback: item.feedback,
            profilePicture: convertDriveLink(item.profilePictureURL),
            rating: item.rating
        }));
    };

    useEffect(() => {
        const loadTestimonials = async () => {
            const data = await fetchTestimonials();
            setTestimonials(data);
        };
        loadTestimonials();
    }, []);

    const handleNext = () => {
        setAnimationState('slide-exit');
        setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex + (window.innerWidth < 768 ? 1 : 2)) % testimonials.length);
            setAnimationState('slide-enter');
        }, 300);
    };

    const handlePrev = () => {
        setAnimationState('slide-exit-prev');
        setTimeout(() => {
            setCurrentIndex(prevIndex => (prevIndex - (window.innerWidth < 768 ? 1 : 2) + testimonials.length) % testimonials.length);
            setAnimationState('slide-enter-prev');
        }, 300);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handlePrev,
        onSwipedRight: handleNext,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const renderStarRating = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="star-rating">
                {[...Array(fullStars)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="star full-star" />)}
                {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star half-star" />}
                {[...Array(emptyStars)].map((_, i) => <FontAwesomeIcon key={i} icon={farStar} className="star empty-star" />)}
            </div>
        );
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-container" {...handlers}>
                <div className="testimonials-header">
                    <h2 className="gradient-text section-title">My Client's Stories</h2>
                    <p>Empowering people in new a digital journey with my super services</p>
                </div>
                <div className="carousel-div">
                    <div className="arrow" onClick={handlePrev} aria-label="Previous">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="testimonials-list">
                        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
                            <div key={index} className={`testimonial-card ${animationState}`}>
                                <div className="testimonial-header">
                                    <img
                                        src={testimonial.profilePicture || defaultImg}
                                        alt={`${testimonial.name}'s profile`}
                                        className="profile-picture"
                                        height="60"
                                        width="60"
                                        loading="lazy"
                                    />
                                    <div className="testimonial-author-info">
                                        <p className="testimonial-author">{testimonial.name}</p>
                                        <p className="testimonial-position">{testimonial.position}</p>
                                    </div>
                                </div>
                                <div className="testimonial-message">
                                    <p>"{testimonial.feedback}"</p>
                                </div>
                                <div className="testimonial-rating">
                                    {renderStarRating(testimonial.rating)}
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
