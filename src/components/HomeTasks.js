import React, { useState } from "react";

import styled from "styled-components/native";

import { View } from "react-native";

import HomeTaskItem from "./HomeTaskItem";
import CategoryBar from "../components/CategoryBar";
import { theme } from "../theme";
import { images } from "../images";
import IconButton from "./IconButton";

const HomeTasks = ({ tasks, setTasks }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState("");

  const onPressOut = () => {
    setIsAdding(true);
  };

  const addTask = (category) => {
    setNewTask("");
    const ID = Date.now().toString();
    const newTaskObj = {
      id: ID,
      text: newTask,
      date: null,
      due: null,
      category,
      image: null,
      complete: false,
      created: Date.now(),
    };
    setTasks([...tasks, newTaskObj]);
  };

  return (
    <>
      <CategoryBar onPressOut={onPressOut} />
      {tasks.map((item) => (
        <HomeTaskItem key={item.id} item={item} />
      ))}
      {isAdding && (
        <StyledView>
          <IconButton type={images.uncomplete} />
          <StyledInput
            value={newTask}
            placeholder="Add a task"
            autoFocus={true}
            onBlur={() => setIsAdding(false)}
            onSubmitEditing={addTask}
            onChangeText={setNewTask}
          />
        </StyledView>
      )}
    </>
  );
};

const StyledInput = styled.TextInput`
  margin-left: 5px;
`;

const StyledView = styled.View`
  flex-direction: row;
  margin-left: 5px;
  color: ${theme.secondary};
`;

export default HomeTasks;
