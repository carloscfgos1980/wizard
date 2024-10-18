import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/configureStore';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import { getCoursesAsync } from '../redux/filteredCourses';
import CoursesComoponent from '../components/CoursesComoponent';

import RootLayout from '../pages/RootLayout';
import Courses from '../pages/Courses';
import Modules from '../pages/Modules';
import Lessons from '../pages/Lessons';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCoursesAsync());
  }, [dispatch]);
  

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Courses />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/lessons" element={<Lessons />} />
    </Route>,
  ),
);

  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <RouterProvider router={router} />
      {/* <CoursesComoponent/> */}

    </div>
  );
}

export default App;
