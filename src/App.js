import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Undefined from './components/Undefined/Undefined';
import Blogs from './components/Blogs/Blogs';
import Start from './components/Start/Start';
import Quiz from './components/Quiz/Quiz';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, children: [
        {
          path: "/home",
          element: <Home></Home>,
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }
        },

        {
          path: "/quiz/:quizid",
          element: <Quiz></Quiz>,
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`)
          }
        },

        {
          path: "/statistik",
          element: <Start></Start>,

        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,

        },
        {
          path: "/*",
          element: <Undefined></Undefined>,

        }
      ]

    },


  ])
  return (

    <div className="container">
      <RouterProvider router={router}></RouterProvider>
      <h1>Learn Dev</h1>

    </div>
  );
}

export default App;
