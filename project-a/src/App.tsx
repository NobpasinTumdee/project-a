import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Rootlayout from './layout/Rootlayout';
import HomePage from './page/HomePage';
import ChatBot from './page/Chatbot';
import HistoryPage from './page/HistoryPage';

import './App.css';
import Documentation from './page/Documentation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <h1>404 Not found this page...</h1>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "chatbot", element: <ChatBot /> },
      { path: "history", element: <HistoryPage /> },
      { path: "documentation", element: <Documentation /> },
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

// npm install react-icons อย่าลืมๆ