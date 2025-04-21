import React from 'react';
import './FooterMain.css';

function Footer() {
  return (
    <footer>
      <div class="media-icons-container">
            <a href="#" class="instagram">
                <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#" class="xtwitter">
                <i class="fa-brands fa-square-x-twitter"></i>
            </a>
            <a href="#" class="facebook">
                <i class="fa-brands fa-square-facebook"></i>
            </a>
        </div>
        <p>© 2025 Banco Universitario. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;