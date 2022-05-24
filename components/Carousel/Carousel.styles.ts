import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  carousel: {
    // default to full width
    width: "100%",
    // if width is constrained, default to center aligned
    margin: "0 auto",

    "& .react-multi-carousel-list": {
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
    },
    "& .react-multi-carousel-track": {
      listStyle: "none",
      padding: "0",
      margin: "0",
      display: "flex",
      flexDirection: "row",
      position: "relative",
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
      willChange: "transform, transition",
    },
    "& .react-multiple-carousel__arrow": {
      position: "absolute",
      outline: "0",
      transition: "all .5s",
      borderRadius: "35px",
      zIndex: 1000,
      border: "0",
      background: "rgba(0, 0, 0, 0.5)",
      minWidth: "43px",
      minHeight: "43px",
      opacity: 1,
      cursor: "pointer",
    },
    "& .react-multi-carousel-dot-list": {
      bottom: "0",
      display: "flex",
      left: "0",
      right: "0",
      justifyContent: "center",
      margin: "auto 0",
      padding: "0",
      listStyle: "none",
      textAlign: "center",
    },
    "& .react-multi-carousel-dot button": {
      display: "inline-block",
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      opacity: 1,
      padding: "5px 5px 5px 5px",
      boxShadow: "none",
      transition: "background .5s",
      borderWidth: "2px",
      borderStyle: "solid",
      backgroundColor: "#bdbdbd",
      borderColor: "#bdbdbd",
      marginRight: "12px",
      margin: "0",
      outline: "0",
      cursor: "pointer",
    },
    "& .react-multi-carousel-dot button:hover:active": {
      background: "#080808",
    },

    "& .react-multi-carousel-item": {
      transformStyle: "preserve-3d",
      backfaceVisibility: "hidden",
    },
  },
}));

export default useStyles;
