const Header = () => {
  return (
    <header className="site-header">
      {/* Paste the relevant nav/logo markup from legacy header.html,
          then clean it to valid JSX: class -> className, etc. */}
      {/* Example skeleton: */}
      <div className="container">
        <a href="/" className="site-logo">
          Hannah Müller
        </a>
        <nav className="site-nav">
          <a href="/">Home</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#about">About</a>
          <a href="/portfolio.pdf">Portfolio PDF</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
