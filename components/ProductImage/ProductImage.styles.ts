import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {},
  imageContainer: {
    position: "relative",
    width: "100%",
    // Make the container a square as all padding is calculated from width, not height
    "&:after": {
      content: '""',
      display: "block",
      paddingBottom: "100%",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
    position: "absolute",
  },
  label: {
    paddingTop: "8px",
    paddingBottom: "8px",
    textAlign: "center",
    "& span": {
      fontSize: "1rem",
      fontWeight: 500,
      letterSpacing: "0.25px",
      lineHeight: "1.5rem",
      paddingTop: "3px",
      paddingBottom: "1px",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        fontWeight: 400,
        letterSpacing: "0px",
        lineHeight: "2rem",
        paddingTop: "2px",
        paddingBottom: "2px",
      },
    },
  },
  badge: {
    position: "absolute",
    left: "8px",
    top: "8px",
  },
}));

export default useStyles;
