import React, { useState } from "react";
import { Text } from "react-native";

import styled from "styled-components/native";

import HomeTaskItem from "./HomeTaskItem";
import CategoryBar from "../components/CategoryBar";
import { theme } from "../theme";

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
        <StyledInput
          value={newTask}
          placeholder="Add a task"
          autoFocus={true}
          onBlur={() => setIsAdding(false)}
          onSubmitEditing={addTask}
          onChangeText={setNewTask}
        />
      )}
    </>
  );
};

const StyledInput = styled.TextInput``;

export default HomeTasks;
