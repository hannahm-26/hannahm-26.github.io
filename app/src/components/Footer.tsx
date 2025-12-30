const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Paste footer content from legacy layout/footer,
          again fixing class -> className etc. */}
      <p>© {new Date().getFullYear()} Hannah Müller. All rights reserved.</p>
      <a className="section-jump" href="#top">
        Back to top ↑
      </a>
    </footer>
  );
};

export default Footer;
