import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    padding: "24px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
      maxWidth: "100%!important",
      maxHeight: "none!important",
      margin: "0!important",
      borderRadius: 0,
    },
    [theme.breakpoints.up("md")]: {
      padding: "32px",
      minWidth: "500px",
    },
    "& .MuiDialogContent-root": {
      overflowY: "initial",
    },
  },
  noPadding: {
    "& $modal": {
      padding: 0,
    },
    "& $header": {
      padding: `${"24px"} ${"24px"} 0 ${"24px"}`,
    },
  },
  header: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    flex: "0 0 auto",
    "& h3": {
      fontSize: "1.25rem",
      fontWeight: 400,
      letterSpacing: "0px",
      lineHeight: "2rem",
      paddingTop: "2px",
      paddingBottom: "2px",
      margin: `0 ${"16px"} 0 0`,
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
        fontWeight: 400,
        letterSpacing: "0px",
        lineHeight: "2.25rem",
        paddingTop: "1px",
        paddingBottom: "3px",
      },
    },
  },
  noTitleHeader: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "16px",
    alignItems: "center",
    padding: "16px",
    paddingBottom: 0,
    paddingTop: 0,
    "& button": {
      zIndex: 5,
      position: "relative",
    },
  },
  contentContainer: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    padding: "0!important",
    "& p": {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0px", // '0.25px',
      lineHeight: "1.5rem",
      paddingTop: "2px",
      paddingBottom: "2px",
      marginBottom: "24px",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
        fontWeight: 400,
        letterSpacing: "0px",
        lineHeight: "2rem",
        paddingTop: "2px",
        paddingBottom: "2px",
        marginBottom: "32px",
      },
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
  imageGalleryHeader: {
    paddingRight: "8px",
    marginBottom: "12px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "intial",
    },
  },
}));

export default useStyles;
