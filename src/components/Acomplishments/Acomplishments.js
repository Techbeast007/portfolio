import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1 , text: 'Full stack developer in Varcus Technology Pvt Ltd',},
  { number: 2, text: 'Trainee Android developer at NextGenCoder', },
 
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Internships</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}.`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
