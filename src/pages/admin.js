import { useState } from 'react';
import Head from 'next/head';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState('maternity');

  const correctPassword = 'OrPaull2026';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('סיסמה שגויה');
    }
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('gallery', selectedGallery);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const reader = new FileReader();
          reader.onload = () => {
            setUploadedFiles(prev => [...prev, {
              name: file.name,
              data: reader.result,
              gallery: selectedGallery
            }]);
          };
          reader.readAsDataURL(file);
          alert('התמונה הועלתה בהצלחה!');
        } else {
          alert('שגיאה בהעלאת התמונה');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('שגיאה בהעלאת התמונה');
      }
    }
  };

  const galleries = [
    { id: 'maternity', name: 'צילומי הריון' },
    { id: 'maternity-outdoor', name: 'צילומי הריון בחוץ' },
    { id: 'newborn', name: 'צילומי ניובורן' }
  ];

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Admin - Or Paull Photography</title>
        </Head>
        <div style={{
          minHeight: '100vh',
          background: '#FAFAF8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            padding: '48px',
            borderRadius: '8px',
            border: '1px solid #D4C4B9',
            maxWidth: '400px',
            width: '100%'
          }}>
            <h1 style={{
              fontSize: '28px',
              marginBottom: '32px',
              textAlign: 'center',
              color: '#3E3B39',
              fontFamily: "'Segoe UI', sans-serif"
            }}>
              Admin Panel
            </h1>

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#3E3B39'
                }}>
                  סיסמה
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="הזן סיסמה"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D4C4B9',
                    borderRadius: '4px',
                    fontSize: '16px',
                    fontFamily: "'Segoe UI', sans-serif",
                    direction: 'rtl',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  background: '#5C4A42',
                  color: '#FAFAF8',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                כניסה
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin - Or Paull Photography</title>
      </Head>
      <div style={{
        minHeight: '100vh',
        background: '#FAFAF8',
        padding: '48px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '48px'
          }}>
            <h1 style={{
              fontSize: '32px',
              color: '#3E3B39',
              fontFamily: "'Segoe UI', sans-serif",
              margin: 0
            }}>
              Admin Panel
            </h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              style={{
                padding: '8px 16px',
                background: '#D4C4B9',
                color: '#5C4A42',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Logout
            </button>
          </div>

          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '8px',
            border: '1px solid #D4C4B9',
            marginBottom: '32px'
          }}>
            <h2 style={{
              fontSize: '24px',
              marginBottom: '24px',
              color: '#3E3B39',
              fontFamily: "'Segoe UI', sans-serif"
            }}>
              העלאת תמונות
            </h2>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '12px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#3E3B39',
                textAlign: 'right',
                direction: 'rtl'
              }}>
                בחר גלריה:
              </label>
              <select
                value={selectedGallery}
                onChange={(e) => setSelectedGallery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #D4C4B9',
                  borderRadius: '4px',
                  fontSize: '16px',
                  fontFamily: "'Segoe UI', sans-serif",
                  direction: 'rtl',
                  boxSizing: 'border-box'
                }}
              >
                {galleries.map(gallery => (
                  <option key={gallery.id} value={gallery.id}>
                    {gallery.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={{
              border: '2px dashed #D4C4B9',
              borderRadius: '8px',
              padding: '32px',
              textAlign: 'center',
              cursor: 'pointer',
              background: '#F9F7F5'
            }}>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                style={{
                  display: 'none',
                  cursor: 'pointer'
                }}
                id="file-input"
              />
              <label htmlFor="file-input" style={{ cursor: 'pointer', display: 'block' }}>
                <p style={{
                  fontSize: '16px',
                  color: '#5C4A42',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  גרור תמונות כאן או לחץ להעלאה
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#A09A94',
                  margin: 0
                }}>
                  תמך בפורמטים: JPG, PNG, WebP
                </p>
              </label>
            </div>

            {uploadedFiles.length > 0 && (
              <div style={{ marginTop: '24px' }}>
                <h3 style={{
                  fontSize: '18px',
                  marginBottom: '16px',
                  color: '#3E3B39',
                  textAlign: 'right',
                  direction: 'rtl'
                }}>
                  תמונות שהועלו ({uploadedFiles.length}):
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                  gap: '16px'
                }}>
                  {uploadedFiles.map((file, idx) => (
                    <div key={idx} style={{
                      border: '1px solid #D4C4B9',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <img
                        src={file.data}
                        alt={file.name}
                        style={{
                          width: '100%',
                          height: '150px',
                          objectFit: 'cover'
                        }}
                      />
                      <p style={{
                        fontSize: '12px',
                        padding: '8px',
                        margin: 0,
                        color: '#A09A94',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {file.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{
            background: 'white',
            padding: '32px',
            borderRadius: '8px',
            border: '1px solid #D4C4B9'
          }}>
            <h2 style={{
              fontSize: '24px',
              marginBottom: '24px',
              color: '#3E3B39',
              fontFamily: "'Segoe UI', sans-serif"
            }}>
              הנחיות
            </h2>
            <div style={{
              fontSize: '14px',
              color: '#3E3B39',
              lineHeight: '1.8',
              direction: 'rtl',
              textAlign: 'right'
            }}>
              <p><strong>גודל תמונה מומלץ:</strong> 1200x800px או גדול יותר</p>
              <p><strong>פורמט:</strong> JPG או PNG (איכות גבוהה)</p>
              <p><strong>לכל גלריה:</strong> לפחות 10 תמונות</p>
              <p><strong>הוראות:</strong></p>
              <ol>
                <li>בחר גלריה מהתפריט</li>
                <li>בחר את התמונות שלך</li>
                <li>תמונות יופיעו באתר כשיושמרו</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
