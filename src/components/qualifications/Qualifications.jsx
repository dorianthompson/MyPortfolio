import React from 'react';
import './qualifications.css';

const Qualifications = () => {
  return (
    <section className="qualifications section">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My perosnal Journey into Coding</span>

        <div className="qualifications-container container">
            <div className="qualification-tabs">
                <div className="qualifications-button qualifications-active button--flex">
                    <i className="uil uil-graduation-cap qualifications-icon"></i> Certifications
                </div>

                <div className="qualifications-button button--flex">
                    <i className="uil uil-briefcase-alt qualifications-icon"></i> Experience
                </div>
            </div>

            <div className="qualifications-section">
                <div className="qualifications-content">
                    <div className="qualifications-data">
                        <div>
                            <h3 className="qualifications-title"></h3>
                            <span className="qualifications-subtitle"></span>
                            <div className="qualifications-calendar">
                                <i className="uil uil-calendar-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications