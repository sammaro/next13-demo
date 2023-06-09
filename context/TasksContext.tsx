'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Task } from '@/interfaces';
import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { v4 as uuid } from 'uuid';

interface ContextProps {
  tasks: Task[];
  createTask: ({ title, description }: Task) => void;
  deleteTask: ({ id }: Task) => void;
  updateTask: (updatedTask: Task) => void;
}

export const TaskContext = createContext({} as ContextProps);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within a provider');
  return context;
};

export const TaskProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const createTask = ({ title, description }: Task) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        description,
        title,
      },
    ]);
  };

  const deleteTask = ({ id }: Task) => {
    let filtererTasks = [...tasks.filter((task: Task) => task.id !== id)];
    if (filtererTasks.length === 0) {
      filtererTasks = [];
    }
    setTasks(filtererTasks);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks([
      ...tasks.map((task: any) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      ),
    ]);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        updateTask
      }
      }>
      {children}
    </TaskContext.Provider>
  );
};
