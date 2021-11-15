import React from "react";

import { theme } from "../theme";

import styled from "styled-components/native";

const Home = () => {
  return (
    <StyledView>
      <StyledText style={{ color: theme.primary }}>Primary</StyledText>
      <StyledText style={{ color: theme.secondary }}>Secondary</StyledText>
      <StyledText style={{ color: theme.light }}>Light</StyledText>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 40;
  font-weight: 600;
`;

export default Home;
