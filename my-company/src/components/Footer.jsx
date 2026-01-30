function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '40px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '30px'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#3498db',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '20px'
              }}>
                C
              </div>
              <span style={{
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                Company
              </span>
            </div>
            <p style={{
              color: '#bdc3c7',
              lineHeight: '1.6'
            }}>
              Delivering excellence since 1990. We transform businesses with innovative solutions and unparalleled expertise.
            </p>
          </div>

          <div>
            <h4 style={{
              marginBottom: '20px',
              fontSize: '18px',
              color: '#3498db'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="/" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3498db'}
                onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}>
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/about" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3498db'}
                onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}>
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/services" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3498db'}
                onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}>
                  Services
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="/contact" style={{
                  color: '#bdc3c7',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#3498db'}
                onMouseLeave={(e) => e.target.style.color = '#bdc3c7'}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              marginBottom: '20px',
              fontSize: '18px',
              color: '#3498db'
            }}>
              Our Services
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '10px', color: '#bdc3c7' }}>
                Technology Consulting
              </li>
              <li style={{ marginBottom: '10px', color: '#bdc3c7' }}>
                Market Analysis
              </li>
              <li style={{ marginBottom: '10px', color: '#bdc3c7' }}>
                Product Development
              </li>
              <li style={{ marginBottom: '10px', color: '#bdc3c7' }}>
                Digital Marketing
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              marginBottom: '20px',
              fontSize: '18px',
              color: '#3498db'
            }}>
              Contact Info
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              color: '#bdc3c7'
            }}>
              <li style={{ marginBottom: '10px' }}>
                123 Business Street, Tech City
              </li>
              <li style={{ marginBottom: '10px' }}>
                info@company.com
              </li>
              <li style={{ marginBottom: '10px' }}>
                +1 (555) 123-4567
              </li>
              <li style={{ marginBottom: '10px' }}>
                Mon-Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #34495e',
          paddingTop: '20px',
          textAlign: 'center',
          color: '#95a5a6',
          fontSize: '14px'
        }}>
          <p style={{ margin: '0' }}>
            &copy; {new Date().getFullYear()} Company. All rights reserved.
          </p>
          <p style={{ margin: '10px 0 0 0' }}>
            Designed with React ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;