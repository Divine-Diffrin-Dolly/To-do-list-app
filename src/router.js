import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingScreen } from './pages/LandingScreen';
import DashboardToDo from './pages/DashboardToDo';

const ToDoAppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        // the matching param will be available to the loader
        element={<LandingScreen />}
      />
      <Route
        path={'/dashboard'}
        element={
            <DashboardToDo />
        }
      />
    </Routes>
  );
};

export default ToDoAppRouter;
