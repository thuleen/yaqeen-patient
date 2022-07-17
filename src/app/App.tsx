import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Result from "../result/Result";
import logo from "../assets/yaqeen-logo.png";
import styles from "./styles";
import LoginForm from "../login/LoginForm";

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="yaqeen logo" style={styles.logo} />
        <Typography variant="body1" color="yellow">
          simply delivers your test kit results
        </Typography>
        <LoginForm />
      </header>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:sampleId" element={<Result />} />
    </Routes>
  );
}

export default App;
