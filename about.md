---
layout: inner
title: About
permalink: /about/
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Section - Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            min-height: 100vh;
            padding: 2rem;
        }
        .about-content-wrap {
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 3rem;
        }
        .hero-section {
            text-align: center;
            margin-bottom: 4rem;
        }
        .hero-title {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
            animation: slideUp 0.8s ease-out;
        }
        .hero-subtitle {
            font-size: 1.3rem;
            color: #666;
            margin-bottom: 2rem;
            animation: slideUp 0.8s ease-out 0.2s both;
        }
        .project-title {
            margin-bottom: 3rem;
        }
        .project-title h2 {
            color: #2c3e50;
            margin-bottom: 1.5rem;
            position: relative;
            padding-left: 1rem;
        }
        .project-title h2::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 100%;
            background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
            border-radius: 2px;
        }
        .project-title p {
            color: #555;
            line-height: 1.7;
            margin-bottom: 1rem;
        }
        .skills-grid {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
        }
        .skill-category {
            padding: 2rem;
            border-radius: 15px;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            min-width: 200px
        }
        .skill-category:hover {
            transform: translateY(-5px);
            border-color: #ff6b9d;
            box-shadow: 0 15px 30px rgba(255, 107, 157, 0.1);
        }
        .skill-category h4 {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        .skill-tag {
            background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
            color: white;
            padding: 0.4rem 1rem;
            border-radius: 20px;
            font-weight: 500;
        }
        .experience-timeline {
            position: relative;
            padding-left: 2rem;
        }
        .experience-timeline::before {
            content: '';
            position: absolute;
            left: 1rem;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
        }
        .timeline-item {
            position: relative;
            margin-bottom: 2rem;
            padding-left: 2rem;
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -0.1rem;
            top: 0.5rem;
            width: 12px;
            height: 12px;
            background: #ff6b9d;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 2px #ff6b9d;
        }
        .timeline-company {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2c3e50;
        }
        .timeline-role {
            font-size: 1rem;
            color: #ff6b9d;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        .timeline-description {
            color: #666;
            line-height: 1.6;
        }
        .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .value-card {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
            text-align: center;
            transition: transform 0.3s ease;
        }
        .value-card:hover {
            transform: translateY(-5px);
        }
        .value-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        .value-card h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 1rem;
        }
        .value-card p {
            color: #666;
            line-height: 1.6;
        }
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body class="project-wrap">
    <div class="about-content-wrap">
        <!-- Hero Section -->
        <div class="hero-section">
            <h1 class="hero-title">About Me</h1>
            <p class="hero-subtitle">Passionate UX/UI Designer crafting user-centered digital experiences</p>
        </div>
        <!-- Introduction -->
        <div class="project-title">
            <h2>Hallo, I'm Hannah</h2>
            <p>I'm a UX/UI Designer with a passion for creating intuitive, user-centered digital experiences that solve real problems. Currently at <strong>T-Systems</strong>, I specialize in transforming complex user needs into elegant, functional design solutions.</p>
            <p>My approach combines analytical thinking with creative problem-solving, always questioning existing patterns and seeking opportunities for improvement. I believe intuitve design is build on trusting users and implementing empathy to find root causes for problems.</p>
        </div>
        <!-- Skills -->
        <div class="project-title">
            <h2>Skills & Expertise</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Design Tools</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">Figma</span>
                        <span class="skill-tag">Canva</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h4>Development</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">CSS</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">TypeScript</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h4>UX Methods</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">User Research</span>
                        <span class="skill-tag">Wireframing</span>
                        <span class="skill-tag">Prototyping</span>
                        <span class="skill-tag">Usability Testing</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h4>Collaboration</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">Design Systems</span>
                        <span class="skill-tag">Agile/Scrum</span>
                        <span class="skill-tag">Stakeholder Management</span>
                        <span class="skill-tag">Cross-functional Teams</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Experience -->
        <div class="project-title">
            <h2>Experience</h2>
                <div class="timeline-item">
                    <div class="timeline-company">T-Systems</div>
                    <div class="timeline-role">UX/UI Designer</div>
                    <div class="timeline-description">
                        Leading design initiatives for internal service platforms, focusing on navigation systems, user workflows, and design system implementation. Successfully redesigned navigation components that improved usability and aligned with corporate design guidelines.
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-company">FOM Hochschule für Oekonomie und Management</div>
                    <div class="timeline-role">Bachelor Student</div>
                    <div class="timeline-description">
                        Achieved my Bachelor's Degree in Business Informatics.                    
                        </div>
                </div>
        </div>
        <!-- Personal Touch -->
        <div class="project-title">
            <h2>Beyond Design</h2>
            <p>When I'm not designing, you can find me [add personal interests - e.g., "exploring new coffee shops, hiking local trails, or experimenting with photography"]. I believe diverse experiences fuel creative thinking and help me approach design challenges from fresh perspectives.</p>
            <p>I'm always eager to connect with fellow designers, developers, and anyone passionate about creating meaningful digital experiences. Let's build something great together!</p>
        </div>
    </div>
</body>
