import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";

export const AnimatedDiv = animated(styled.div`
  width: 50px;
  height: 50px;
  background-color: orange;
  display: inline-block;
  margin: 4px;
`);

export const nativeRender = ({ y, ...style }) => (
  <AnimatedDiv
    style={{
      ...style,
      transform: y.interpolate(v => `translateY(${v}%)`),
    }}
  />
);

export const nonNativeRender = style => <AnimatedDiv style={style} />;
