import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

//to do 
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Porfolio
      </SectionTitle>
      <SectionText>
        I am a student developer with a passion for creating meaingful applications and
        intuitive user experiences. 
      </SectionText>
      <Button onClick = {() => window.location = "https://drive.google.com/file/d/1rrWq3tQQlyFxrN-oUNoD9zuZnwci4ODb/view?usp=sharing"}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;