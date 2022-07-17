import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Menubar from "../menubar";
import styles from "./styles";

const Result = () => {
  let activeSample = {
    name: "Muntal bin Jumut",
    idType: "Nric",
    socialId: "12345677890",
    tagNo: "007",
    photoTakenAt: "2222/12/13",
    interpretation:
      "IgG: positive; IgM: negative; Ns1Ag: positive. Interpretation: you are between maternity ward and the grave, sickness is part of the deal. Turn on, tune in, drop out!",
    samplePhotoDataUri: "",
  };
  return (
    <>
      <Menubar handleLogout={() => console.log("logout")} />
      <div style={styles.summaryContainer}>
        <Paper elevation={6} style={styles.summaryResultPaper}>
          <Typography variant="h6" color="primary">
            Results
          </Typography>
          <Typography variant="body1">{activeSample.interpretation}</Typography>
        </Paper>
        <div
          style={{
            margin: "1rem",
          }}
        >
          <Typography variant="caption" color="primary">
            Patient name:
          </Typography>
          <Typography variant="body1">{activeSample.name}</Typography>
          <Typography variant="caption" color="primary">
            {activeSample.idType}
          </Typography>
          <Typography variant="body1">{activeSample.socialId}</Typography>
          <Typography variant="caption" color="primary">
            Tested on:
          </Typography>
          <Typography variant="body1">05 Apr 2022 09:45:12AM</Typography>
          <Typography variant="caption" color="primary">
            Test site:
          </Typography>
          <Typography variant="body1">
            Klinic 1MDB, Pekan Rasuah, Pahang.
          </Typography>
          <Typography variant="caption" color="primary">
            Test kit:
          </Typography>
          <Typography variant="body1">
            Dengue Virus Antigen Rapid Test kit
          </Typography>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <img
            style={{ width: "100%", height: "auto" }}
            src={activeSample.samplePhotoDataUri}
          />
        </div>
        <div style={styles.summaryPhotoTagNo}>Tag No#{activeSample.tagNo}</div>
        <div style={styles.summaryPhotoTakenAt}>
          {activeSample.photoTakenAt}
        </div>
      </div>
    </>
  );
};
export default Result;
