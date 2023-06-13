import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section-title">Reach Out</h2>
        <span className="section-subtitle">Contact Me</span>

        <div className="contact-container containeer grid">
            <div className="contact-content">
                <h3 className="contact-title">Speak with me</h3>

                <div className="contact-info">
                    <div className="contact-card">
                        <i className="bx bx contact-card-icon"></i>

                        <h3 className="contact-card-title">Phone</h3>
                        <span className="contact-card-data">302-339-9665</span>

                        <a href="tel:+3023399665" className="contact-button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                        </a>
                    </div>
                    <div className="contact-card">
                        <i className="bx bx contact-card-icon"></i>

                        <h3 className="contact-card-title">Email</h3>
                        <span className="contact-card-data">thompsondorian2@gmail.com</span>

                        <a href="mailto:thompsondorian2@gmail.com" className="contact-button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                        </a>
                    </div>

                    <div className="contact-card">
                        <i className="bx bx contact-card-icon"></i>

                        <h3 className="contact-card-title">Calendly</h3>
                        <span className="contact-card-data">calendly.com/dorianthompson</span>

                        <a href="https://calendly.com/dorianthompson" className="contact-button">
                            Write me{" "}
                            <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact-content">
                <h3 className="contact-title"></h3>
            </div>

            <div className="contact-content">
                <h3 className="contact-title"></h3>
            </div>
        </div>
    </section>
  )
}

export default Contact