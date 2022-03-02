import { Link } from 'react-router-dom';
import logo from '../../Assets/Logo.svg';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="Uniffed Blog" />
      </Link>
      <p>Unifeed &copy; 2017 Copyrights Not Reserved</p>
    </footer>
  );
}
export default Footer;
