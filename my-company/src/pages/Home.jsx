function Home() {
  return (
    <div style={{
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: 'calc(100vh - 200px)',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Welcome to Our Company
        </h1>
        <p style={{
          fontSize: '20px',
          marginBottom: '30px',
          lineHeight: '1.6',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          We are dedicated to delivering excellence in all our services. 
          With over 30 years of experience, we've been transforming businesses 
          and creating value for our clients worldwide.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '40px',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px',
            width: '250px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ marginBottom: '10px' }}>Innovation</h3>
            <p>Cutting-edge solutions for modern businesses</p>
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px',
            width: '250px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ marginBottom: '10px' }}>Quality</h3>
            <p>Uncompromising standards in every project</p>
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '20px',
            borderRadius: '10px',
            width: '250px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ marginBottom: '10px' }}>Support</h3>
            <p>24/7 customer support and maintenance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
