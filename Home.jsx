import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Gelibolu Çeviri Merkezi'ne Hoş Geldiniz</h1>
          <p>Türkçe-İngilizce profesyonel çeviri hizmetleri</p>
          <Link to="/kayit" className="cta-button">
            Çeviri Talebi Oluştur
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>Neden Bizi Seçmelisiniz?</h2>
        <div className="section-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="service-card">
            <h3>Uzman Çevirmenler</h3>
            <p>Alanında uzman, sertifikalı ve deneyimli çevirmenlerimiz ile yüksek kaliteli çeviri hizmeti alın.</p>
          </div>
          <div className="service-card">
            <h3>Türkçe-İngilizce Çeviri</h3>
            <p>Türkçe ve İngilizce arasında profesyonel çeviri hizmeti sunuyoruz.</p>
          </div>
          <div className="service-card">
            <h3>Hızlı ve Güvenilir</h3>
            <p>Aciliyet gereken çeviriler için hızlı teslimat ve %100 gizlilik garantisi ile güvenli hizmet.</p>
          </div>
          <div className="service-card">
            <h3>Noter Onaylı Çeviri</h3>
            <p>Resmi belgeler için noter onaylı çeviri hizmeti. Yeminli tercüman kadromuz ile resmi işlemlerinizde yanınızdayız.</p>
          </div>
          <div className="service-card">
            <h3>Tıbbi ve Hukuki Çeviri</h3>
            <p>Tıbbi raporlar, hukuki belgeler, sözleşmeler ve özel alan çevirilerinde uzman ekibimiz hizmetinizde.</p>
          </div>
          <div className="service-card">
            <h3>Uygun Fiyatlar</h3>
            <p>Rekabetçi fiyatlarımız ve esnek ödeme seçenekleri ile bütçenize uygun çeviri çözümleri sunuyoruz.</p>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <h2>Çeviri Hizmetlerimiz</h2>
        <div className="services-grid">
          <div className="service-type-card">
            <h3>Yazılı Çeviri</h3>
            <ul>
              <li>Belge çevirileri</li>
              <li>Web sitesi çevirileri</li>
              <li>E-kitap çevirileri</li>
              <li>Teknik dokümantasyon</li>
              <li>Akademik metinler</li>
            </ul>
          </div>
          <div className="service-type-card">
            <h3>Sözlü Çeviri</h3>
            <ul>
              <li>Simültane çeviri</li>
              <li>Ardıl çeviri</li>
              <li>Toplantı çevirisi</li>
              <li>Konferans çevirisi</li>
              <li>Telefon çevirisi</li>
            </ul>
          </div>
          <div className="service-type-card">
            <h3>Özel Hizmetler</h3>
            <ul>
              <li>Noter onaylı çeviri</li>
              <li>Yeminli tercüman hizmeti</li>
              <li>Tıbbi çeviri</li>
              <li>Hukuki çeviri</li>
              <li>Çeviri doğrulama</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8f9fa', marginTop: '3rem', padding: '4rem 2rem' }}>
        <h2>Bize Ulaşın</h2>
        <div className="contact-info" style={{ marginTop: '2rem' }}>
          <div className="contact-card">
            <h3>📍 Adres</h3>
            <p>
              Gelibolu Çeviri Merkezi<br />
              Gelibolu, Çanakkale<br />
              Türkiye
            </p>
          </div>

          <div className="contact-card">
            <h3>📞 Telefon</h3>
            <p>
              +90 (XXX) XXX XX XX<br />
              <strong>Çalışma Saatleri:</strong><br />
              Pazartesi - Cuma: 09:00 - 19:00<br />
              Cumartesi: 09:00 - 15:00
            </p>
          </div>

          <div className="contact-card">
            <h3>✉️ E-posta</h3>
            <p>
              info@gelibolucevirimerkezi.com<br />
              <Link to="/kayit" className="contact-link">
                Online çeviri talebi formu →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Konumumuz</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          Bizi ziyaret etmek isterseniz aşağıdaki haritadan konumumuzu bulabilirsiniz
        </p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48084.1234567890!2d26.6714!3d40.4115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzQxLjQiTiAyNsKwNDAnMTcuMCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gelibolu Çeviri Merkezi Konumu"
          ></iframe>
        </div>
      </section>

      <section className="section cta-section">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Hemen Başlayın</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
            Çeviri ihtiyacınız için bugün bizimle iletişime geçin. Uzman ekibimiz size en uygun çözümü sunmak için hazır.
          </p>
          <Link to="/kayit" className="cta-button">
            Çeviri Talebi Oluştur
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
