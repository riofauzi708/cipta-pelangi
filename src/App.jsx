import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaSms } from 'react-icons/fa';
import SEO from './seo.jsx';
import './index.css';
import ProductSlider from './components/ProductSlider.jsx';
import ProjectGallery from './components/ProjectGallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQSection from './components/FaqSection.jsx'
import Kantor from './assets/img/kantor.jpg';
import Layanan from './assets/img/layanan.jpg';
import Tim from './assets/img/tim.jpg';

const App = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('page-transition-enter-active');
  }, []);

  return (
    <div className={`app ${animationClass}`}>
      <SEO
        title="PT Cipta Pelangi - Inovasi untuk Masa Depan yang Lebih Cerah"
        description="Bersama PT Cipta Pelangi, temukan kemitraan yang membawa bisnis Anda ke tingkat berikutnya."
      />
      <header className="hero">
        <div className="hero-content">
          <h1>Terobosan Baru, Masa Depan Cerah Bersama PT Cipta Pelangi</h1>
          <p>Kami bukan sekedar penyedia solusi, kami adalah mitra inovasi Anda.</p>
        </div>
        <img src={Kantor} alt="Kantor PT Cipta Pelangi" className="hero-image" />
      </header>

      <main>
        <ProductSlider />
        <section className="service-section">
          <h2>Layanan Profesional Kami</h2>
          <p>Dengan tim ahli kami, kesuksesan digital Anda adalah jaminan.</p>
          {/* Tombol dengan Ikon */}
          <div className="contact-buttons">
            <a href="https://wa.me/NOMOR_WHATSAPP" className="contact-button whatsapp-button">
              <FaWhatsapp />
            </a>
            <a href="mailto:EMAIL_ANDA" className="contact-button email-button">
              <FaEnvelope />
            </a>
            <a href="sms:NOMOR_TELEPON" className="contact-button sms-button">
              <FaSms />
            </a>
          </div>

          <img src={Layanan} alt="Layanan PT Cipta Pelangi" className="service-image" />
        </section>
        {/* ... tambahkan bagian lain sesuai kebutuhan ... */}
        <ProjectGallery />

        <Testimonials />
        <FAQSection />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Tentang Kami</h4>
            <p>PT Cipta Pelangi adalah perusahaan yang berdedikasi untuk inovasi dan kualitas dalam layanan digital.</p>
          </div>
          <div className="footer-section">
            <h4>Kontak</h4>
            <p><strong>Alamat:</strong> Jl. Pelangi No.123, Jakarta, Indonesia</p>
            <p><strong>Email:</strong> info@ciptapelangi.id</p>
            <p><strong>Telepon:</strong> (021) 555-0123</p>
          </div>
          <div className="footer-section">
            <h4>Ikuti Kami</h4>
            <div>
              {/* Ganti "#" dengan link media sosial yang sesuai */}
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Link Cepat</h4>
            <ul className="footer-links">
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Tentang</a></li>
              <li><a href="#">Layanan</a></li>
              <li><a href="#">Portofolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Kontak</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 PT Cipta Pelangi. Hak cipta dilindungi undang-undang.</p>
          <img src={Tim} alt="Tim PT Cipta Pelangi" className="team-image" />
        </div>
      </footer>


    </div>
  );
};

export default App;
