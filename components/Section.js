import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  padding: 10px;
  background-color: #fcfcfc;
  color: #333;
  font-style: italic;
  font-size: 14px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>
      <h3>{title}</h3>
    </Title>
    {children}
  </Container>
);

Section.defaultProps = {
  title: "",
  children: null,
};

export default Section;
