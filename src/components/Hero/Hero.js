import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi <br />
          I'm Prajakta Satikosare
        </SectionTitle>
        <SectionText>
        My portfolio is a representation of all the skills i've self-learned.
        </SectionText>
        <Button onClick={()=>window.location='https://github.com/prajakta-hue/Resume'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;