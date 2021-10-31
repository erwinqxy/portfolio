import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './CertificationsStyles';

const data = [
  { title: 'Orbital Apollo 2021', link : 'https://credentials.nus.edu.sg/4364e4e4-a4e7-40fa-85c1-c62aeea8ad7a'}, 
  { title: 'Brainhack CODE_EXP 2021', link: 'https://certificates.nextid.com/certificate?id=37e4a159-31de-401c-84ea-2c9a54add624'}, 
  { title: 'Introduction to SQL', link: 'https://www.datacamp.com/statement-of-accomplishment/course/1c644544010c3001063bbee1c0be252c5c92dd5f?raw=1'}, 
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.title}</BoxText>
          <BoxText>{card.link}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
