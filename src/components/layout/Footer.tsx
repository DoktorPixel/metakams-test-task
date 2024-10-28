import './Header.css';
const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">
        © {year} BestGadgetStore. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
