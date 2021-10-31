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
        I am a full stack developer with a passion for creating beautiful and
        intuitive user experiences. 
      </SectionText>
      <Button onClick = {() => window.location = "https://drive.google.com/file/d/1tkgYEzQLdQT3SS5zU8kIHE1WEma58JAu/view?usp=sharing"}> Download Resume </Button>
    </LeftSection>
  </Section>
);

export default Hero;