import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1228, text: 'Open Source Projects' },
  { number: 391, text: 'SEO Audit', },
  { number: 84, text: 'Websites Built', },
  { number: 11, text: 'Projects Developped', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>🥇 Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
