import React from "react";
import { Text } from "react-native";

import styled from "styled-components/native";
import { theme } from "../theme";

const HomeTaskItem = ({ item }) => {
  return <Text>{item.text}</Text>;
};

export default HomeTaskItem;
