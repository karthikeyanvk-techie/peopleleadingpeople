import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import './TwoColumnLayout.css'; // Import your custom CSS for styling

interface TwoColumnLayoutProps {
  // Define any props you might pass to the TwoColumnLayout component
}

const aspirations = [
  {
    title: 'Directorial Growth',
    description: 'Aim to advance into a director role overseeing multiple chapters, bringing leadership and strategic direction to the organization.',
    icon: '🧭', // You can replace this with an appropriate icon or image
  },
  {
    title: 'Farm Expansion',
    description: 'Strive to expand my farm by an additional two acres, contributing to agricultural sustainability and growth.',
    icon: '🚜', // You can replace this with an appropriate icon or image
  },
];

const vision = [
  {
    title: 'Transformational Leadership',
    description: 'Envisioning to become a transformative leader known for inspiring positive change and fostering growth among team members.',
    icon: '🌟', // You can replace this with an appropriate icon or image
  },
  {
    title: 'Tech Expertise and Innovation',
    description: 'Aspiring to excel in software architecture, lead a team of experts, and make a significant impact in the tech industry.',
    icon: '💡', // You can replace this with an appropriate icon or image
  },
  {
    title: 'Creative Contributions',
    description: 'Want to publish an open-source software solution and a captivating book/novel, establishing myself as an accomplished creator.',
    icon: '✍️', // You can replace this with an appropriate icon or image
  },
];

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = () => {
  return (
    <Container>
      <Typography variant="h4" className="section-header">
        Aspirations and Vision
      </Typography>
      <Grid container spacing={3} className="two-column-container">
        <Grid item xs={12} md={6}>
          <Box className="column-content">
            <Typography variant="h5" className="column-title">
              Aspirations
            </Typography>
            {aspirations.map((item, index) => (
              <Paper elevation={3} className="column-card" key={index}>
                <div className="column-icon">{item.icon}</div>
                <Typography variant="h6" className="card-title">
                  {item.title}
                </Typography>
                <Typography variant="body1" className="card-description">
                  {item.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="column-content">
            <Typography variant="h5" className="column-title">
              Vision
            </Typography>
            {vision.map((item, index) => (
              <Paper elevation={3} className="column-card" key={index}>
                <div className="column-icon">{item.icon}</div>
                <Typography variant="h6" className="card-title">
                  {item.title}
                </Typography>
                <Typography variant="body1" className="card-description">
                  {item.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ flexGrow: 1, fontStyle: 'oblique', fontWeight: 'bold', textAlign: 'left', color: '#ff8e53' }}>
          My Vision Statement
      </Typography>
      <Paper elevation={2} className="column-card">
        <Typography variant="h6" className="card-description">
                A visionary leader known for driving transformative change and empowering others to reach their full potential. I aim to excel in software architecture, manage a team of leaders, elevate deserving individuals in their career paths, and make a meaningful impact. Additionally, I strive to publish an open-source software solution and a book/novel, while establishing myself as a recognized tech expert in full stack development within the company.
        </Typography>
      </Paper>
      <br />
      <br />
    </Container>
  );
};

export default TwoColumnLayout;
