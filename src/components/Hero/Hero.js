import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typical from 'react-typical'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey <br />
        I am Siddharth Sharma
      </SectionTitle>
      <SectionText>
        I am a
        <Typical loop={Infinity}
          steps={[
            "Machine Learning Enthusiast",
            1000,
            "MERN Stack Developer 💻",
            1000,
            "Open Source  ❤ ",
            1000,
            "Designer 🎨",
            1000,
          ]} />
      </SectionText>
      <Button onClick={() => window.location = "https://drive.google.com/file/d/1JrKLyFq7b6S7CK3iqmWhKWGCqOuRgdl9/view"}>Resume</Button>
    </LeftSection>
  </Section >
);

export default Hero;