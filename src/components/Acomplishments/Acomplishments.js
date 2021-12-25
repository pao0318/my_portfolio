import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '73+', text: 'Open Source Projects' },
  { number: '1000+', text: 'Github Contributions', },
  { number: 'Rank 2', text: 'HUAWEI DIGIX Challenge', },
  { number: 'Rank 3', text: 'Walmart SparkTech', },
];

const Acomplishment = () => (
  <Section id="acomplishments">
    <SectionTitle>Acomplishment</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

  </Section>
);

export default Acomplishment;
