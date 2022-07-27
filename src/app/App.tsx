import React from "react";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import RedoIcon from "@mui/icons-material/Redo";
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
import { initApp, InitAppPayload, loginAsGuest } from "../redux-saga/actions";
import { AppState } from "../store";

interface HomePageProps {
  toggleUpdate: () => void;
  errMsg: string | null;
}

const HomePage = (props: HomePageProps) => {
  const { toggleUpdate, errMsg } = props;
  return (
    <div className="App">
      {errMsg ? <Alert icon={false} severity="error">{errMsg}</Alert> : null}
      <header className="App-header">
        <img src={logo} alt="yaqeen logo" style={styles.logo} />
        <Typography variant="h5" color="yellow">
          simply delivers your results
        </Typography>
        <div style={{ height: "1rem" }} />
        <LoginForm />
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}
        >
          <Button
            type="submit"
            color="primary"
            form="login-form"
            variant="contained"
          >
            submit
          </Button>
        </div>
        <div style={{ height: "150px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" color="white">
            Version {import.meta.env.VITE_APP_VERSION}
          </Typography>
          <IconButton onClick={toggleUpdate}>
            <RedoIcon fontSize="small" style={{ color: "white" }} />
          </IconButton>
        </div>
      </header>
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  const handleInit = (payload: InitAppPayload) => dispatch(initApp(payload));
  const { errMsg, samples } = useSelector((state: AppState) => state.app);

  React.useEffect(() => {
    handleInit({ appPassword: "ToReadFromEnvFile" });
    return () => {};
  }, []);

  const toggleUpdate = () => {
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
        window.location.reload();
      });
    }
  };

  if (samples) {
    return <Result />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage toggleUpdate={toggleUpdate} errMsg={errMsg} />}
      />
      <Route
        path="/:sampleId"
        element={<HomePage toggleUpdate={toggleUpdate} errMsg={errMsg} />}
      />
    </Routes>
  );
}

export default App;
