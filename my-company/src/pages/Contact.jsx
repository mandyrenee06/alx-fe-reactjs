import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        message: 'Please fill in all fields'
      });
      return;
    }

    if (!formData.email.includes('@')) {
      setFormStatus({
        submitted: false,
        message: 'Please enter a valid email address'
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      submitted: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setFormStatus({
        submitted: false,
        message: ''
      });
    }, 3000);
  };

  return (
    <div style={{
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
        <div>
          <h1 style={{
            fontSize: '36px',
            color: '#2c3e50',
            marginBottom: '10px',
            textAlign: 'center'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '18px',
            textAlign: 'center',
            color: '#7f8c8d',
            marginBottom: '30px'
          }}>
            Have questions? We'd love to hear from you. Send us a message and 
            we'll respond as soon as possible.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              height: '100%'
            }}>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '20px'
              }}>
                Contact Information
              </h3>
              
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{
                  color: '#3498db',
                  marginBottom: '8px'
                }}>Address</h4>
                <p style={{
                  color: '#34495e',
                  margin: '0'
                }}>
                  123 Business Street<br />
                  Tech City, TC 10001<br />
                  United States
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{
                  color: '#3498db',
                  marginBottom: '8px'
                }}>Email</h4>
                <p style={{
                  color: '#34495e',
                  margin: '0'
                }}>
                  info@company.com<br />
                  support@company.com
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{
                  color: '#3498db',
                  marginBottom: '8px'
                }}>Phone</h4>
                <p style={{
                  color: '#34495e',
                  margin: '0'
                }}>
                  +1 (555) 123-4567<br />
                  +1 (555) 987-6543
                </p>
              </div>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{
                  color: '#3498db',
                  marginBottom: '8px'
                }}>Business Hours</h4>
                <p style={{
                  color: '#34495e',
                  margin: '0'
                }}>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '20px'
              }}>
                Send us a Message
              </h3>
              
              {formStatus.message && (
                <div style={{
                  backgroundColor: formStatus.submitted ? '#d4edda' : '#f8d7da',
                  color: formStatus.submitted ? '#155724' : '#721c24',
                  padding: '12px 20px',
                  borderRadius: '5px',
                  marginBottom: '20px',
                  border: `1px solid ${formStatus.submitted ? '#c3e6cb' : '#f5c6cb'}`
                }}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#34495e',
                    fontWeight: 'bold'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#34495e',
                    fontWeight: 'bold'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px',
                      boxSizing: 'border-box',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#34495e',
                    fontWeight: 'bold'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '16px',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '12px 30px',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s, transform 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2980b9';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#3498db';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;