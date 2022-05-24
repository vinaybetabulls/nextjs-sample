import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  slider: {
    display: "flex",
    flexDirection: "row",
  },
  carousel: {
    margin: "0 auto",
    padding: `0`,
  },
  carouselItem: {
    margin: 0,
    display: "flex",
  },
  "custom-dot-list-style": {
    position: "relative",
    top: "35px",
    "& li:last-child button": {
      marginRight: "0",
    },
  },
  carouselContainer: {
    margin: "0 auto",
    width: "100%",
    position: "relative",
    top: 0,
    height: "initial",
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      "@media (orientation: landscape)": {
        marginTop: "0 !important",
      },
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "-52px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "-76px",
    },
  },
  leftButton: {},
  rightButton: {},
  customButtonGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    top: "50%",
    "@media (orientation: landscape)": {
      top: "42%",
    },

    [theme.breakpoints.up("sm")]: {
      "@media (orientation: landscape)": {
        top: "45% !important",
      },
    },
    "& $leftButton": {
      left: theme.spacing(1),
      position: "absolute",
      "& button": {
        width: "40px",
        height: "40px",
        [theme.breakpoints.up("md")]: {
          height: "60px",
          width: "60px",
        },
        "& .MuiFab-label": {
          width: "40px",
          height: "40px",
          [theme.breakpoints.up("md")]: {
            height: "60px",
            width: "60px",
          },
        },
      },
    },
    "& $rightButton": {
      right: theme.spacing(1),
      position: "absolute",
      "& button": {
        width: "40px",
        height: "40px",
        [theme.breakpoints.up("md")]: {
          height: "60px",
          width: "60px",
        },
        "& .MuiFab-label": {
          width: "40px",
          height: "40px",
          [theme.breakpoints.up("md")]: {
            height: "60px",
            width: "60px",
          },
        },
      },
      [theme.breakpoints.up("md")]: {
        right: "8px",
      },
    },
  },
}));

export default useStyles;
