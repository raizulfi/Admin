import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Admin" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0)

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <Dashboard />
//       ),
//     },
//     {
//       path: "Centra",
//       element: <Centra />,
//     },
//     {
//       path: "Account",
//       element: <Account />,
//     },
//   ]);
  

//   return <RouterProvider router={router} />;
// }
