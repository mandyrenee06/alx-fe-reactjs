function Services() {
  const services = [
    {
      title: "Technology Consulting",
      description: "Strategic IT consulting to help your business leverage technology for growth and efficiency.",
      features: ["Cloud Migration", "Digital Transformation", "IT Strategy", "System Architecture"]
    },
    {
      title: "Market Analysis",
      description: "Comprehensive market research and analysis to guide your business decisions.",
      features: ["Competitor Analysis", "Market Trends", "Customer Insights", "Growth Opportunities"]
    },
    {
      title: "Product Development",
      description: "End-to-end product development from ideation to launch and beyond.",
      features: ["UI/UX Design", "Agile Development", "Quality Assurance", "Product Scaling"]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to increase your online presence and conversions.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"]
    },
    {
      title: "Business Strategy",
      description: "Develop sustainable business models and growth strategies for long-term success.",
      features: ["Business Planning", "Financial Modeling", "Risk Assessment", "Performance Metrics"]
    },
    {
      title: "Customer Support",
      description: "24/7 customer support solutions to enhance customer satisfaction and retention.",
      features: ["Help Desk", "Live Chat", "Ticketing System", "Customer Feedback"]
    }
  ];

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
          Our Services
        </h1>
        
        <p style={{
          fontSize: '18px',
          textAlign: 'center',
          color: '#7f8c8d',
          marginBottom: '40px',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          We offer a comprehensive range of services to help your business thrive 
          in today's competitive landscape. Each service is tailored to meet your 
          specific needs and goals.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginTop: '30px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '30px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              borderTop: '4px solid #3498db'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }}>
              <h3 style={{
                color: '#2c3e50',
                marginBottom: '15px',
                fontSize: '22px'
              }}>
                {service.title}
              </h3>
              <p style={{
                color: '#7f8c8d',
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>
                {service.description}
              </p>
              <ul style={{
                paddingLeft: '20px',
                margin: '0'
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{
                    marginBottom: '8px',
                    color: '#34495e',
                    listStyleType: 'none',
                    position: 'relative',
                    paddingLeft: '20px'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: '#3498db',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
