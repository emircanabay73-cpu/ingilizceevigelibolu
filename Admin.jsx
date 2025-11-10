import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchMeetings();
    // Refresh every 30 seconds
    const interval = setInterval(fetchMeetings, 30000);
    return () => clearInterval(interval);
  }, [navigate]);

  const fetchMeetings = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/meetings', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }

      if (response.ok) {
        const data = await response.json();
        setMeetings(data);
      } else {
        setError('Talepler yüklenirken bir hata oluştu');
      }
    } catch (err) {
      setError('Sunucuya bağlanılamadı');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/meetings/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }

      if (response.ok) {
        await fetchMeetings();
        if (newStatus === 'approved') {
          alert('Talep onaylandı ve müşteriye onay emaili gönderildi!');
        } else if (newStatus === 'rejected') {
          alert('Talep reddedildi ve müşteriye bilgilendirme emaili gönderildi!');
        } else {
          alert('Talep durumu güncellendi!');
        }
      } else {
        alert('İşlem sırasında bir hata oluştu');
      }
    } catch (err) {
      alert('Sunucuya bağlanılamadı');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const getStatusLabel = (status) => {
    const labels = {
      pending: 'Beklemede',
      approved: 'Onaylandı',
      rejected: 'Reddedildi'
    };
    return labels[status] || status;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="admin-container">
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p>Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Admin Paneli - Çeviri Talepleri</h2>
        <button onClick={handleLogout} className="admin-button" style={{ background: '#d4a574', color: 'white' }}>
          Çıkış Yap
        </button>
      </div>

      {error && (
        <div className="alert alert-error" style={{ marginBottom: '2rem' }}>
          {error}
        </div>
      )}

      {meetings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '10px' }}>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Henüz çeviri talebi bulunmamaktadır.</p>
        </div>
      ) : (
        <div>
          {meetings.map(meeting => (
            <div key={meeting.id} className="meeting-card">
              <h3>{meeting.name}</h3>
              <div className="meeting-info">
                <strong>E-posta:</strong> {meeting.email}
              </div>
              <div className="meeting-info">
                <strong>Telefon:</strong> {meeting.phone}
              </div>
              <div className="meeting-info">
                <strong>Tercih Edilen Tarih:</strong> {formatDate(meeting.preferredDate)}
              </div>
              <div className="meeting-info">
                <strong>Tercih Edilen Saat:</strong> {meeting.preferredTime}
              </div>
              {meeting.sourceLanguage && (
                <div className="meeting-info">
                  <strong>Kaynak Dil:</strong> {meeting.sourceLanguage}
                </div>
              )}
              {meeting.targetLanguage && (
                <div className="meeting-info">
                  <strong>Hedef Dil:</strong> {meeting.targetLanguage}
                </div>
              )}
              {meeting.documentType && (
                <div className="meeting-info">
                  <strong>Belge Türü:</strong> {meeting.documentType}
                </div>
              )}
              {meeting.urgency && (
                <div className="meeting-info">
                  <strong>Aciliyet:</strong> {
                    meeting.urgency === 'urgent' ? 'Acil (24 saat)' : 
                    meeting.urgency === 'very-urgent' ? 'Çok Acil (12 saat)' : 
                    'Normal'
                  }
                </div>
              )}
              {meeting.message && (
                <div className="meeting-info">
                  <strong>Mesaj:</strong> {meeting.message}
                </div>
              )}
              <div className="meeting-info">
                <strong>Talep Tarihi:</strong> {formatDate(meeting.createdAt)}
              </div>
              <span className={`meeting-status status-${meeting.status}`}>
                {getStatusLabel(meeting.status)}
              </span>

              {meeting.status === 'pending' && (
                <div className="admin-actions">
                  <button
                    className="admin-button btn-approve"
                    onClick={() => handleStatusUpdate(meeting.id, 'approved')}
                  >
                    Onayla
                  </button>
                  <button
                    className="admin-button btn-reject"
                    onClick={() => handleStatusUpdate(meeting.id, 'rejected')}
                  >
                    Reddet
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;

