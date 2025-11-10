import React from 'react';

function About() {
  return (
    <div className="section">
      <h2>Hakkımızda</h2>
      <div className="section-content">
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Gelibolu Çeviri Merkezi olarak, yıllardır bölgemizde ve ülke genelinde kaliteli Türkçe-İngilizce çeviri hizmetleri sunmaktayız. 
          Misyonumuz, müşterilerimize en yüksek kalitede çeviri hizmeti sunarak Türkçe ve İngilizce arasında güvenilir bir köprü olmaktır.
        </p>
        
        <h3>Vizyonumuz</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Türkçe-İngilizce çeviri alanında önde gelen çeviri merkezlerinden biri olarak, teknolojik yenilikleri takip eden, 
          uzman kadromuz ve müşteri memnuniyeti odaklı hizmet anlayışımızla sektörde lider konumda yer almak. 
          Türkçe ve İngilizce arasında en kaliteli çeviri hizmetini sunarak müşterilerimizin başarısına katkıda bulunmak.
        </p>

        <h3>Misyonumuz</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Deneyimli çevirmen kadromuz, güncel çeviri teknolojileri ve bireysel yaklaşımımız ile 
          müşterilerimizin çeviri ihtiyaçlarını en iyi şekilde karşılamak. Her projeye özel ilgi göstererek, 
          zamanında teslimat ve yüksek kalite standartlarını korumak. Gizlilik ve güvenilirlik ilkelerimizle 
          müşterilerimizin memnuniyetini en üst düzeyde tutmak.
        </p>

        <h3>Hizmetlerimiz</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="service-card">
            <h4>Yazılı Çeviri</h4>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '2' }}>
              <li>Belge çevirileri (pasaport, diploma, sertifika)</li>
              <li>Web sitesi ve dijital içerik çevirileri</li>
              <li>Teknik dokümantasyon çevirileri</li>
              <li>Akademik metin çevirileri</li>
              <li>Edebi eser çevirileri</li>
              <li>İş dünyası belgeleri (sözleşmeler, raporlar)</li>
            </ul>
          </div>

          <div className="service-card">
            <h4>Sözlü Çeviri</h4>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '2' }}>
              <li>Simültane çeviri (eş zamanlı)</li>
              <li>Ardıl çeviri (sıralı)</li>
              <li>Toplantı ve konferans çevirisi</li>
              <li>Telefon çevirisi</li>
              <li>Video konferans çevirisi</li>
            </ul>
          </div>

          <div className="service-card">
            <h4>Özel Çeviri Hizmetleri</h4>
            <ul style={{ marginLeft: '1.5rem', lineHeight: '2' }}>
              <li>Noter onaylı çeviri</li>
              <li>Yeminli tercüman hizmeti</li>
              <li>Tıbbi çeviri (raporlar, reçeteler)</li>
              <li>Hukuki çeviri (davalar, sözleşmeler)</li>
              <li>Çeviri doğrulama ve düzeltme</li>
              <li>Yerelleştirme hizmetleri</li>
            </ul>
          </div>
        </div>

        <h3 style={{ marginTop: '3rem' }}>Çalışma Prensibimiz</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Her çeviri projesini özenle ele alıyor, müşterilerimizin ihtiyaçlarını tam olarak anlayarak 
          en uygun çözümü sunuyoruz. Çeviri sürecinde kalite kontrol mekanizmalarımız ile hata payını 
          minimuma indiriyor, zamanında teslimat garantisi veriyoruz. Gizlilik anlaşmalarımız ile 
          müşterilerimizin bilgilerinin güvenliğini en üst düzeyde koruyoruz.
        </p>
      </div>
    </div>
  );
}

export default About;
