import React from "react";
import { Pressable, Image } from "react-native";

import styled from "styled-components/native";

const IconButton = ({ onPressOut, type }) => {
  return (
    <Pressable onPressOut={onPressOut}>
      <Icon source={type} />
    </Pressable>
  );
};

const Icon = styled.Image`
  width: 25;
  height: 25;
`;

export default IconButton;
