import React, { useState } from "react";
import { Dimensions, Pressable, Text } from "react-native";

import styled from "styled-components/native";
import { theme } from "../theme";
import { images } from "../images";
import IconButton from "./IconButton";

const CategoryBar = ({ onPressOut }) => {
  return (
    <StyledView>
      <Category>
        <Title>Food</Title>
        <IconButton onPressOut={onPressOut} type={images.add} />
      </Category>
      <Dropdown>Dropdown</Dropdown>
    </StyledView>
  );
};

const window = Dimensions.get("window");

const StyledView = styled.View`
  width: ${window.width - 20};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const Dropdown = styled.Text``;

export default CategoryBar;
