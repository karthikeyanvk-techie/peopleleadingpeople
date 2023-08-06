import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import './SingleColumnScroll.css'; // Import your custom CSS for styling

interface SingleColumnScrollProps {
  // Define any props you might pass to the SingleColumnScroll component
}

const SingleColumnScroll: React.FC<SingleColumnScrollProps> = () => {
  return (
    <Container>
      <div className="scroll-content">
        <Typography variant="h4" className="section-header">
          Pitch: Achieving My Aspirations
        </Typography>
        <Typography variant="body1" className="pitch-text">
          In the pursuit of my aspirations, I am committed to a journey of growth and transformation. Through a combination of strategic actions and unwavering dedication, I am confident in my ability to realize my vision over the next 24 months.
        </Typography>
        <Paper elevation={3} className="section-paper">
          <Typography variant="h6" className="section-title">
            1. Technical Mastery and Diversification:
          </Typography>
          <Typography variant="body1" className="section-description">
            I am determined to strengthen my expertise in full stack development, as well as embark on a learning journey to master Data Engineering, Cloud Management, and DevOps. This will not only enhance my technical prowess but also equip me with a versatile skill set that's crucial in today's dynamic tech landscape. My dedication to continuous learning and embracing new challenges will be the cornerstone of my success.
          </Typography>
        </Paper>
        <Paper elevation={3} className="section-paper">
          <Typography variant="h6" className="section-title">
            2. Financial Discipline and Farm Expansion:
          </Typography>
          <Typography variant="body1" className="section-description">
            I am prepared to make prudent financial decisions by forgoing certain luxuries to ensure the realization of my dream to expand my farm by two acres. By prioritizing fiscal responsibility and resource allocation, I will secure the resources necessary to make this expansion a reality. This demonstrates my commitment to sustainable growth and responsible stewardship of resources.
          </Typography>
        </Paper>
        <Paper elevation={3} className="section-paper">
          <Typography variant="h6" className="section-title">
            3. Cultivating Leadership and Empowerment:
          </Typography>
          <Typography variant="body1" className="section-description">
            A pivotal aspect of my vision is to cultivate a culture of leadership within my team. I lead by example, personally engaging in the tasks I ask of my team members. This approach not only fosters a sense of unity and camaraderie but also empowers each team member to develop their leadership potential. By nurturing their growth, I aim to create a team of empowered leaders who collectively contribute to our shared success.
          </Typography>
        </Paper>
        <Paper elevation={3} className="section-paper">
          <Typography variant="h6" className="section-title">
            4. Active Mentorship and Skill Sharing:
          </Typography>
          <Typography variant="body1" className="section-description">
            I am dedicated to actively mentoring and guiding others. Sharing my knowledge and experience, I aim to uplift and elevate individuals along their career paths. Through hands-on guidance and the provision of resources, I will empower my team members and colleagues to achieve their personal and professional aspirations, fostering an environment of mutual growth.
          </Typography>
        </Paper>
        <Paper elevation={3} className="section-paper">
          <Typography variant="h6" className="section-title">
            5. Impactful Contributions:
          </Typography>
          <Typography variant="body1" className="section-description">
            With an unwavering passion for technological innovation, I envision contributing to the tech community through the creation of an open-source software solution and the publication of a thought-provoking book/novel. These creative endeavors are a testament to my commitment to leaving a lasting mark and inspiring others to explore new horizons.
          </Typography>
        </Paper>
        <Typography variant="body1" className="summary-text">
          In summary, my journey towards realizing my aspirations is marked by dedication, continuous self-improvement, responsible financial choices, and a commitment to nurturing leadership and empowerment. By embodying these principles and leveraging my strengths, I am confident that I will not only achieve my goals but also make a meaningful and lasting impact on both the tech industry and the world around me.
        </Typography>
      </div>
    </Container>
  );
};

export default SingleColumnScroll;
