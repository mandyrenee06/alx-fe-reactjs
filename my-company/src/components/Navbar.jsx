import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
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
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>
            Company
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link 
            to="/" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            About
          </Link>
          <Link 
            to="/services" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
