import React, { useState, useContext } from "react";
import Modal from '../components/form/Modal';

const TaskContext = React.createContext();

export const TaskProvider = ({ children, ...props }) => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)

  const addTask = (taskName, Icon, attendees, recurrence, time) => {
    setTasks((current) => [...current, { taskName, Icon, attendees, recurrence, time }])
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <TaskContext.Provider
      value={{
        addTask,
        tasks,
        toggleModal
      }}
      {...props}
    >
      <div className="relative">
        {modalOpen && <Modal />}
        {modalOpen && <div className="w-full h-screen bg-black opacity-50 absolute top-0 right-0 z-10" />}
        {children}
      </div>
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);

export default TaskContext;
