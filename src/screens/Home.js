import React, { useState } from "react";

import styled from "styled-components/native";

import HomeTasks from "../components/HomeTasks";
import { theme } from "../theme";

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Buy Pizza",
      date: "Thu Nov 16 2021",
      due: null,
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1637004253818-d3072efc73fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
      complete: false,
      created: new Date().setDate(9),
    },
    {
      id: "2",
      text: "OpenSW Assignment",
      date: "Thu Nov 16 2021",
      due: "2021. 12. 15",
      category: "School",
      image: null,
      complete: true,
      created: new Date().setDate(5),
    },
  ]);

  return (
    <Wrapper>
      <StyledBar barStyle="default" />
      <StyledScroll>
        <HomeTasks tasks={tasks} setTasks={setTasks} />
      </StyledScroll>
    </Wrapper>
  );
};

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const StyledBar = styled.StatusBar`
  background-color: ${theme.background};
`;

const StyledScroll = styled.ScrollView``;

export default Home;
