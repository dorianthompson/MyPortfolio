import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">
        <div className="about-box">
            <i className="bx bx-award about-icon"></i>
            <h3 className="about-title">Education</h3>
            <span className="about-subtitle">8 Coding Certificates</span>
        </div>

        <div className="about-box">
            <i className="bx bx-briefcase-alt about-icon"></i>
            <h3 className="about-title">Experience</h3>
            <span className="about-subtitle">Completed 10+ Projects and counting</span>
        </div>
    </div>
  )
}

export default Info