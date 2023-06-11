import React from 'react';
import './qualifications.css';

const Qualifications = () => {
  return (
    <section className="qualifications section">
        <h2 className="section-title">Qualifications</h2>
        <span className="section-subtitle">My personal Journey into Coding</span>

        <div className="qualifications-container container">
            <div className="qualifications-tabs">
                <div className="qualifications-button qualifications-active button--flex">
                    <i className="uil uil-graduation-cap qualifications-icon"></i> Certifications
                </div>
            </div>

            <div className="qualifications-section">
                <div className="qualifications-content qualifications-content-active">
                    <div className="qualifications-data">
                        <div>
                            <h3 className="qualifications-title">Frontend Developer</h3>
                            <span className="qualifications-subtitle">Frontend Expert</span>
                            <div className="qualifications-calendar">
                                <i className="uil uil-calendar-alt">Jan 2023 - April 2023</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div></div>
                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                        <div>
                            <h3 className="qualifications-title">NodeJS Developer</h3>
                            <span className="qualifications-subtitle">Udemy</span>
                            <div className="qualifications-calendar">
                                <i className="uil uil-calendar-alt">May 2022 - June 2022</i>
                            </div>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div>
                            <h3 className="qualifications-title">React Developer</h3>
                            <span className="qualifications-subtitle">Udemy</span>
                            <div className="qualifications-calendar">
                                <i className="uil uil-calendar-alt">March 2022 - May 2022</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div></div>
                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                        <div>
                            <h3 className="qualifications-title">Java Developer</h3>
                            <span className="qualifications-subtitle">Udemy</span>
                            <div className="qualifications-calendar">
                                <i className="uil uil-calendar-alt">Dec 2021 - Feb 2022</i>
                            </div>
                        </div>
                    </div>

                    <div className="qualifications-data">
                        <div>
                            <h3 className="qualifications-title">Python Developer</h3>
                            <span className="qualifications-subtitle">Udemy</span>
                            <div className="qualifications-calendar">
                                <i className="uil uil-calendar-alt">May 2021 - Nov 2021</i>
                            </div>
                        </div>

                        <div>
                            <span className="qualifications-rounder"></span>
                            <span className="qualifications-line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications