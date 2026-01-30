function About() {
  return (
    <div style={{
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '36px',
          color: '#2c3e50',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          About Us
        </h1>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            maxWidth: '800px',
            width: '100%'
          }}>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#34495e',
              marginBottom: '20px'
            }}>
              Our company has been providing top-notch services since 1990. 
              We specialize in various fields including technology, marketing, 
              and consultancy. With a team of over 500 experts, we've successfully 
              delivered more than 10,000 projects to satisfied clients across the globe.
            </p>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#34495e'
            }}>
              Our mission is to empower businesses with innovative solutions that 
              drive growth and efficiency. We believe in building lasting 
              relationships with our clients through transparency, reliability, 
              and exceptional service.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              minWidth: '200px',
              boxShadow: '0 3px 5px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ fontSize: '36px', margin: '0' }}>30+</h3>
              <p>Years Experience</p>
            </div>
            <div style={{
              backgroundColor: '#2ecc71',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              minWidth: '200px',
              boxShadow: '0 3px 5px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ fontSize: '36px', margin: '0' }}>500+</h3>
              <p>Team Members</p>
            </div>
            <div style={{
              backgroundColor: '#9b59b6',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              minWidth: '200px',
              boxShadow: '0 3px 5px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ fontSize: '36px', margin: '0' }}>10k+</h3>
              <p>Projects Completed</p>
            </div>
            <div style={{
              backgroundColor: '#e74c3c',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              minWidth: '200px',
              boxShadow: '0 3px 5px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ fontSize: '36px', margin: '0' }}>50+</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
