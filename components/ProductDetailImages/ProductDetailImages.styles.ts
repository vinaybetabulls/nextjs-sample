import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  carousel: {
    maxWidth: "500px",
    backgroundColor: "#f6f6f6",
    "& .react-multi-carousel-dot-list": {
      position: "initial",
      paddingBottom: "16px",
    },
  },

  imageContainer: {
    backgroundColor: "#f6f6f6",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridGap: theme.spacing(3),
    gridTemplateRows: "auto",
    gridTemplateColumns: "auto",
    gridTemplateAreas: '"area-1"',
  },
  zoomInModal: {
    [theme.breakpoints.between("md", "lg")]: {
      "& .MuiDialog-paperScrollPaper": {
        padding: "24px",
      },
    },

    "& .MuiDialog-paper": {
      padding: "12px 20px 0 20px",
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(4),
      },
      "& header": {
        display: "grid",
        alignItems: "unset",
        "& button": {
          position: "relative",
          width: "40px",
          height: "40px",
          [theme.breakpoints.up("md")]: {
            height: "60px",
            width: "60px",
          },
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
  },
}));

export default useStyles;
