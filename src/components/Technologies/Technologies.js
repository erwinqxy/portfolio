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
            React <br />
            JavaScript <br />
            HTML, CSS <br />
          </ListParagraph>        
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="5rem"/>
        <ListContainer>
          <ListTitle>BackEnd-End</ListTitle>
          <ListParagraph>
            Python, Django <br />
            Java <br />
            SQL, pgSQL <br />

          </ListParagraph>        
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="5rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma, Miro <br />
          </ListParagraph>        
        </ListContainer>
      </ListItem>
    </List>
    </SectionText>
  </Section>
);

export default Technologies;
