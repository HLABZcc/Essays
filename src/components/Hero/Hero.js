import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          HLABZ.cc® <br />
          📓 Essays
        </SectionTitle>
        <SectionText>
          <strong>HLABZ®</strong> is a multifaceted technology company with a focus on staying ahead of the curve. 🌊
        </SectionText>
        <a href="https://www.hlabz.cc"><Button>→ Learn More</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
