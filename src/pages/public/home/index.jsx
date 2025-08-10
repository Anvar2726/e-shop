import { memo } from "react";
import { FaShippingFast, FaLock, FaGift, FaHeadset, FaStar } from "react-icons/fa";
import { Link } from "react-router";

import homeBanner from "../../../assets/images/home-banner.jpg";
import { reviews } from "../../../data";

import "./style.scss";

const HomePage = memo(() => {
  return (
    <section className="homepage">
      <section className="hero container">
        <div className="hero__text">
          <h1>Welcome to E-Shop</h1>
          <p>Top-quality products, fast delivery, and unbeatable prices — all in one place.</p>
          <Link to="/products" className="hero__btn">
            Explore Products
          </Link>
        </div>
        <div className="hero__img">
          <img src={`${homeBanner}`} alt="ecommerce banner" width="auto" height="auto" />
        </div>
      </section>
      <section className="features container">
        <h2>Why Shop With Us?</h2>
        <div className="features__grid">
          <div className="feature__card">
            <FaShippingFast />
            <h3>Fast Delivery</h3>
            <p>Lightning-fast shipping on all orders</p>
          </div>
          <div className="feature__card">
            <FaLock />
            <h3>Secure Payments</h3>
            <p>Your payments are encrypted & safe</p>
          </div>
          <div className="feature__card">
            <FaGift />
            <h3>Daily Deals</h3>
            <p>Exciting offers and discounts every day</p>
          </div>
          <div className="feature__card">
            <FaHeadset />
            <h3>24/7 Support</h3>
            <p>We’re always here to help you out</p>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="testimonials container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials__grid">
          {reviews.map((review, i) => (
            <div className="testimonial__card" key={i}>
              <div className="testimonial__image">
                <img src={review.img} alt={review.name} />
              </div>
              <div className="testimonial__content">
                <p className="testimonial__quote">“{review.text}”</p>
                <h4>{review.name}</h4>
                <div className="testimonial__rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CTA */}
      <section className="cta">
        <div className="cta__overlay">
          <div className="cta__content container">
            <h2>Ready to Elevate Your Shopping?</h2>
            <p>Discover exclusive deals and top-rated products.</p>
            <p>Quality and affordability meet in one place.</p>
            <p>Enjoy fast delivery and secure payments every time.</p>
            <p>Your perfect item is just a click away.</p>
            <Link to="/products" className="cta__btn">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter__content container">
          <h2>Join Our Newsletter</h2>
          <p>Subscribe and get exclusive deals, updates and more.</p>
          <div className="newsletter__form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
    </section>
  );
});

export default HomePage;
