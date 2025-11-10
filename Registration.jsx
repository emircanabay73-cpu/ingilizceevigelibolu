import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    sourceLanguage: '',
    targetLanguage: '',
    documentType: '',
    urgency: 'normal',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Çeviri talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          sourceLanguage: '',
          targetLanguage: '',
          documentType: '',
          urgency: 'normal',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Bir hata oluştu. Lütfen tekrar deneyin.' });
    } finally {
      setLoading(false);
    }
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30'
  ];

  const languages = ['Türkçe', 'İngilizce'];
  const documentTypes = ['Belge Çevirisi', 'Web Sitesi Çevirisi', 'Sözlü Çeviri', 'Noter Onaylı Çeviri', 'Tıbbi Çeviri', 'Hukuki Çeviri', 'Teknik Çeviri', 'Diğer'];

  return (
    <div className="section">
      <h2>Çeviri Talebi Formu</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
        Çeviri hizmeti almak için lütfen formu doldurun. Size en uygun tarih ve saatte görüşme yapmak için 
        talebinizi değerlendireceğiz ve size dönüş yapacağız.
      </p>
      
      <form className="form-container" onSubmit={handleSubmit}>
        {status.message && (
          <div className={`alert alert-${status.type === 'success' ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="name">Ad Soyad *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Adınızı ve soyadınızı giriniz"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-posta *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ornek@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="05XX XXX XX XX"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sourceLanguage">Kaynak Dil *</label>
            <select
              id="sourceLanguage"
              name="sourceLanguage"
              value={formData.sourceLanguage}
              onChange={handleChange}
              required
            >
              <option value="">Dil seçiniz</option>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="targetLanguage">Hedef Dil *</label>
            <select
              id="targetLanguage"
              name="targetLanguage"
              value={formData.targetLanguage}
              onChange={handleChange}
              required
            >
              <option value="">Dil seçiniz</option>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="documentType">Belge Türü *</label>
            <select
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              required
            >
              <option value="">Belge türü seçiniz</option>
              {documentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="urgency">Aciliyet Durumu *</label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              required
            >
              <option value="normal">Normal</option>
              <option value="urgent">Acil (24 saat)</option>
              <option value="very-urgent">Çok Acil (12 saat)</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="preferredDate">Tercih Edilen Tarih *</label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="preferredTime">Tercih Edilen Saat *</label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          >
            <option value="">Saat seçiniz</option>
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mesajınız (Opsiyonel)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Çeviri hakkında ek bilgi vermek isterseniz buraya yazabilirsiniz (belge sayısı, özel istekler vb.)..."
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Gönderiliyor...' : 'Çeviri Talebi Gönder'}
        </button>
      </form>
    </div>
  );
}

export default Registration;
