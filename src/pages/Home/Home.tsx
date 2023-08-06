import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Button, Container, Backdrop, CircularProgress, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CarouselSection from '@components/CarouselSection';
import GridSection from '@components/GridSection';
import FlexBoxSection from '@components/FlexBoxSection';
import TwoColumnLayout from '@components/TwoColumnLayout';
import SingleColumnScroll from '@components/SingleColumnScroll';

interface HomeProps {
  // Define any props you might pass to the Home component
}

const sectionDurations = [30, 40, 50, 60, 80]; // Adjusted time durations for each section in seconds

const Home: React.FC<HomeProps> = () => {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState<number>(240); // Initial timer value in seconds (4 minutes)

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerRunning) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          clearInterval(interval);
        }

        // Check if it's time to scroll to a new section
        const elapsedTime = 240 - timer;
        for (let i = 0; i < sectionDurations.length; i++) {
          if (elapsedTime >= sectionDurations[i]) {
           // scrollToSection(i);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, isTimerRunning]);

  const handlePlayButtonClick = () => {
    setShowPlayButton(false);
    setIsTimerRunning(true);
  };

  const scrollToSection = (index: number) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      const offset = 100; // Adjust the offset value as needed
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {showPlayButton ? (
        <Backdrop open={showPlayButton} style={{ zIndex: 1 }}>
          <IconButton
            color="primary"
            size="large"
            onClick={handlePlayButtonClick}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '50%', animation: 'bounceIn 1s both' }}
          >
            <PlayCircleOutlineIcon fontSize="inherit" />
          </IconButton>
        </Backdrop>
      ) : (
        <>
          <Header timer={timer} />
          <Container>
            <div className="content">
              <section id="section-0">
                <CarouselSection />
              </section>
              <section id="section-1">
                <GridSection />
              </section>
              <section id="section-2">
                <FlexBoxSection />
              </section>
              <section id="section-3">
                <TwoColumnLayout />
              </section>
              <section id="section-4">
                <SingleColumnScroll />
              </section>
            </div>
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
