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
  transformContentClass: {
    width: "100%",
  },
  mobileImageContainer: {
    "& div": {
      width: "initial !important",
    },
    "& img": {
      [theme.breakpoints.down("sm")]: {
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
  squareImage: {
    [theme.breakpoints.up("xs")]: {
      // Use padding top to make image square
      paddingTop: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      // Use padding top to make image square
      paddingTop: "50%",
    },
  },
  image: {
    // default on mobile the image is full width and positioned above or below the content
    width: "100%",
    position: "relative",
    "& img": {
      // img fills the relative container (image or container) using absolute and cover
      objectFit: "cover",
      display: "block",
      position: "absolute",
      width: "100%",
      // height: "100%",
      left: 0,
      top: 0,
    },

    // Make square on mobile
    paddingTop: "100%",
    [theme.breakpoints.up("xs")]: {
      // Use min heights on tablet up
      paddingTop: 0,
    },
    [theme.breakpoints.up("sm")]: {
      // default on desktop is for image to be 50% wide unless fullImage
      width: "50%",
    },
    // backup  image min height if other min heights not used
    minHeight: "200px",
  },
}));
export default useStyles;
