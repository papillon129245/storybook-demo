import React from 'react';
import TodoContainer from '../TodoContainer';

export default {
  title: 'TodoContainer',
  component: TodoContainer,
};

export const NormalTodoContainer = () => 
<TodoContainer todos={['take dogs out','Prepare breakfast for Sara', 'Teach REACT']} />;

