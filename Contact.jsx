import React from 'react';

function Contact() {
  return (
    <div className="section">
      <h2>İletişim ve Konum</h2>
      
      <div className="contact-info">
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
            Çalışma Saatleri:<br />
            Pazartesi - Cuma: 09:00 - 19:00<br />
            Cumartesi: 09:00 - 15:00
          </p>
        </div>

        <div className="contact-card">
          <h3>✉️ E-posta</h3>
          <p>
            info@gelibolucevirimerkezi.com<br />
            Her zaman iletişime geçebilirsiniz
          </p>
        </div>
      </div>

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

      <div style={{ marginTop: '3rem', textAlign: 'center', color: '#666' }}>
        <p style={{ fontSize: '1.1rem' }}>
          Bize ulaşmak için yukarıdaki bilgileri kullanabilir veya 
          <a href="/kayit" style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>
            {' '}Çeviri Talebi
          </a>
          {' '}sayfasından online olarak talebinizi oluşturabilirsiniz.
        </p>
      </div>
    </div>
  );
}

export default Contact;
