const styles: { [key: string]: React.CSSProperties } = {
  summaryContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "1rem",
  },
  summaryResultPaper: {
    padding: "1rem",
  },
  summaryPhotoTagNo: {
    position: "absolute",
    top: "710px",
    left: "35px",
    color: "#636e72",
    fontFamily: "Abel",
    fontSize: "17pt",
    fontWeight: 600,
    textShadow: "-0.9px 0.7px 0.7px rgba(255, 255, 255, 1)",
  },
  summaryPhotoTakenAt: {
    position: "absolute",
    top: "735px",
    left: "35px",
    color: "#636e72",
    fontFamily: "Abel",
    fontSize: "15pt",
    fontWeight: 600,
    textShadow: "-0.9px 0.7px 0.7px rgba(255, 255, 255, 1)",
  },
};
export default styles;
