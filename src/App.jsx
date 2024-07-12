import React, { useState, useEffect } from 'react';
import SEO from './seo.jsx';
import './index.css';
import ArticleList from './components/ArticleList.jsx';
import ProductSlider from './components/ProductSlider.jsx';
import ProjectGallery from './components/ProjectGallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQSection from './components/FaqSection.jsx';
import Kantor from './assets/img/kantor.jpg';
import Tim from './assets/img/tim.jpg';
import ServiceSection from './components/ServiceSection.jsx';
import Navbar from './components/Navbar.jsx';

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
        keywords="inovasi digital, solusi bisnis, PT Cipta Pelangi, layanan digital, masa depan cerah"
        url="https://www.ciptapelangi.id"
        image={Kantor}
      />
      <Navbar /> {/* Add the Navbar component */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="hero">
    <div className="hero-content">
      <h1>Terobosan Baru, Masa Depan Cerah Bersama PT Cipta Pelangi</h1>
      <p>Kami bukan sekedar penyedia solusi, kami adalah mitra inovasi Anda.</p>
    </div>
    <img src={Kantor} alt="Kantor PT Cipta Pelangi" className="hero-image" loading="lazy" />
  </header>
);

const Main = () => (
  <main>
    <ArticleList />
    <ProductSlider />
    <ServiceSection />
    <ProjectGallery />
    <Testimonials />
    <FAQSection />
  </main>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <FooterSection title="Tentang Kami">
        <p>PT Cipta Pelangi adalah perusahaan yang berdedikasi untuk inovasi dan kualitas dalam layanan digital.</p>
      </FooterSection>
      <FooterSection title="Kontak">
        <p><strong>Alamat:</strong> Jl. Pelangi No.123, Jakarta, Indonesia</p>
        <p><strong>Email:</strong> info@ciptapelangi.id</p>
        <p><strong>Telepon:</strong> (021) 555-0123</p>
      </FooterSection>
      <FooterSection title="Ikuti Kami">
        <div>
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
        </div>
      </FooterSection>
      <FooterSection title="Link Cepat">
        <ul className="footer-links">
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Tentang</a></li>
          <li><a href="#">Layanan</a></li>
          <li><a href="#">Portofolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </FooterSection>
    </div>
    <div className="footer-bottom">
      <p>© 2024 PT Cipta Pelangi. Hak cipta dilindungi undang-undang.</p>
      <img src={Tim} alt="Tim PT Cipta Pelangi" className="team-image" loading="lazy" />
    </div>
  </footer>
);

const FooterSection = ({ title, children }) => (
  <div className="footer-section">
    <h4>{title}</h4>
    {children}
  </div>
);

export default App;
