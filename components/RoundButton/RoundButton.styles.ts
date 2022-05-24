import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    width: "fit-content",
    textAlign: "left",
  },

  roundButton: {
    "&.MuiFab-root": {
      height: "60px",
      width: "60px",
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.24)",
      "& .MuiFab-label": {
        border: `1px solid #8d6a00`,
        borderRadius: "50%",
        height: "60px",
        width: "60px",
      },
      "&:hover": {
        backgroundColor: "#fbf5db",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.32)",
      },
      "&:focus": {
        backgroundColor: "#fbf5db",
        boxShadow: "0px 0px 8px #008be9, 0px 4px 8px rgba(0, 0, 0, 0.32)",
      },
      "&:active": {
        boxShadow: "none",
      },
      "&:disabled": {
        backgroundColor: "#fffff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.24)",
      },
      "&$small": {
        width: "32px",
        height: "32px",
        minHeight: "32px",
        "& .MuiIcon-root": {
          fontSize: "14px",
        },
        "& .MuiFab-label": {
          width: "32px",
          height: "32px",
        },
      },
    },
  },
  label: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.1px",
    lineHeight: "1.25rem", // '0.75rem', table incorrect
    paddingTop: "2px",
    paddingBottom: "2px",
  },
  labelAlignSide: {
    paddingLeft: "8px",
  },
  labelAlignBottom: {
    display: "block",
    textAlign: "center",
    paddingTop: "8px",
  },
  icon: {
    color: "#8d6a00",
  },
  rippleClass: {
    color: "#e7d08e",
  },
  disabledIcon: {},
  small: {},
}));

export default useStyles;
