import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Rootlayout from './layout/Rootlayout';
import HomePage from './page/HomePage';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <h1>404 Not found this page...</h1>,
    children: [
      { index: true, element: <HomePage /> },
    ]
  }
]);

function App() {

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App