import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 100px 0 40px;
`;

const Page = props => <Container>{props.children}</Container>;

export default Page;
