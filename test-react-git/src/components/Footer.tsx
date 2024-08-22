import '../styles/Footer.css';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import tiktok from '../assets/Tiktok.png';
import Location from '../assets/location.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__location">
        <h2>Contacto</h2>
        <img src={Location} alt="Location" />
        <p className="footer__phone">Cra 10A # 19- 22 </p> 
        <p className="footer__Horario">+57 222 222 222</p>
        <p className="footer__email">petshot@gmail.com</p> 
      </div>
      <div className="footer__links">
        <a href="/quienes-somos">Quiénes Somos</a>
        <a href="/politicas-de-tratamiento">Políticas de Tratamiento de Datos</a>
      </div>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={tiktok} alt="tiktok" />
        </a>
      </div>
    </footer>
  );
}
