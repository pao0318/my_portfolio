import React from 'react';
import { DiFirebase, DiGoogleCloudPlatform, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with range of technologies in development.
      From machine learning to backend.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>
          Experience with <br />
          React.js
        </ListParagraph>
      </ListItem>

      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>Back-End</ListContainer>
        <ListParagraph>
          Experience with <br />
          Node js and Databases
        </ListParagraph>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>UI/UX</ListContainer>
        <ListParagraph>
          Experience with <br />
          Figma
        </ListParagraph>
      </ListItem>

      <ListItem>
        <DiGoogleCloudPlatform size="3rem" />
        <ListContainer>AI/ML</ListContainer>
        <ListParagraph>
          Experience with <br />
          Google Colab
        </ListParagraph>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
