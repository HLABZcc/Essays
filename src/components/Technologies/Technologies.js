import React from 'react';
import { DiKomodo, DiNpm, DiGroovy } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>🏗 WHAT WE DO?</SectionTitle>
    <SectionText>
      Our work covers the full spectrum of software development and support for the projects we create. 🛠
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiNpm size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>App development</ListTitle>
          <ListParagraph>
            We build SAAS, Website &<br />
            Mobile App using various technologies.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiKomodo size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>SEO Consulting</ListTitle>
          <ListParagraph>
            We provide SEO Audit, Netlinking, <br />
            SEO strategy Consulting that will allow you to plan and manage the growth of your business easily!
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGroovy size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>ADS Campaign</ListTitle>
          <ListParagraph>
            We run & Optimize:<br />
            Google Ads, Facebook Ads, Snapchat Ads, Tiktok Ads & Taboola Campaigns.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
