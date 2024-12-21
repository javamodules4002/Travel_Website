import { Route, Routes } from "react-router-dom";
import './App.css'
import IndexPage from "./Pages/IndexPage";
import LoginPage from "./Pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import axios from "axios";

axios.defaults.baseURL='http://localhost:5173/';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
    
  )
}

export default App
