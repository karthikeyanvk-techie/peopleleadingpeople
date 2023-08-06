import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import './CarouselSection.css'; // Import your custom CSS for styling

interface CarouselSectionProps {
  // Define any props you might pass to the CarouselSection component
}

const points = [
  {
    headerLeft: 'Crafting Excellence',
    content:
      'As a Chapter Lead, my role centers around fostering a culture of continuous skill development and excellence within the organization. I am entrusted with steering a group of talented individuals who share the same functional or technical expertise.',
  },
  {
    headerLeft: 'Nurturing Talent',
    content:
      'I act as a mentor and coach, supporting my chapter members\' growth by providing guidance, feedback, and resources. Through coaching, mentoring, facilitation, and teaching, I empower them to reach their full potential.',
  },
  {
    headerLeft: 'Capability Building',
    content:
      'My responsibility extends to building the right capabilities within the chapter. I work towards equipping our members with the necessary skills, tools, and standard approaches to consistently deliver high-quality work.',
  },
  {
    headerLeft: 'Agile Mindset Advocacy',
    content:
      'I champion and influence a culture of growth mindset and agility. This mindset encourages adaptability, innovation, and a willingness to embrace challenges.',
  },
  {
    headerLeft: 'Relationship Management',
    content:
      'Given that the chapter serves multiple streams, I excel in building strong relationships across the organization. Effective collaboration and communication are key to our success.',
  },
  {
    headerLeft: 'Servant Leadership',
    content:
      'My role combines servant leadership with hands-on execution. I guide and enable, rather than dictate, ensuring a collaborative and empowered environment.',
  },
];

const CarouselSection: React.FC<CarouselSectionProps> = () => {
    return (
      <Container>
        <Typography variant="h6" sx={{ flexGrow: 1, fontStyle: 'oblique', fontWeight: 'bold', textAlign: 'center' }}>
          What's my current role?
        </Typography>
        <Typography variant="h4" sx={{ flexGrow: 1, fontStyle: 'oblique', fontWeight: 'bold', textAlign: 'center', color: '#ff8e53' }}>
           Chapter Lead
        </Typography>
        <Carousel autoPlay={true} interval={5000} animation="slide">
          {points.map((point, index) => (
            <div key={index} className="carousel-item">
              <Box className="carousel-content">
                {point.headerLeft && (
                  <Typography variant="h5" align="center" className="carousel-header-left">
                    {point.headerLeft}
                  </Typography>
                )}
                <Typography variant="body1" align="left" className="carousel-content-text">
                  {point.content}
                </Typography>
              </Box>
            </div>
          ))}
        </Carousel>
        <Typography variant="h6" align="center" className="quote">
          <strong>"Great leadership is not about wielding power; it's about empowering others to shine."</strong>
        </Typography>
      </Container>
    );
  };

export default CarouselSection;
