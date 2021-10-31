import React from 'react';
import { DiFirebase, DiPhotoshop, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience with the following technologies:
    <List>
      <ListItem>
        <DiReact size="5rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js 
          </ListParagraph>        
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="5rem"/>
        <ListContainer>
          <ListTitle>BackEnd-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Django <br />
          </ListParagraph>        
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="5rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with tools such as<br />
            Figma, Miro <br />
          </ListParagraph>        
        </ListContainer>
      </ListItem>
    </List>
    </SectionText>
  </Section>
);

export default Technologies;
