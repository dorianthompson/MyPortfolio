import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">Dorian</h1>

            <ul className="footer-list">
                <li>
                    <a href="#about" className="footer-link">About</a>
                </li>

                <li>
                    <a href="#qualifications" className="footer-link">Qualifications</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer-link">Projects</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer