import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import './FlexBoxSection.css'; // Import your custom CSS for styling

interface FlexBoxSectionProps {
  // Define any props you might pass to the FlexBoxSection component
}

const skills = [
  {
    title: 'Love for Learning and Quick Learner',
    description: 'I always showcase my passion for learning and adaptability to new roles.',
    icon: '📚', // You can replace this with an appropriate icon or image
  },
  {
    title: 'Positive Attitude',
    description: 'I am highly optimistic and can-do attitude in various situations.',
    icon: '😄', // You can replace this with an appropriate icon or image
  },
  {
    title: 'Collaboration Skills',
    description: 'My ability to work effectively with others and contribute to team success.',
    icon: '🤝', // You can replace this with an appropriate icon or image
  },
  {
    title: 'Communication Skills',
    description: 'I have high proficiency in conveying ideas clearly and engagingly.',
    icon: '💬', // You can replace this with an appropriate icon or image
  },
  {
    title: 'Adaptability to Different Roles',
    description: 'I am versatile in taking on diverse responsibilities.',
    icon: '🎩', // You can replace this with an appropriate icon or image
  },
];

const FlexBoxSection: React.FC<FlexBoxSectionProps> = () => {
  return (
    <Container>
      <Typography variant="h4" className="section-header">
        Key Skills
      </Typography>
      <Box className="flex-container">
        {skills.map((skill, index) => (
          <Paper elevation={3} className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <Typography variant="h6" className="skill-title">
              {skill.title}
            </Typography>
            <Typography variant="body1" className="skill-description">
              {skill.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default FlexBoxSection;
