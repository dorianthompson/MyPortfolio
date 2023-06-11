import React from 'react';
import './portfolio.css';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section-title">Portfolio</h2>
        <span className="section-subtitle">Recent Projects</span>

        <Projects />
    </section>
  )
}

export default Portfolio