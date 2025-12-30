// src/pages/Home.tsx
import React from "react";
import { posts } from "components/PortfolioItem";

const Home: React.FC = () => {
  return (
    <main className="main-content">
      {/* Hero section */}
      <section id="top" className="hero-container">
        <div className="hero-section">
          <h1 className="hero-title">UX &amp; Product Design</h1>
          <p className="hero-subtitle">
            Case studies, experiments, and hands-on work in navigation, design
            systems, and internal tools.
          </p>
        </div>

        <div className="hero-content">
          <p>
            This portfolio showcases selected projects that focus on flows,
            interaction design, and effective collaboration with development
            teams.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              View case studies
            </a>
            <a
              href="/portfolio.pdf"
              className="btn btn-default"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download portfolio PDF
            </a>
          </div>
        </div>
      </section>

      {/* Posts section */}
      <section id="portfolio">
        <header className="section-title">
          <h2>Selected projects</h2>
        </header>
        <p className="section-subtitle">
          Deep dives into navigation systems, internal platforms, and UX
          improvements shipped to production.
        </p>

        <div className="content-wrap">
          <div className="content">
            {posts.map(({ Component, meta }) => (
              <div className="post-row" key={meta.slug}>
                <Component />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
