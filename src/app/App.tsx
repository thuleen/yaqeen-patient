import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
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
import { initApp, InitAppPayload } from "./redux-saga/actions";
import { AppState } from "../redux-saga/store";

interface HomePageProps {
  handleGuest: () => void;
}

const HomePage = (props: HomePageProps) => {
  const { handleGuest } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="yaqeen logo" style={styles.logo} />
        <Typography variant="body1" color="yellow">
          simply delivers your results
        </Typography>
        <div style={{ height: "1rem" }} />
        <LoginForm />
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}
        >
          <Button
            type="submit"
            color="secondary"
            form="login-form"
            variant="contained"
          >
            submit
          </Button>
          <div style={{ width: "5px" }} />
          <Button color="secondary" variant="outlined" onClick={handleGuest}>
            continue as guest
          </Button>
        </div>
        <div style={{ height: "150px" }} />
      </header>
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  const handleInit = (payload: InitAppPayload) => dispatch(initApp(payload));
  const { token } = useSelector((state: AppState) => state.app);
  const [isGuest, setIsGuest] = React.useState<boolean>(false);

  const handleGuest = () => {
      setIsGuest( true)
  }

  React.useEffect(() => {
    handleInit({ appPassword: "ToReadFromEnvFile" });
    return () => {};
  }, []);

  if (!token && isGuest) {
    return <Result />;
  }

  if (token && !isGuest) {
    return <Result />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage handleGuest={handleGuest} />} />
      <Route path="/:sampleId" element={<HomePage handleGuest={handleGuest} />} />
    </Routes>
  );
}

export default App;
