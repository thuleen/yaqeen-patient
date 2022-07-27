import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Menubar from "../menubar";
import styles from "./styles";
import { AppState } from "../store";
import { logout } from "../redux-saga/actions";

export interface Sample {
  id?: number; // generated at API level
  testType: string;
  tagNo: string;
  name: string | null; // patient name
  mobileNo: string;
  socialId: string;
  idType: string;
  photoUri: string | null;
  pending: boolean;
  lastActiveStep: number;
  createdAt: string;
  photoTakenAt: string; // date time photo was taken
  result?: string;
  updatedAt?: string;
}

const Result = (props: { sample: Sample }) => {
  // const { samples } = useSelector((state: AppState) => state.app);
  const { sample } = props;
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());
  let result: { interpretation: string } = { interpretation: "Error" };
  let resultStr = sample.result;
  if (resultStr) {
    result = JSON.parse(resultStr);
  }

  return (
    <>
      <Menubar handleLogout={() => handleLogout()} />
      <div style={styles.summaryContainer}>
        <Paper elevation={6} style={styles.summaryResultPaper}>
          <Typography variant="h6" color="primary">
            Result(s)
          </Typography>
          <Typography variant="body1">{result.interpretation}</Typography>
        </Paper>
        <div
          style={{
            margin: "1rem",
          }}
        >
          <Typography variant="caption" color="primary">
            Patient name:
          </Typography>
          <Typography variant="body1" style={styles.listItem}>
            {sample.name}
          </Typography>
          <Typography variant="caption" color="primary">
            {sample.idType}
          </Typography>
          <Typography style={styles.listItem} variant="body1">
            {sample.socialId}
          </Typography>
          <Typography variant="caption" color="primary">
            Tested on:
          </Typography>
          <Typography variant="body1">{sample.updatedAt}</Typography>
          <Typography variant="caption" color="primary">
            Test site:
          </Typography>
          <Typography variant="body1">
            Klinic 1MDB, Pekan Rasuah, Pahang.
          </Typography>
          <Typography variant="caption" color="primary">
            Test kit:
          </Typography>
          <Typography variant="body1">{sample.testType}</Typography>
        </div>
        {sample.photoUri ? (
          <div>
            <div style={{ marginTop: "1rem" }}>
              <img
                style={{ width: "100%", height: "auto" }}
                src={sample.photoUri}
              />
            </div>
            <div style={styles.summaryPhotoTagNo}>Tag No#{sample.tagNo}</div>
            <div style={styles.summaryPhotoTakenAt}>{sample.photoTakenAt}</div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Result;
