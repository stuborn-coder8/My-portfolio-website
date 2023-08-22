import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcom to <br/>
        My Personal Portfolio

      </SectionTitle>
      <SectionText>
        I am a Full Stack Web Developer with experience in building web applications using JavaScript and Python.

      </SectionText>
      <Button onClick={()=>window.location="https://google.com"}>Learn more</Button>
    </LeftSection>

  </Section>
);

export default Hero;