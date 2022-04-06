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
      <Button onClick = {() => window.location = "https://docs.google.com/document/d/1rQiFf5l_LW3wo7sDMSsfy9mGsUn1JN4a/edit?usp=sharing&ouid=111099942703627877902&rtpof=true&sd=true"}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
