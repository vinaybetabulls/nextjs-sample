import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  perimeter: {
    margin: "0 auto",
    maxWidth: "100%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
    },
    [theme.breakpoints.up("md")]: {
      width: "82%",
      height: "100%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: "calc(100vh - 128px)",
    },
  },
  image: {
    "& > div": {
      height: "100%",
      "& > div": {
        "& > img:first-child": {
          objectFit: "cover",
          [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 170px)",
            "@media (orientation: landscape)": {
              height: "calc(100vh - 125px)",
            },
          },
          [theme.breakpoints.between("md", "xl")]: {
            height: "calc(100vh - 194px)",
          },
        },
      },
    },
  },
  zoomIn: {
    "& > div": {
      cursor: `url('/images/icons/cursors/zoomIn.svg'), auto !important`,
    },
  },
  zoomOut: {
    "& > div": {
      cursor: `url('/images/icons/cursors/zoomOut.svg'), auto !important`,
      caretColor: "white",
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
