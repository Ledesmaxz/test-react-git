import '../styles/Footer.css'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import tiktok from '../assets/Tiktok.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        
      </div>
      <div className="footer__links">
        <a href="/quienes-somos">Quiénes Somos</a>
        <a href="/politicas-de-tratamiento">Políticas de Tratamiento de Datos</a>
      </div>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt='facebook'/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt='instagram'/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
        <img src={tiktok} alt='tiktok'/>
        </a>
      </div>
    </footer>
  );
};


