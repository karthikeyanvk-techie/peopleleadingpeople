import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import './GridSection.css'; // Import your custom CSS for styling

interface GridSectionProps {
  // Define any props you might pass to the GridSection component
}

const professionalAchievements = [
  {
    header: 'Led the successful launch of 5 products into production',
    content:
      'Transformed a single developer team into a robust unit of 21 members proficiently managing these products.',
  },
  {
    header: 'Spearheaded the development of a product now in use across 15 countries',
    content:
      'Used by employees of major brands like Walmart, Flipkart, and PhonePe. The product\'s launch was honored by the CEO of Walmart alongside 5 other applications.',
  },
  {
    header: 'Elevated a 4-member team to a 25-strong unit within a year',
    content:
      'Facilitated skill transformation of 10 team members from UI or backend developers to versatile full-stack developers.',
  },
];

const personalAchievements = [
  {
    header: 'Acquired and expanded a 3.5-acre farm two years ago',
    content:
      'Expanded it further with 2.5 acres this year. Diversified cultivation including onion, groundnut, papaya, tomato, chillies, and coconut, showcasing commitment to sustainable farming.',
  },
  {
    header: 'Embraced the journey of parenthood with my wife',
    content:
      'Welcomed our daughter into the world in January this year, marking a joyous and momentous personal milestone.',
  },
];

const GridSection: React.FC<GridSectionProps> = () => {
  return (
    <Container>
      <Typography variant="h4" className="section-header">
        Professional & Personal Achievements
      </Typography>
      <br />
      <Grid container spacing={3} className="grid-container">
        {professionalAchievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} className="grid-paper">
              <Typography variant="h6" className="grid-header" style={{ color: 'rgb(90, 200, 90)', fontWeight: 'bolder' }}>
                {achievement.header}
              </Typography>
              <Typography variant="body1" className="grid-content">
                {achievement.content}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} className="grid-container" style={{ justifyContent: 'center' }}>
        {personalAchievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} alignItems='center'>
            <Paper elevation={3} className="grid-paper">
              <Typography variant="h6" className="grid-header" style={{ color: 'rgb(90, 200, 90)', fontWeight: 'bolder' }}>
                {achievement.header}
              </Typography>
              <Typography variant="body1" className="grid-content">
                {achievement.content}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GridSection;
