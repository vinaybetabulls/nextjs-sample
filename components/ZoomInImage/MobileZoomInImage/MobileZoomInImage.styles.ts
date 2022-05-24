import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    maxWidth: "100%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "82% !important",
    },
  },
  mobileImageContainer: {
    "& img": {
      width: "100%",
      objectFit: "cover",
      [theme.breakpoints.down("sm")]: {
        minHeight: "335px",
        height: "calc(100vh - 170px)",
        "@media (orientation: landscape)": {
          height: "calc(100vh - 132px)",
        },
      },
    },
  },
  productName: {
    backgroundColor: "#f6f6f6",
    color: "#4f4f4f",
    textAlign: "center",
    padding: "8px",
    "& p": {
      fontSize: "1rem",
      fontWeight: 500,
      letterSpacing: "0.25px",
      lineHeight: "1.5rem",
      paddingTop: "3px",
      paddingBottom: "1px",
      marginBottom: 0,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        fontWeight: 400,
        letterSpacing: "0px",
        lineHeight: "2rem",
        paddingTop: "1px",
        paddingBottom: "3px",
        marginBottom: "8px",
      },
    },
  },
}));
export default useStyles;
