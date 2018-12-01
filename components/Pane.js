import React from "react";
import styled from "styled-components";

import Section from "./Section";
import Highlight from "./Highlight";
import Notes from "./Notes";

const Container = styled.div`
  width: 95%;
  max-width: 800px;
  margin: 30px auto 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  :first-child {
    margin-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 18px;
  color: #333;
`;

const Wrapper = styled.div`
  padding: 20px;
  overflow: hidden;
  background-color: #272822;
  margin-top: 8px;
`;

const Pane = ({ children, title, notes }) => (
  <Container>
    <Title>{title}</Title>
    <Wrapper>{children}</Wrapper>
    <Section title="`renderToStaticMarkup` output">
      <Highlight>{children}</Highlight>
    </Section>
    {!!notes && (
      <Section title="Notes">
        <Notes>{notes}</Notes>
      </Section>
    )}
  </Container>
);

export default Pane;
